import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      // Handle the form submission, for example, send it to the server
      console.log(this.signupForm.value);
      
      // Navigate to different routes after successful signup
      this.router.navigate(['/home']);
    }
  }

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }

  navigateToSearch(searchTerm: string): void {
    this.router.navigate(['/search', searchTerm]);
  }

  navigateToTag(tag: string): void {
    this.router.navigate(['/tag', tag]);
  }

  navigateToFood(id: number): void {
    this.router.navigate(['/food', id]);
  }

  navigateToCartPage(): void {
    this.router.navigate(['/event-details']);
  }
}
