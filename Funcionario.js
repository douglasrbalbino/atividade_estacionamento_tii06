import { Pessoa } from "./Pessoa.js";

export class Funcionario extends Pessoa {
    #matricula;
    #cargo;

    constructor (nome, documento, matricula, cargo){
        super(nome, documento);
        this.#matricula = matricula;
        this.#cargo = cargo;
    }

}