import { Injectable } from "@angular/core";
import { Contatos } from "./contatos";
import { CONTATOS } from "./contatos-mock";

/**
 * Decorator da Classe.
 */
@Injectable()

export class ContatosService {
    getContatos(): Promise<Contatos[]> {
        return Promise.resolve(CONTATOS);
    }

    getContatosSlowly(): Promise<Contatos[]> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 2000);
        })
        .then(() => {
            console.log('primeiro then');
            return 'Curso de Angular 2x!!'
        })
        .then((param: string) => {
            console.log('segundo then');
            console.log(param);
        })
        .then(() =>  {
            console.log('terceiro then');
           return this.getContatos()
        });  
    }
}