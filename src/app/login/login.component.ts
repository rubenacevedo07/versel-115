import { Component, OnInit } from '@angular/core'; // 👈 Note: Added OnInit for clarity, though not strictly required for this fix
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms'; // 👈 Note: Added FormGroup
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // 1. Declare the property without initializing it here
  loginForm: FormGroup;
  // or use the non-null assertion operator if preferred: 
  // loginForm!: FormGroup;

  // 2. Initialize it in the constructor where 'fb' is available
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    // ... your onSubmit method remains the same
    if (this.loginForm.valid) {
      this.http.post<{ token: string }>('https://render1125.onrender.com/api/auth/login', this.loginForm.value)
        .subscribe({
          next: res => {
            localStorage.setItem('auth_token', res.token);
            alert('Login exitoso');
          },
          error: err => alert('Error al iniciar sesión: ' + err.message)
        });
    }
  }
}