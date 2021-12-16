import { TarefaService, Tarefa } from 'src/app/servicos/tarefas.service';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})



export class ModificarComponent implements OnInit {

  tarefa: Tarefa = {
  id_transacao:'',
  nomeCliente:'',
  valor: 0 ,
  tipoConta: '',
  agencia: '',
  conta:''
  }

  constructor(private TarefaService:TarefaService,
              private router:Router,
              private rotaAtiva:ActivatedRoute) {
               
              }

  ngOnInit(): void {
    const id_entrada = <any>this.rotaAtiva.snapshot.params['id']
    console.log('id de entrada:' + id_entrada)
    this.TarefaService.getTarefaIndividual(id_entrada).subscribe({
    next:(resultado)=> {console.log(resultado)
                          this.tarefa = resultado},
    error: (erro)=>console.error(erro),
    complete: () => console.info("Conta encontrada!")
    })
  }

  modificar(){
    this.TarefaService.editarTarefa(this.tarefa.id_transacao,this.tarefa).subscribe({
      next:(resultado) => console.log("Conta editada com sucesso!"),
      error: (erro) => console.error (erro),
      complete: () => console.info("Atualizado com sucesso!")
    })
    this.router.navigate(['/inicio'])
  }
}
