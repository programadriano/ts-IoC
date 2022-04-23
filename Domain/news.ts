import { Exception } from "../Infra/exception";

export class News {

    constructor(title: string, description: string) {
        this.Title = title;
        this.Description = description;
        this.validate();
    }

    get title() {
        return this.Title;
    }

    get description() {
        return this.Description;
    }

    private Title: string;
    private Description: string;

    private validate() {
        if (this.Title.length > 20) {
            throw new Exception("O título deve ser menor que 20 caracteres!");
        }
    }
}