import { Component } from '@angular/core';
import { Contatos } from './contatos';
import { CONTATOS } from './contatos-mock';

@Component({
    moduleId: module.id,
    selector: 'contatos-list',
    templateUrl: 'contatos-list.component.html'
})

export class ContatosListComponent {
    contatos: Contatos[] = CONTATOS;
}