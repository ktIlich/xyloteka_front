import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../services/token-storage.service';
import {User} from '../../models/User.model';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User = new User();
  message = '';
  currentUser: any;
  currentUserAdmin = false;
  admin = this.currentUserAdmin;


  constructor(private token: TokenStorageService,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.message = '';
    this.getUser(this.currentUser.id);
  }

  getUser(id: number): void {
    console.log(id);
    this.userService.getById(id)
      .subscribe(
        data => {
          this.user = data;
          const roles = data?.roles || [];
          this.currentUserAdmin = typeof roles.find(r => (r.name === 'ROLE_ADMIN')) === 'object';
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  setAll(e: any): void {
    this.admin = e.target.checked;
  }

  updateUser(): void {
    this.message = '';

    this.userService.update(this.user.id, this.user)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This user was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  updateRole(): void {
    this.message = '';

    this.userService.updateRole(this.user.id, {admin: this.admin})
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This user role was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteUsers(): void {
    this.userService.delete(this.user.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/home']);
        },
        error => {
          console.log(error);
        });
  }
}


