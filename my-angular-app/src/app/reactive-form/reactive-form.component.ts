import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ 
    ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit  {
 userForm!: FormGroup; // Declare the FormGroup

  ngOnInit() {
    // Initialize the FormGroup with FormControls
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required), // Required field
      email: new FormControl('', [Validators.required, Validators.email]), // Required and email format validation
      message: new FormControl('')
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Submitted!', this.userForm.value);
      // You can send this data to a service or API
    } else {
      console.log('Form is invalid.');
    }
  }
}

