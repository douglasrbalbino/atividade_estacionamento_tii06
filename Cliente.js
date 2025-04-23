import { Pessoa } from "./Pessoa.js";

export class Cliente extends Pessoa {
    #id;
    #veiculo;

    constructor (nome, documento, id, veiculo) {
        super(nome, documento);
        this.#id = id;
        this.#veiculo = veiculo;
    }
}