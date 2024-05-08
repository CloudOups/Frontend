import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { EventService } from '../../services/event.service';
import Swal from 'sweetalert2';

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
      location: ['', Validators.required],
      image: ['', Validators.required]
    });
  }


  

  event: any = {};
 image: File | null=null

onFileSelected(event: any) {
  const file: File = event.target.files[0];
  if (file) {
    this.image = file;
    const fileName = file.name;
    const imageEventControl = this.addEventForm.get("image");
    if (imageEventControl) {
      // Set the value to the file name for display purposes
      imageEventControl.setValue(fileName);
    }
  }
}
addEvent() {
  this.eventService.addEvent(this.event, this.image as File).subscribe(
    (res) => {
      console.log('Event added successfully');
      Swal.fire('Événement ajouté avec succès', 'Succès');
    },
    (err) => {
      console.error('Error adding event');
    }
  );
}

}