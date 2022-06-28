//Composant de routage
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';

import { NoteFormComponent }  from './NotepadComponents/noteform.component';
import { FormValidationComponent }  from './NotepadComponents/formvalidation.component';
import { CategoryFormComponent } from './NotepadComponents/categoryform.component';

import { UserComponent }  from './NotepadComponents/user.component';
import { NotesComponent }  from './NotepadComponents/notes.component';
import { CategoriesComponent }  from './NotepadComponents/categories.component';
import { AddNoteComponent }  from './NotepadComponents/addnote.component';
import { AddCategoryComponent }  from './NotepadComponents/addcategory.component';
import { AboutComponent }  from './NotepadComponents/about.component';
import { ErrorComponent }  from './NotepadComponents/error.component';


@NgModule({
  imports:      [
    BrowserModule,
  /*  RouterModule.forRoot([
      { path:'', component:UserComponent },
      { path:'notes', component:NotesComponent },
      { path:'categories', component:CategoriesComponent },
      { path:'categories/add', component:AddCategoryComponent },
      { path:'notes/add', component:AddNoteComponent },
    ]),*/
    FormsModule,

    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    UserComponent,
    NotesComponent,
    CategoriesComponent,
    AddNoteComponent,
    AddCategoryComponent,
    AboutComponent,
    ErrorComponent,

    CategoryFormComponent,
    NoteFormComponent,
    FormValidationComponent
  ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
