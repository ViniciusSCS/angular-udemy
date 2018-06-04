import { NgModule } from '@angular/core';
import { ContatosListComponent } from './contatos-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ContatosListComponent
    ],
    exports: [
        ContatosListComponent
    ]
})


export class ContatosModule {}