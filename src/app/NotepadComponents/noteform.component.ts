import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from './category';
import { Note } from './note';
import { DataService } from './data.service';

@Component({
  selector: 'note-form',
  templateUrl : './noteform.component.html',
  providers: [DataService]
})

export class NoteFormComponent {
  successSave:boolean;
  noteForm: FormGroup;
  categories: Category[];

  constructor(fb: FormBuilder, private _dataService:DataService){
    this.successSave=false;
    this.categories = this._dataService.getCategories();
    this.noteForm = fb.group({
      'id' : 10,
      'title' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      'date': [null, Validators.compose([Validators.required, Validators.pattern('[0-9]{4}\-[0-9]{2}\-[0-9]{2}')])],
      'category' : [null, Validators.required],
      'content' : [null, Validators.required]
    })
  }

  submitForm(value: any){
    this.successSave = true;
    console.log(value);
    this._dataService.addNote(value);
  }

}
