import "reflect-metadata";
import { News } from "./Domain/news";
import './container'
import { container } from "tsyringe";
import { NewsService } from "./Services/newsService";


class Program {

    private newsService = container.resolve(NewsService);

    constructor() {
        this.newsService.Save(new News("IoC com TypeScript", "Trabalhando com IoC em um projeto TypeScript ajuda no desacoplamento"));
    }
}

export default new Program();



