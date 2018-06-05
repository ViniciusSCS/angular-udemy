import { Component, OnInit } from '@angular/core';
import { Contatos } from './contatos';
import { ContatosService } from './contatos.service';

@Component({
    moduleId: module.id,
    selector: 'contatos-list',
    templateUrl: 'contatos-list.component.html'
})

export class ContatosListComponent implements OnInit {
    contatos: Contatos[];

    constructor(private contatoService: ContatosService) {}

    ngOnInit(): void {
        // this.contatos = this.contatoService.getContatos();
        this.contatoService.getContatos()
            .then((contatos: Contatos[]) => {
                this.contatos = contatos;
            }).catch(err => console.log(err));
    }
}