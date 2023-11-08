import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit() {
    
    alert('Formulaire soumis avec succès !');

    this.name = '';
    this.email = '';
    this.message = '';
  }
}

