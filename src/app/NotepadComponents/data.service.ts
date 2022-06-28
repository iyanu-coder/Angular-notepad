import { Injectable } from '@angular/core';
import { Category } from './category';
import { Note } from './note';
@Injectable()

export class DataService {
    notes: Note[];
    n: Note;
    categories: Category[];
    c: Category;
    constructor(){
      this.categories = [{
        id: 1,
        name:"Cuisine"
      },
      {
        id:2,
        name:"Jardinage"
      }]
      this.notes = [{
          id: 1,
          title: 'Premiere Note',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
          date:'2017-05-08',
          category: this.categories[0].name
      },
      {
          id: 2,
          title: 'Deuxieme Note',
          content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          date:'2017-05-09',
          category: this.categories[1].name
      }]
      this.displayNotes(this.notes);
    }
     displayNotes(notes:Note[]) {
        return this.notes;
    }

    addNote(note:Note){
      this.n=note;
      //this.getTestNotes();
      this.notes.push(this.n);
      console.log(this.notes);
      return this.notes;
      //TODO : Api requests
    }
    getNotes(){

      return this.notes;
    }
    getCategories(){
      return this.categories;
    }
    addCategory(category:Category){
      this.c=category;
      this.categories.push(this.c);
      console.log(this.categories);
      return this.categories;
      //TODO : Api requests
    }
    editCategory(c:Category){
      this.categories.forEach(function(cat){
          if(c.id === cat.id){
            cat.name = c.name;
          }
      });
      console.log(this.categories);
      return this.categories;
    }

}
//
// interface note {
//   id:string;
//   title:string;
//   content:string;
//   date:string;
//   category:string;
// }
