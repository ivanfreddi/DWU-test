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
  checkBox!: boolean;
  status!: boolean;
  formEmpty = false;

  saveData(): void {
    if (this.checkBox === undefined) {
      this.checkBox = false;
    }
    if (this.status === undefined) {
      this.status = false;
    }
    const formData = {
      nome: this.name,
      sobrenome: this.lastName,
      idade: this.age,
      sexo: this.gender,
      'data de nascimento': this.bornDate,
      EnviaEmail: this.checkBox,
      radioButton: this.status,
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
//Checkbox
//Quando clicar em salvar, aparecer a variavel 'EnviaEmail', sendo true caso esteja marcado, false caso não esteja.
//
//Radiobutton
//Opções:
//Ativo - valor 0
//Inativo - valor 1
