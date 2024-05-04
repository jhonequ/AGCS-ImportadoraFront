import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { AppRoutingModule } from '../../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { LoginService } from '../../services/auth/login.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('(2) probando al existencia del componente "LoginComponent"', () => {
  let app: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule
      ],
      declarations: [
        LoginComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe existir el componente', () => {
    expect(app).toBeTruthy();
  });

  it('Debe retornar formulario invalido', () => {
    fixture.detectChanges();

    const email = app.loginForm.controls.email;
    email.setValue('prueba2@gmail.com');
    expect(app.loginForm.invalid).toBeTrue();
  })

  it('Debe retornar formulario exitoso', () => {
    fixture.detectChanges();

    const email = app.loginForm.controls.email;
    const pass = app.loginForm.controls.password;
    email.setValue('prueba@gmail.com');
    pass.setValue('1234');
    expect(app.loginForm.valid).toBeTrue();
  })
});

