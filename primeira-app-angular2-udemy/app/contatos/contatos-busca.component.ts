import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'contatos-busca',
    templateUrl: 'contatos-busca.component.html'
})

export class ContatosBusca implements OnInit {
    constructor() { }

    ngOnInit() { }

    search(termo: string): void {
        console.log(termo);
    }
}