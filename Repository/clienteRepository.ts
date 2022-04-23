import { News } from "../Domain/news";

export class NewsRepository {

    Save(news: News) {
        console.log(`Salvando notícia título: ${news.title}, descrição ${news.description} `)
    }
}