import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SharedServiceService {
  constructor(private _http: HttpClient) {}

  getMoviesList() {
    return this._http.get("assets/valid.json"); // Data Feached From JSON File
    // return this._http.get("http://localhost:8080/movies/getAllMovies");  // to fetch data from java API

  }
}
