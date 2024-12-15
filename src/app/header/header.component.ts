import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router service

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // Logout method that navigates to the signup page
  logout(): void {
    // Perform any necessary logout actions (e.g., clear tokens, user data)
    localStorage.removeItem('token'); // Example: Remove token from local storage
    
    // Navigate to the signup page
    this.router.navigate(['/signup']);
  }
}
