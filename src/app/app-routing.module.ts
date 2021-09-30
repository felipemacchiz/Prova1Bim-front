import { ListarAutomovelComponent } from './view/listar-automoveis/listar-automoveis.component';
import { CadastrarAutomovelComponent } from './view/cadastrar-automovel/cadastrar-automovel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ListarAutomovelComponent
  },
  {
    path: 'cadastrarAutomovel',
    component: CadastrarAutomovelComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
