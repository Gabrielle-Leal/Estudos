import { Component, EventEmitter, inject, Input, input, Output } from '@angular/core';
import { EnviaFormularioService } from '../../services/envia-formulario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private enviaformularioService = inject(EnviaFormularioService)
  name = "Fernanda";
  idButton = "jkdihnçsd";
  deveMostrarTitulo = true;
  listItems = ["dfjusdf", "aosijaps", "siodjasd"]

  @Input() minhaPropsDeFora!: string;

  @Output() emitindoValorName = new EventEmitter<string>();
  // atualizaBoleano(valor: any){
  //   this.meuBooleano = valor;
  // }

  submit(){
    this.emitindoValorName.emit(this.name)
    this.enviaformularioService.enviaInformacaoParaBackend("enviando informacao");
  }

}
