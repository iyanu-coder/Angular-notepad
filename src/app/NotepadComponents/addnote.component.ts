import { Component } from '@angular/core';
//import { NoteForm } from './noteform.component';

@Component({
  selector: 'addnote',
  template: `
  <div class="row">
    <div class="col-sm-6 col-sm-offset-3">
      <note-form></note-form>
    </div>
  </div>
  `,
})
export class AddNoteComponent  {
}
