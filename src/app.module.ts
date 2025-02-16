import { Module } from '@cmmv/core';

import {
    AppService
} from './app.service';

import {
    AppController
} from './app.controller';

export const AppModule = new Module('app', {
    controllers: [AppController],
    providers: [AppService]
});
