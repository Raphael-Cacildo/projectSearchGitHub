import { Component } from '@angular/core';
import { GitHubRestService } from '../service/git-hub-rest.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
private linguagem: string;
public listaLinguagem = [];
constructor(
  private gitHubService: GitHubRestService
){}

onSubmit(){
  this.gitHubService.pesquisaRepositorios(this.linguagem).subscribe(resultado => {
    this.listaLinguagem.push({nome:this.linguagem, quantidade: resultado});
  })
  
}
ordenaLista(lista){
  if (lista.length) {
    return lista.sort((a,b)=> a.quantidade > b.quantidade ? 1 : -1);
  }
 
  
}

}
