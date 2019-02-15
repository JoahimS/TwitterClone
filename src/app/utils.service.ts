import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {


  constructor(private http: HttpClient) { }

  registerUser(user) {
    return this.http.post('http://localhost:8080/TwitterREST/rest/v1/users', user);
  }

  loginUser(user) {
    return this.http.post('http://localhost:8080/TwitterREST/rest/v1/auth', user);
  }

  getTweets() {

    return this.http.get('http://localhost:8080/TwitterREST/rest/v1/tweets');

  }

  /*
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      });
      return this.http.get('http://localhost:8080/TwitterREST/rest/v1/tweets', { headers});


  const reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
  });

  */




  getTweet(id) {
    return this.http.get('http://localhost:8080/TwitterREST/rest/v1/tweets/' + id);
  }


  createTweet(tweet) {
    return this.http.post('http://localhost:8080/TwitterREST/rest/v1/tweets', tweet );
  }


  deleteTweet(idToDelete) {
    return this.http.get('http://localhost:8080/TwitterREST/rest/v1/tweets/delete/' + idToDelete );
  }

  updateTweet(idToUpdate, tweet) {
    return this.http.post('http://localhost:8080/TwitterREST/rest/v1/tweets/' + idToUpdate, tweet );
  }





}
