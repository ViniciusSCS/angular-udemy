import { Component, OnInit } from '@angular/core';
import { Contatos } from './contatos';
import { ContatosService } from './contatos.service';

/**
 * Decorator da Classe.
 */
@Component({
    moduleId: module.id,
    selector: 'contatos-list',
    templateUrl: 'contatos-list.component.html'
})

export class ContatosListComponent implements OnInit {
    contatos: Contatos[];

    /**
     * Construtor da Classe. Sistema de injeção de dependências do Angular 2.
     * 
     * @param contatoService 
     */
    constructor(private contatoService: ContatosService) {}
    
    ngOnInit(): void {
        this.contatoService.getContatos()
            .then((contatos: Contatos[]) => {
                this.contatos = contatos;
            }).catch(err => {
                
            });
    }
}