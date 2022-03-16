import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles!: string[];
  isLoggedIn = false;
  username!: string;
  constructor(private tokenStorageService: TokenStorageService) { }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      user: this.tokenStorageService.getUser();
      this.username = user.username;
    }
  }
  logout(): void {
    if (confirm('Bạn có muốn đăng xuất không?')) {
      this.tokenStorageService.signOut();
      window.location.reload();
    }
  }
}
