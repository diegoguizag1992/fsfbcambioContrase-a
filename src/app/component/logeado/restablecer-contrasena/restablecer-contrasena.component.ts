import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert';
import { PasswordService } from './../../../service/changePassword/password.service';



@Component({
  selector: 'app-restablecer-contrasena',
  templateUrl: './restablecer-contrasena.component.html',
  styleUrls: ['./restablecer-contrasena.component.less']
})
export class RestablecerContrasenaComponent implements OnInit {


  resolvePassword: FormGroup;
  hide = true;
  hideConfirm = true;

  iconPass: string = 'visibility_off';
  view: string = 'password';
  uid: "agarcia1";


  constructor(private fb: FormBuilder,
              private passwordService: PasswordService
              ) { }

  ngOnInit(): void {

    this.filterCambioCitas();
  }


  onSubmit(): void {


    if (!this.resolvePassword.invalid) {

      if (this.resolvePassword.value.userPassword === this.resolvePassword.value.confirmPassword) {

        this.passwordService.changePassword(this.resolvePassword.value).subscribe(
          (data: any) => {

            swal({
              title: 'Correo de recuperación enviado.',
              text: 'Se envió un mensaje a tu correo electrónico *****@***.com, sigue las instrucciones del mensaje para restablecer la contraseña',
              icon: 'success',
            });

          }, (error) => {

            console.log(error);

            swal({
              title: 'Algo salió mal.',
              text: 'Comuniquese con el administrador',
              icon: 'error',
            });

          });

        swal({
          title: 'Correo de recuperación enviado.',
          text: 'Se envió un mensaje a tu correo electrónico *****@***.com, sigue las instrucciones del mensaje para restablecer la contraseña',
          icon: 'success',
        });

      } else {

        swal({
          title: 'Algo salió mal.',
          text: 'Comuniquese con el administrador',
          icon: 'error',
        });

      }

    } else {

      swal({
        title: 'Algo salió mal.',
        text: 'Comuniquese con el administrador',
        icon: 'error',
      });

    }

  }

  filterCambioCitas(): void {

    this.resolvePassword = this.fb.group({
      userPassword: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10), ]],
      confirmPassword: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10),]],
    });



  }

  close(): void {


  }

}

