import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContatosListComponent } from "./contatos-list.component";
import { ContatosDetailComponent } from "./contatos-detail.component";


const contatoRoutes: Routes = [
    {
        path: 'contato',
        component: ContatosListComponent,
    },
    {
        path: 'contato/save',
        component: ContatosDetailComponent,
    },
    {
        path: 'contato/save/:id',
        component: ContatosDetailComponent,
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(contatoRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ContatoRoutingModule{}