import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
    baseUrl = environment.apiUrl;
    jwtHelper = new JwtHelperService();
  decodedToken: any;

constructor(private http: HttpClient) { }


login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
        map((response: any) => {
            const r = response;
            if (typeof releaseEvents !== 'undefined' && releaseEvents !== null) {
                localStorage.setItem('token', r.token);
                this.decodedToken = this.jwtHelper.decodeToken(r.token);
                console.log(this.decodedToken);
            }
        })
    );
}
loggedIn() {
    const token = localStorage.getItem('token');
    if(token !== undefined){
        if(this.jwtHelper.isTokenExpired(token)) {return false;} else {return true}
    }   
    else {return false;}
    
}

}
