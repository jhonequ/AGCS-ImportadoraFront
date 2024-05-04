import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/auth/login.service';
import { LoginRequest } from '../../services/auth/loginRequest';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginError:string="";
  loginForm = this.formBuilder.group({
    email:['prueba@gmail.com',[Validators.required,Validators.email]],
    password:['',Validators.required]
  })

  constructor(private formBuilder:FormBuilder, private router:Router, private loginService:LoginService) { }

  ngOnInit(): void{
  }

  get email(){
    return this.loginForm.controls.email;
  }

  get password()
  {
    return this.loginForm.controls.password;
  }

  login(){
    if(this.loginForm.valid){
      this.loginError="";
      var dataLogin = this.loginForm.value as LoginRequest;
      this.loginService.login(dataLogin).subscribe({
        next: (userData) => {
          if (dataLogin.email.toUpperCase() === userData.email.toUpperCase()){
            console.log("correo igual");
            console.log(userData);
          }
          else{
            this.loginError = "Usuario o contraseña incorrecta"
          }
        },
        error: (errorData) => {
          console.error(errorData);
          this.loginError=errorData;
        },
        complete: () => {
          console.info("Login completo");
          this.router.navigateByUrl('/inicio');
          this.loginForm.reset();
        }
      })

    }
    else{
      this.loginForm.markAllAsTouched();
      alert("Error al ingresar los datos.");
    }
  }
}
