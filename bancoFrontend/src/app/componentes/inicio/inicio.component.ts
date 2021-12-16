import { TarefaService, Tarefa } from 'src/app/servicos/tarefas.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  ListarTarefas: Tarefa[]

  constructor(private TarefaService: TarefaService, private router: Router) {
    this.ListarTarefas = []

   }

  ngOnInit(): void {
    this.listarTarefas()
  }

  listarTarefas(){
    this.TarefaService.getTarefas().subscribe({
      next: (resultado) => {console.log(resultado)
      this.ListarTarefas = <any>resultado},
      error: (erro) => console.error(erro),
      complete: () => console.info('Listado com sucesso!')
    })
  }

  //excluir uma tarefa
  excluir(id:any){
    this.TarefaService.deletarTarefa(id).subscribe({
      next: (resultado) => {console.log('Conta excluída com sucesso!')
                    this.listarTarefas()},
      error: (erro) => console.error(erro),
      complete: () => console.info('Fim!')
    })
  }

  //atualizar tarefas
  editar(id:any){
    this.router.navigate(['/editar/' + id])
  }
}
