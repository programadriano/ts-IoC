import { injectable, inject } from "tsyringe";
import { News } from "../Domain/news";
import { INewsRepository } from "../Repository/iClienteRepository";
import { INewsService } from "./iNewsService";

@injectable()
export class NewsService implements INewsService {

    constructor(@inject("INewsRepository") private _repository: INewsRepository) { }

    Save(news: News) {
        this._repository.Save(news);
    }
}