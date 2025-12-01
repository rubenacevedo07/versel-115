import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  // 1. Declare the property and give it a type (FormGroup)
  registerForm: FormGroup;

  // 2. Initialize the property inside the constructor
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.http.post('https://render1125.onrender.com/api/auth/register', this.registerForm.value)
        .subscribe({
          next: () => alert('Usuario creado exitosamente'),
          error: err => alert('Error al registrar: ' + err.message)
        });
    }
  }
}