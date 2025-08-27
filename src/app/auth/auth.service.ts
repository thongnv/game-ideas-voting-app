import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isLoggedIn = false;
  private username: string | null = null;
  private redirectUrl: string | null = null;
  setRedirectUrl(url: string) {
    this.redirectUrl = url;
  }

  getRedirectUrl(): string | null {
    return this.redirectUrl;
  }

  login(username: string, password: string): boolean {
    // Simple demo: accept any non-empty username/password
    if (username.trim() && password.trim()) {
      this.isLoggedIn = true;
      this.username = username;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.username = null;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getUsername(): string | null {
    return this.username;
  }
}
