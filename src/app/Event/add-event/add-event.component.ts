import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  addEventForm: FormGroup;
  progress = 0;
  message = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private eventService: EventService) {
    this.addEventForm = this.fb.group({
      nomEvent: ['', [Validators.required, Validators.minLength(6)]],
      categorie: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      nbParticipants: ['', [Validators.required, Validators.min(2)]],
      location: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.addEventForm.patchValue({
        image: file
      });
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('nomEvent', this.addEventForm.get('nomEvent')?.value);
    formData.append('categorie', this.addEventForm.get('categorie')?.value);
    formData.append('dateDebut', this.addEventForm.get('dateDebut')?.value);
    formData.append('dateFin', this.addEventForm.get('dateFin')?.value);
    formData.append('nbParticipants', this.addEventForm.get('nbParticipants')?.value);
    formData.append('location', this.addEventForm.get('location')?.value);
    formData.append('image', this.addEventForm.get('image')?.value);

    this.eventService.addEvent(formData).subscribe(
      event => {
        console.log('Event added successfully!', event);
        alert('Event ajouté avec succès!');
        this.addEventForm.reset();
      },
      error => {
        console.error('Error adding Event:', error);
      }
    );
  }
}
