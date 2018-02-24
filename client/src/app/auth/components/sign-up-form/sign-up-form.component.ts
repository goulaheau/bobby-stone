import { UsersService }                       from '../../../core/services/users.service';
import { LoginFormComponent }                 from '../login-form/login-form.component';
import { Component, OnInit, HostBinding }     from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fadeInAnimation }                    from '../../../shared/animations/fade-in.animation';

@Component({
  selector: 'app-sign-up-form',
  animations: [fadeInAnimation],
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent extends LoginFormComponent implements OnInit {

  form: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  @HostBinding('@fadeInAnimation')
  public animatePage = true;

  constructor(public fb: FormBuilder,
              private usersService: UsersService) {
    super(fb);
  }

  ngOnInit() {
  }

  register(): void {
    this.usersService.post(this.form.value).subscribe(
      () => {
        this.submitted.emit(this.form.value);
      }
    );
  }
}
