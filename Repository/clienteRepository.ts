import { News } from "../Domain/news";
import { INewsRepository } from "./iClienteRepository";

export class NewsRepository implements INewsRepository {

    Save(news: News): void {
        console.log(`Salvando notícia título: ${news.title}, descrição ${news.description} `)
    }
}