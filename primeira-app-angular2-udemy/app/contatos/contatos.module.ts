import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatosListComponent } from './contatos-list.component';

import { ContatoRoutingModule } from './contatos-routing.module';
import { ContatosDetailComponent } from './contatos-detail.component';
import { ContatosService } from './contatos.service';

@NgModule({
    imports: [
        CommonModule,
        ContatoRoutingModule,
    ],
    declarations: [
        ContatosListComponent,
        ContatosDetailComponent
    ],
    exports: [
        ContatosListComponent
    ],
    providers: [
        ContatosService
    ]
})


export class ContatosModule {}