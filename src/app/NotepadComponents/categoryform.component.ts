import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from './category';
import { DataService } from './data.service';

@Component({
  selector: 'category-form',
  template: `
  <div class="jumbotron col-md-8 col-md-offset-2">
     <form [formGroup]="categoryForm" (ngSubmit)="submitForm(categoryForm.value)">

       <div class="form-group col-md-6 col-md-offset-1" [ngClass]="{'has-error':!categoryForm.controls['name'].valid && categoryForm.controls['name'].touched}">
          <h2>Ajout d'une catégorie</h2>
         <label>Nom de la catégorie:</label>
         <input class="form-control" type="text" placeholder="" [formControl]="categoryForm.controls['name']">
         <div class="alert alert-danger" *ngIf="!categoryForm.controls['name'].valid && categoryForm.controls['name'].touched">Veuillez introduire un nom de catégorie avec mininum 4 caractères</div>
       </div>

       <div class="form-group col-md-10 col-md-offset-1">
         <button type="submit" class="btn btn-primary" [disabled]="!categoryForm.valid">Sauvegarder</button>
         <div class="alert alert-success" *ngIf="successSave">Catégorie enregistrée avec succés!</div>
       </div>
     </form>
   </div>
   `,
  providers: [DataService]
})

export class CategoryFormComponent {
  successSave:boolean;
  categoryForm: FormGroup;
  constructor(fb: FormBuilder, private _dataService:DataService){
    this.successSave=false;
    this.categoryForm = fb.group({
      'id' : 10,
      'name' : [null, Validators.compose([Validators.required, Validators.minLength(4)])]
    })
  }

  submitForm(value: any){
    this.successSave = true;
    console.log(value);
    this._dataService.addCategory(value);
  }

}
