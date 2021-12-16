import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  url = '/tarefas'

  constructor(private http:HttpClient) { }

  //listar tarefas
  getTarefas(){
    return this.http.get(this.url)
  }

  //get para uma tarefa
  getTarefaIndividual(id:any){
    return this.http.get(this.url + '/' + id)
  }

  //adicionar uma tarefa
  addTarefa(tarefa:Tarefa){
    return this.http.post(this.url,tarefa)
  }

  //excluir uma tarefa
  deletarTarefa(id:any){
    return this.http.delete(this.url + '/' + id)
  }

  //editar ua tarefa
  editarTarefa(id:any, tarefa:Tarefa){
    return this.http.put(this.url + '/' + id, tarefa)
  }
}

export interface Tarefa{
  id_transacao?:string
  nomeCliente?:string
  valor?:number
  tipoConta?:string
  agencia?:string
  conta?: string
}
