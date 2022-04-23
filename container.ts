import "reflect-metadata";
import { container } from 'tsyringe';
import { NewsRepository } from "./Repository/clienteRepository";
import { NewsService } from "./Services/newsService";

container.register("INewsService", {
    useClass: NewsService
});

container.register("INewsRepository", {
    useClass: NewsRepository
});