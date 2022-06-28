import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Note } from './note';

@Component({
  selector: 'notes',
  template: `
    <div class="panel-default col-md-10 col-md-offset-1" *ngFor='let note of notes'>
      <div class="panel-heading"> <b>{{ note.title }}</b> <br> {{ note.category }} - {{ note.date }} </div>
      <div class="panel-body" id="content">
        <p id="contentText">{{ note.content }}</p>
        <ul class="list-inline">
          <li><a href="#" class="btn btn-primary glyphicon glyphicon-edit"></a></li>
          <li><a href="#" class="btn btn-danger glyphicon glyphicon-remove"></a></li>
        </ul>
      </div>
    </div>
  <div class="Content">

  </div>
  `,
  providers: [DataService]
})
export class NotesComponent  {
  notes: Note[];

  constructor(private _dataService: DataService){
    console.log('Constructeur note appelé');
    this.displayNotes();
  }
  displayNotes(){
    this.notes = this._dataService.getNotes();
    console.log('Notes :' + this.notes);
  }

}
