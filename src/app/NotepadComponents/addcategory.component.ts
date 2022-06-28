import { Component } from '@angular/core';

@Component({
  selector: 'addcategory',
  template: `
    <category-form></category-form>
  `,
})
export class AddCategoryComponent  {

  constructor(){
    console.log('Constructeur note appelé');
  }

  SaveCategory(){
    console.log('Sauvegarde appelé');
  }
}
