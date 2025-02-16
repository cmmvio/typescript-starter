import { describe, it, expect } from 'vitest';
import { AppModule } from '../src/app.module';
import { AppController } from '../src/app.controller';
import { AppService } from '../src/app.service';

describe('AppModule', () => {
    it('should be defined', () => {
        expect(AppModule).toBeDefined();
    });

    it('should contain AppController', () => {
        expect(AppModule.getControllers()).toContain(AppController);
    });

    it('should contain AppService', () => {
        expect(AppModule.getProviders()).toContain(AppService);
    });
});
