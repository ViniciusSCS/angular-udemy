import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatosListComponent } from './contatos-list.component';
import { FormsModule } from '@angular/forms';

import { ContatoRoutingModule } from './contatos-routing.module';
import { ContatosDetailComponent } from './contatos-detail.component';
import { ContatosService } from './contatos.service';

@NgModule({
    imports: [
        FormsModule,
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