export class Contatos {

    /**
     * Construtor da Classe. Sistema de injeção de dependências do Angular 2.
     * 
     * @param id 
     * @param nome 
     * @param telefone 
     * @param email 
     */
    constructor(
        public id: number,
        public nome: string,
        public telefone: string,
        public email: string ,
    ) {}

}