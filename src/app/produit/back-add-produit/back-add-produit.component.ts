import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/services/produit/produit.service';

@Component({
  selector: 'app-back-add-produit',
  templateUrl: './back-add-produit.component.html',
  styleUrls: ['./back-add-produit.component.css']
})
export class BackAddProduitComponent implements OnInit{



  produitForm : any;


  constructor(private formBuilder: FormBuilder,
    private produitService: ProduitService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.produitForm = new FormGroup({
      nomProd : new FormControl('',[Validators.required,Validators.minLength(3)]),
      description : new FormControl('',[Validators.required,Validators.minLength(6)]),
      prix : new FormControl('',[Validators.required , Validators.pattern('^[0-9]{1,6}$')]),
      image: new FormControl('')    
  
  })
  }



  save(){
    
    let formData = this.produitForm.value;

    // Extract just the filename from the full path
    const fullPath = formData.image;
    const filename = fullPath ? fullPath.replace(/^.*[\\\/]/, '') : ''; // Regex to extract filename

    const imageUrl = `/assets/produit_image/${filename}`;
    formData.image = imageUrl;

    //console.log("LA VALEUR TRANSFORME EST: ",filename); // Output: 'psg.jpeg'

    if (this.produitForm.valid) {
      this.produitService.addProduit(formData).subscribe(
        data => {
        console.log("ajout avec succes", data);
        this.router.navigate(['/backListProduit']);
      },
      error => {alert("erreur lors de l'ajout du produit");});
    }else{
      alert("Erreur de validation");
    }
    
   // this.produitService.addProduit(this.produitForm.value as any);
  }
  
}


