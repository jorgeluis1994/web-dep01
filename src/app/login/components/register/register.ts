import { Component, effect, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-register',
  imports: [ButtonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  loginForm?: FormGroup;

  // definicion de variable
  status = signal<number>(0);

  constructor() {

    effect(()=>{
      console.log('Se actualiza el signal',this.status());
      
    })

    console.log('Inicia constructor');

  }
  addStatus(num: number) {

    this.status.set(num);

  }
    incrementar() {
    this.status.update(valor => valor + 1);
  }

}
