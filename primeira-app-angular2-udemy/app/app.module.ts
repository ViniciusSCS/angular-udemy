import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContatosModule } from './contatos/contatos.module';

@NgModule({
    imports: [
        HttpModule,
        BrowserModule,
        ContatosModule,
        AppRoutingModule,
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    
})


export class AppModule {}