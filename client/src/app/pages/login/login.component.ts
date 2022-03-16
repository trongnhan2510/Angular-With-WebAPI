import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  constructor(private authService: AuthServiceService, private tokenStorage: TokenStorageService) { }
  ngOnInit(): void {
  }
  onSubmit(): void {
    const { username, password } = this.form;
    this.authService.login(username,password).subscribe((data:any)=>{
      this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser({username,password});
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        alert('Success');
        window.location.href = "";
    });
  }
}
