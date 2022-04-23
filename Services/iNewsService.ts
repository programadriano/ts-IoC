import { News } from "../Domain/news";

export interface INewsService {
    Save(news: News): void;
}