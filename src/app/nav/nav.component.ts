import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../core/auth.service';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UserService } from '../user.service';
import { AppUser } from '../interfaces';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    selector: 'nav-bar'
})

export class NavComponent implements OnInit, OnDestroy {

  isLoggedIn$: Observable<boolean>;
  isAdmin: boolean;
  currentUser: AppUser;
  userProfileDialogRef: MatDialogRef<UserProfileComponent>;
  loginDialogRef: MatDialogRef<LoginComponent>;
  private subscriptions: Subscription[] = [];

  constructor(private dialog: MatDialog,
              private authService: AuthService,
              private userService: UserService,
              private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    // I believe this errors on logout...
    this.subscriptions.push(this.userService.get(
      this.userService.currentUser.id).subscribe( user => {
        this.currentUser = user;
        this.isAdmin = user.isAdmin;
      })
    );
  }

  public openEditUserProfileDialog(): void {
    this.userProfileDialogRef = this.dialog.open(UserProfileComponent, {width: '500px'});
    this.userProfileDialogRef.componentInstance.user = this.currentUser;
  }

  public openLoginDialog(): void {
    this.loginDialogRef = this.dialog.open(LoginComponent, {width: '400px'});
  }

  logout(): void {
    this.authService.logout();
    location.reload(true);
    this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
        subscription.unsubscribe();
    });
  }
}