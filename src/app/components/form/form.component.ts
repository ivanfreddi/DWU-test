import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  name: string = '';
  lastName: string = '';
  age!: number;
  gender: string = '';
  bornDate!: number;
  formEmpty = false;

  saveData(): void {
    const formData = {
      nome: this.name,
      sobrenome: this.lastName,
      idade: this.age,
      sexo: this.gender,
      'data de nascimento': this.bornDate,
    };
    if (
      this.name == '' ||
      this.lastName == '' ||
      this.gender == '' ||
      this.age <= 0 ||
      new Date(this.bornDate).toString() === 'Invalid Date'
    ) {
      this.formEmpty = true;
    } else {
      this.formEmpty = false;
      console.log(formData);
    }
  }
}
