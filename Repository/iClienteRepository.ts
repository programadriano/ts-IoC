import { News } from "../Domain/news";

export interface INewsRepository {
    Save(news: News): void;
}