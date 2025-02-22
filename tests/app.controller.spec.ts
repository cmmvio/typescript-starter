import { describe, it, expect, beforeEach } from 'vitest';
import { AppController } from '../src/app.controller';
import { AppService } from '../src/app.service';

class MockAppService {
    getHello(): string {
        return 'Hello from Mock!';
    }
}

describe('AppController', () => {
    let appController: AppController;
    let appService: AppService;

    beforeEach(() => {
        appService = new MockAppService() as AppService;
        appController = new AppController(appService);
    });

    it('should be defined', () => {
        expect(appController).toBeDefined();
    });

    it('should return a hello message', () => {
        const result = appController.getHello();
        expect(result).toBe('Hello from Mock!');
    });
});
