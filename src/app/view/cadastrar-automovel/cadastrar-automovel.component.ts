import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AutomovelService } from "src/app/shared/service/automovel.service";

@Component({
  selector: "app-cadastrar-automovel",
  templateUrl: "cadastrar-automovel.component.html",
  styleUrls: ["cadastrar-automovel.component.css"],
})
export class CadastrarAutomovelComponent implements OnInit {
  public automovelForm!: FormGroup;

  constructor(private fb: FormBuilder, private rest: AutomovelService) {}

  ngOnInit(): void {
    this.automovelForm = this.fb.group({
      modelo: ["", [Validators.required]],
      marca: ["", [Validators.required]],
      ano: ["", [Validators.required]],
      preco: ["", [Validators.required]],
    });
  }

  cadastrarAutomovel() {
    this.rest.cadastrarAutomovel(this.automovelForm.value).subscribe((resultado) => {
      console.log(resultado);
      document.location.href = "/";
    })
  }
}
