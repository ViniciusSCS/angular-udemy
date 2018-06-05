import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { ContatosService } from "./contatos.service";

/**
 * Decorator da Classe.
 */
@Component({
    moduleId: module.id,
    selector: 'contatos-detail',
    templateUrl: 'contatos-detail.component.html'
})

export class ContatosDetailComponent implements OnInit {
    
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
    ) {}

    ngOnInit(): void {
        console.log('on init')
        this.route.params.forEach((params: Params) => {
            let id: number = +params['id'];

            console.log(id);
        });
    }

}