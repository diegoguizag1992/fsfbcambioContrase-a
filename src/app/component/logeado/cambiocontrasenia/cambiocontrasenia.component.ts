import { PasswordService } from './../../../service/changePassword/password.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert';


@Component({
  selector: 'app-cambiocontrasenia',
  templateUrl: './cambiocontrasenia.component.html',
  styleUrls: ['./cambiocontrasenia.component.less']
})
export class CambiocontraseniaComponent implements OnInit {


  resolvePassword: FormGroup;

  constructor(private fb: FormBuilder,
              private passwordService: PasswordService,
              ) { }

  ngOnInit(): void {

    this.filterCambioCitas();
  }


  onSubmit(): void {

    if (!this.resolvePassword.invalid) {


      this.passwordService.finalizarOrden(this.resolvePassword.value).subscribe(
        (data) => {

          swal({
            title: 'Correo de recuperación enviado.',
            text: 'Se envió un mensaje a tu correo electrónico *****@***.com, sigue las instrucciones del mensaje para restablecer la contraseña',
            icon: 'success',
          });

        }, (error) => {

          swal({
            title: '',
            text: 'Nit de usuario incorrecto',
            icon: 'error',
          });

        }
      )
    }
  }

  filterCambioCitas(): void {

    this.resolvePassword = this.fb.group({
     // documento: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10), Validators.pattern(/^([0-9])*$/)]],
     documento: ['', [Validators.required]],
     tipoDocumento: ['', [Validators.required]],
    });

  }

  close(): void {


  }


}
