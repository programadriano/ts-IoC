import { News } from "../Domain/news";
import { NewsRepository } from "../Repository/clienteRepository";

export class NewsService {

    Save(news: News) {
        var newsRepository = new NewsRepository();
        newsRepository.Save(news);
    }
}