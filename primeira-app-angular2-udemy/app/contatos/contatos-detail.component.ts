import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { ContatosService } from "./contatos.service";
import { Contatos } from "./contatos";

/**
 * Decorator da Classe.
 */
@Component({
    moduleId: module.id,
    selector: 'contatos-detail',
    templateUrl: 'contatos-detail.component.html'
})

export class ContatosDetailComponent implements OnInit {

    contato: Contatos;
    private isNew: boolean = true;

    /**
     * Construtor da Classe. Sistema de injeção de dependências do Angular 2. 
     * 
     * @param location 
     * @param route 
     * @param contatoService 
     */
    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private contatoService: ContatosService
    ) { }

    ngOnInit(): void {
        this.contato = new Contatos(0, '', '', '');

        this.route.params.forEach((params: Params) => {
            let id: number = +params['id'];

            if (id) {

                this.isNew = false;

                this.contatoService.getContatosPorId(id)
                    .then((contato: Contatos) => {
                        this.contato = contato;
                    })
            }
        });
    }

    getFormGroupClass(isValid: boolean, isPristine: boolean): {} {
        return {
            'form-group': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    }

    getFormControlClass(isValid: boolean, isPristine: boolean): {} {
        return {
            'form-control': true,
            'form-control-danger': !isValid && !isPristine,
            'form-control-success': isValid && !isPristine
        };
    }

    onSubmit(): void {
        if(this.isNew) {
            console.log('cadastrar novo contato')
        }else {
            console.log('alterar contato')
        }
    }

}