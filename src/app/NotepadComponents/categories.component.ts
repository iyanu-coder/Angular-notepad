import { Component } from '@angular/core';
import { Category } from './category';
import { DataService } from './data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'categories',
  template: `
  <div class="col-md-6 col-md-offset-3">
    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nom</th>
          <th>Editer</th>
        <tr>
      </thead>
      <tbody>
        <tr *ngFor='let category of categories'>
          <td>{{category.id}}</td>

          <div *ngIf="((btnEdit) && (category.id === editId)) ;then thenBlock else elseBlock"></div>
          <ng-template #elseBlock>
            <td>{{category.name}}</td>
          </ng-template>
          <ng-template #thenBlock>
            <td>
              <form [formGroup]="categoryEditForm" (ngSubmit)="catEdit(categoryEditForm.value)">
                <div class="form-group" [ngClass]="{'has-error':!categoryEditForm.controls['name'].valid && categoryEditForm.controls['name'].touched}">
                  <input class="form-control" type="text" value={{category.name}} [formControl]="categoryEditForm.controls['name']"/>
                    <div class="alert alert-danger" *ngIf="!categoryEditForm.controls['name'].valid && categoryEditForm.controls['name'].touched">Veuillez introduire un nom de catégorie avec mininum 4 caractères</div>
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-success glyphicon glyphicon-ok" [disabled]="!categoryEditForm.valid" id='btnOk'>Ok</button>
                  <div class="alert alert-success" *ngIf="successSave">Catégorie modifiée avec succés!</div>
                </div>
              </form>
            </td>
          </ng-template>

          <td><a href="#" class="btn btn-primary glyphicon glyphicon-edit" id='btnEdit' (click)="btnEdit = !btnEdit; EditID(category.id)">Modifier</a></td>
        </tr>
      </tbody>
    </table>
  </div>
  `,
  providers: [ DataService ]
})
export class CategoriesComponent  {
  categoryEditForm: FormGroup;
  categories: Category[];
  btnEdit: boolean;
  editId:number;
  successSave: boolean;

  constructor(fb: FormBuilder, private _dataService:DataService){
    this.btnEdit=false;
    this.successSave=false;
    this.editId=0;
    console.log('Constructeur note appelé');
    this.categories = this._dataService.getCategories();
    console.log('editId:' + this.editId);
    this.categoryEditForm = fb.group({
      'id' : 10,
      'name' : [null, Validators.compose([Validators.required, Validators.minLength(4)])]
    })
  }

  catEdit(c: Category){
    this.successSave = true;
    c.id=this.editId;
    console.log('Catégorie ' + c.id + ' à modifier');
    this._dataService.editCategory(c);
  }

  catDelete(i: any){
    console.log('Catégorie ' + i + ' à supprimer');
  }

  EditID(myId:number){
    this.editId = myId;
    console.log('editId:' + this.editId);
    return this.editId;
  }
}
