import { TarefasService } from './tarefas.service';
import { TestBed } from '@angular/core/testing';


describe('TarefasService', () => {
  let service: TarefasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarefasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
