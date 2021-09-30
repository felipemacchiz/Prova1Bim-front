import { Automovel } from "../model/automovel.model";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})

export class AutomovelService {

  baseUrl = "https://localhost:5001/concessionaria/automovel/";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
    })
  }

  constructor(private httpClient: HttpClient) {}

  cadastrarAutomovel(formulario: any): Observable<Automovel> {
    return this.httpClient.post<any>(this.baseUrl + 'cadastrar', formulario)
  }

  listarAutomoveis(): Observable<any>{
    return this.httpClient.get<any>(this.baseUrl + 'listar')
  }

}

