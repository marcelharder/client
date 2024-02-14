import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  loginFailed = false;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  loggedIn() { return this.auth.loggedIn(); }

  logOut() {
     
      localStorage.removeItem('token');
  }

  login(){
    
    this.auth.login(this.model).
    subscribe({
      next: (next) => 
      {
        
        this.loginFailed = false;
      },
      error: (e) => 
      {
        console.error(e);
        this.loginFailed = true;
      },
      complete: () => console.info('complete') 
  });

}
}
