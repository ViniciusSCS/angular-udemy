import 'rxjs/add/operator/toPromise';

import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Contatos } from "./contatos";
import { CONTATOS } from "./contatos-mock";

/**
 * Decorator da Classe.
 */
@Injectable()


export class ContatosService {

    private apiUrl: string = 'app/contatos';

    /**
     * Construtor da Classe. Sistema de injeção de dependências do Angular 2.
     */
    constructor(
        private http: Http
    ) { }

    /**
     * Retorna a lista de contatos.
     */
    getContatos(): Promise<Contatos[]> {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(response => response.json().data as Contatos[]);
        // return Promise.resolve(CONTATOS);
    }

    /**
     * Busca o contato por 'id' e retorna os dados para serem alterados.
     * 
     * @param id 
     */
    getContatosPorId(id: number): Promise<Contatos> {
        return this.getContatos()
            .then((contato: Contatos[]) => contato.find(contato => contato.id === id));
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
            .then(() => {
                console.log('terceiro then');
                return this.getContatos()
            });
    }
}