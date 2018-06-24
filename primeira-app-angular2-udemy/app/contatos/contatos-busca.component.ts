import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Contatos } from './contatos';
import { ContatosService } from './contatos.service';

@Component({
    moduleId: module.id,
    selector: 'contatos-busca',
    templateUrl: 'contatos-busca.component.html'
})

export class ContatosBusca implements OnInit, OnChanges {

    @Input() buscar: string;
    contatos: Observable<Contatos[]>;
    private termosDaBusca: Subject<string> = new Subject<string>();

    /**
     * Construtor da classe.
     * 
     * @param contatosService 
     */
    constructor(
        private contatosService: ContatosService
    ) { }

    ngOnInit(): void {
        this.contatos = this.termosDaBusca
            .debounceTime(500) // Aguarde por Xms para emitir novos eventos.
            .distinctUntilChanged() //Ignore se o próximo termo de busca for igual ao anterior.
            .switchMap(termo =>
                // console.log('Fez a busca: ', termo);
                termo ? this.contatosService.search(termo) : Observable.of<Contatos[]>([]))
            .catch(err => {
                console.log(err);
                return Observable.throw(err);
            });

        // this.contatos.subscribe((contatos: Contatos[]) => {
        //     console.log('retornou do servidor: ', contatos)
        // })
    }

    ngOnChanges(changes: SimpleChanges): void {
        let buscar: SimpleChange = changes['buscar'];
        this.search(buscar.currentValue);
    }

    search(termo: string): void {
        // console.log(termo);
        this.termosDaBusca.next(termo);
    }

}