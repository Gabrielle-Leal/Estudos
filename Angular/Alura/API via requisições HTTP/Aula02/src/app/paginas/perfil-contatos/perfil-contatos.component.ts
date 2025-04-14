import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from "../../componentes/container/container.component";
import { Contato } from '../../componentes/contato/contato';

@Component({
  selector: 'app-perfil-contatos',
  standalone: true,
  imports: [
    CommonModule, 
    ContainerComponent
  ],
  templateUrl: './perfil-contatos.component.html',
  styleUrl: './perfil-contatos.component.css'
})
export class PerfilContatosComponent {

  contato: Contato = {
    id: 0,
    nome: 'dev',
    telefone: '',
    email: 'dev@email.com',
    aniversario: '12/10/1990',
    redes: ''
  }
}
