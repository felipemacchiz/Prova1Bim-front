import { Component, OnInit } from "@angular/core";
import { Automovel } from "src/app/shared/model/automovel.model";
import { AutomovelService } from "src/app/shared/service/automovel.service";

@Component({
  selector: "app-listar-automoveis",
  templateUrl: "listar-automoveis.component.html",
  styleUrls: ["listar-automoveis.component.css"],
})
export class ListarAutomovelComponent implements OnInit {
  carrosRegistrados!: Automovel[];

  constructor(public rest: AutomovelService) {}

  ngOnInit(): void {
    this.getListarCarros();
  }

  getListarCarros(){
    this.rest.listarAutomoveis().subscribe((resutaldo) => {
      this.carrosRegistrados = resutaldo;
    })
  }
}
