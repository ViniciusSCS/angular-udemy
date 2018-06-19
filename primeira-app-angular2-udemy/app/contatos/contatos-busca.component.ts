import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Contatos } from './contatos';
import { ContatosService } from './contatos.service';

@Component({
    moduleId: module.id,
    selector: 'contatos-busca',
    templateUrl: 'contatos-busca.component.html'
})

export class ContatosBusca implements OnInit {

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
        // this.contatos = this.termosDaBusca
        //     .debounceTime(500) // Aguarde por Xms para emitir novos eventos.
        //     .distinctUntilChanged() //Ignore se o próximo termo de busca for igual ao anterior.
        //     .switchMap(termo =>
        //         // console.log('Fez a busca: ', termo);
        //         termo ? this.contatosService.search(termo) : Observable.of<Contatos[]>([]))
        //     .catch(err => {
        //         console.log(err);
        //         return Observable.throw(err);
        //     });

        // this.contatos.subscribe((contatos: Contatos[]) => {
        //     console.log('retornou do servidor: ', contatos)
        // })
    }

    search(termo: string): void {
        // console.log(termo);
        this.termosDaBusca.next(termo);
    }
}