import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContatosListComponent } from './contatos-list.component';

import { ContatosService } from './contatos.service';
import { ContatosBusca } from './contatos-busca.component';
import { ContatoRoutingModule } from './contatos-routing.module';
import { ContatosDetailComponent } from './contatos-detail.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ContatoRoutingModule,
    ],
    declarations: [
        ContatosBusca,
        ContatosListComponent,
        ContatosDetailComponent
    ],
    exports: [
        ContatosBusca,
        ContatosListComponent
    ],
    providers: [
        ContatosService,
        ContatosListComponent
    ]
})


export class ContatosModule {}