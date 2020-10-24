import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {JarvisService} from './services/jarvis.service';
import {TokenService} from './services/token.service';
import {AuthService} from './services/auth.service';

export interface Credentials {
  username?: string;
  password?: string;
}

export interface Session {
  token?: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  hide = true;
  readonly KEY_ENTER: number = 13;


  @Output() onAuthenticated = new EventEmitter<Session>();

  error: string;
  loading = false;
  auth: Credentials = {};
  session: Session = {};

  constructor(
    private route: ActivatedRoute,
    private Jarvis: JarvisService,
    private Token:TokenService,
    private router: Router,
    private Auth: AuthService,
  ) {
  }


  @HostListener('keypress', ['$event']) onKeyPress(event: any) {

    if (event.key !== undefined) {
      this.testKey(event.key, event);
    } else if (event.keyIdentifier !== undefined) {
      this.testKey(event.keyIdentifier, event);
    } else if (event.keyCode !== undefined) {
      this.testKey(event.keyCode, event);
    }

  }
  form: FormGroup = new FormGroup(
    {
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    }
  ) ;


  private testKey(code, event) {

    if (code === this.KEY_ENTER) {
      this.onNext(event);
    } else if (code === 'Enter') {
      this.onNext(event);
    }

  }

  onNext(event: any): void {
  }

  private onSuccess(session: Session) {

    this.loading = false;
    this.session = session;

  }

  // Emit authenticated event to parent component
  private onError(error) {

    this.loading = false;
    this.error = Array.isArray(error) ? error[0] : error;

  }

  // Emit authenticated event to parent component
  private onComplete() {

    if (this.session) {

      // Emit auth details
      this.onAuthenticated.emit(this.session);

    }

  }

  onSubmit()
  {
    this.Jarvis.login(this.form.value).subscribe(
      data =>this.handleResponse(data),
      error =>this.handleError(error)
    );
  }

  handleResponse(data)
  {
    this.Token.handle(data.token);
    this.Token.handleDepartment(data.department);
    this.Token.handleUsername(data.zita);
    this.Token.handleUser(JSON.stringify(data.user));
    this.Token.handleRoles(JSON.stringify(data.roles));
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/dashboard');
  }

  handleError(error)
  {
    this.error = error.error.error;
  }

  ngOnInit(): void {

  }

}
