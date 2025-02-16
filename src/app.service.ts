import { Service } from "@cmmv/core";

@Service("app")
export class AppService {
    getHello(): string {
        return 'Hello World!';
    }
}