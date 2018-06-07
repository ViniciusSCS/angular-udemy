import { Component, OnInit } from '@angular/core';
import { DaialogService } from '../dialog.service';

import { Contatos } from './contatos';
import { ContatosService } from './contatos.service';

/**
 * Decorator da Classe de serviço.
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
    constructor(private contatoService: ContatosService, private dialogService: DaialogService) { }

    ngOnInit(): void {
        this.contatoService.getContatos()
            .then((contatos: Contatos[]) => {
                this.contatos = contatos;
            }).catch(err => {

            });
    }

    /**
     * Ação para deletar usuário da lista.
     * 
     * @param contato
     */
    onDelete(contato: Contatos): void {
        console.log(contato);
        this.dialogService.confirm("Deseja deletar contato " + contato.nome + "?")
            .then((canDelete: boolean) => {
                if (canDelete) {
                    this.contatoService.delete(contato)
                        .then((contato) => {
                            this.contatos = this.contatos.filter((c: Contatos) => c.id != contato.id);

                        }).catch(err => {
                            console.log(err);
                        });
                }
            });
    }
}