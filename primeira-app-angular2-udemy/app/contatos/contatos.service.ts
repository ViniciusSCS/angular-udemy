import 'rxjs/add/operator/toPromise';

import { Http, Headers, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Contatos } from "./contatos";
import { CONTATOS } from "./contatos-mock";
import { Observable } from 'rxjs';

/**
 * Decorator da Classe.
 */
@Injectable()


export class ContatosService {

    private apiUrl: string = 'app/contatos';
    private headers: Headers = new Headers({ 'Content-Type': 'application/json' });

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
            .then(response => response.json().data as Contatos[])
            .catch(this.handleError);
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

    /**
     * TODO - Apagar.
     */
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

    /**
     * Salva um novo contato na lista.
     * 
     * @param contato
     */
    create(contato: Contatos): Promise<Contatos> {
        return this.http
            .post(this.apiUrl, JSON.stringify(contato), { headers: this.headers })
            .toPromise()
            .then((response: Response) => response.json().data as Contatos)
            .catch(this.handleError);
    }

    /**
     * Atualiza o contato na lista
     * 
     * @param contato
     */
    update(contato: Contatos): Promise<Contatos> {
        const url = `${this.apiUrl}/${contato.id}`;

        return this.http
            .put(url, JSON.stringify(contato), { headers: this.headers })
            .toPromise()
            .then(() => contato as Contatos)
            .catch(this.handleError);
    }

    /**
     * Deleta o contato da lista.
     * 
     * @param contato
     */
    delete(contato: Contatos): Promise<Contatos> {
        const url = `${this.apiUrl}/${contato.id}`;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(() => contato as Contatos)
            .catch(this.handleError);
    }

    /**
     * Fornece um gancho para manipulação de exceção centralizada.
     * 
     * @param err
     */
    private handleError(err: any): Promise<any> {
        return Promise.reject(err.message || err);
    }

    search(term: string): Observable<Contatos[]> {
        return this.http
            .get(`${this.apiUrl}/?nome=${term}`)
            .map((resp: Response) => resp.json().data as Contatos[]);
    }
}