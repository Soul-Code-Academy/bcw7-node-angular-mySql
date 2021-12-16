import { Component, OnInit} from '@angular/core';
import { TarefaService, Tarefa } from 'src/app/servicos/tarefas.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})

export class CadastrarComponent implements OnInit {

  tarefa:Tarefa = {
    id_transacao: '',
    nomeCliente: '',
    valor: 0,
    tipoConta:'',
    agencia:'',
    conta:''
    }

  constructor(private TarefaService:TarefaService, private router:Router) { }

  ngOnInit(): void {
  }

  adicionar(){
    //deleta o id por ser auto increment
    delete this.tarefa.id_transacao
    //insere nova tarefa
    this.TarefaService.addTarefa(this.tarefa).subscribe({
      next: (resultado) => console.log('Conta cadastrada com sucesso!'),
      error: (erro) => console.error(erro),
      complete: () => console.info('complete')
  })
    //voltar para a listagem
    this.router.navigate(['/inicio'])
  }
}

