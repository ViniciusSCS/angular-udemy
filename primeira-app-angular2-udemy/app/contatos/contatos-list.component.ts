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
    classessCss: {};
    mensagem: {};
    private currentTimeout: any;

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

                            this.mostrarMensagem({
                                tipo: 'success',
                                texto: 'Contato deletado com sucesso!'
                            });
                        }).catch(err => {
                            console.log(err);
                            this.mostrarMensagem({
                                tipo: 'success',
                                texto: 'Ocorreu um erro ao deletar um contato!'
                            });
                        });
                }
            });
    }

    private mostrarMensagem(mensagem: { tipo: string, texto: string }): void {
        this.mensagem = mensagem;
        this.montarClasses(mensagem.tipo);

        if(this.currentTimeout) {
            clearTimeout(this.currentTimeout);
        }

        this.currentTimeout = setTimeout(() => {
            this.mensagem = undefined;
        }, 3000);
    }

    private montarClasses(tipo: string): void {
        this.classessCss = {
            'alert': true,
        };
        this.classessCss['alert-' + tipo] = true;
    }
}