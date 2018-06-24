import './util/rxjs-extensions'

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { DaialogService } from './dialog.service';
import { AppRoutingModule } from './app-routing.module';
import { ContatosModule } from './contatos/contatos.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './contatos/in-memory-data.service';

@NgModule({
	imports: [
		HttpModule,
		FormsModule,
		BrowserModule,
		ContatosModule,
		AppRoutingModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService)
	],
	declarations: [AppComponent],
	providers: [DaialogService],
	bootstrap: [AppComponent],

})


export class AppModule { }