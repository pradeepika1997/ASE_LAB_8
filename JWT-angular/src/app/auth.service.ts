import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';
import {FormGroup} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = 'http://localhost:4000/api';
  token: any;
  headersObject: any;
  userData: any;
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService, private http: HttpClient) { }

  public StoreRegisterDetailsInLocalStorage(fg: FormGroup): void {
    this.storage.set('FIRST_NAME', fg.get('firstName').value);
    this.storage.set('LAST_NAME', fg.get('lastName').value);
    this.storage.set('EMAIL_ID', fg.get('emailID').value);
    this.storage.set('USER_NAME', fg.get('userName').value);
    this.storage.set('PASSWORD', fg.get('password').value);
  }

  public CheckUserCredentials(fg: FormGroup): boolean {

    if ( this.storage.get('USER_NAME') === fg.get('userName').value  &&
      this.storage.get('PASSWORD') === fg.get('password').value ) {

      const obj = {name: fg.get('userName').value, email: fg.get('email').value};
      console.log(obj);
      this.http.post(`${this.uri}/login`, obj)
        .subscribe(data => {this.token = data; console.log(this.token);
                            this.storage.set('USER_TOKEN', this.token); });

      return true;
    }
    return false;
  }

  public VerifyToken() {

    this.headersObject = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.storage.get('USER_TOKEN').token
  });

    const httpOptions = {
      headers: this.headersObject
    };

    console.log(this.storage.get('USER_TOKEN').token);

    return this.http.post(`${this.uri}/customers`, this.storage.get('USER_TOKEN'), httpOptions);

  }
}
