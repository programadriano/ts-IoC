import { News } from "./Domain/news";
import { NewsService } from "./Services/newsService";

class Program {

    constructor() {
        var service = new NewsService();
        service.Save(new News("IoC com TypeScript", "Trabalhando com IoC em um projeto TypeScript ajuda no desacoplamento"));
    }

}


export default new Program();

