import { Injectable } from "@angular/core";

/**
 * Decora a classe de serviço.
 */
@Injectable()

export class DaialogService {

    /**
     * Confirma exclusão.
     * @param message 
     */
    confirm(message?: string) {
        return new Promise(resolve => {
            return resolve(window.confirm(message || 'Confirmar?'));
        });
    }
}