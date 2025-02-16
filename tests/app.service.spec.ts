import { describe, it, expect, beforeEach } from 'vitest';
import { AppService } from '../src/app.service';

describe('AppService', () => {
    let appService: AppService;

    beforeEach(() => {
        appService = new AppService();
    });

    it('should be defined', () => {
        expect(appService).toBeDefined();
    });

    it('should return "Hello World!"', () => {
        expect(appService.getHello()).toBe('Hello World!');
    });
});
