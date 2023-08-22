import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class HomeService {

  static  readonly  url = 'https://node-tutorial-be.onrender.com'
  constructor(private httpClient: HttpClient) {
  }

  printHelloWorld(): Observable<string> {
    return this.httpClient.get<string>(`${HomeService.url}/api/print_hello_world`);
  }

  printBye(): Observable<string> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post<string>(`${HomeService.url}/api/print_bye`, null, {headers});
  }
}
