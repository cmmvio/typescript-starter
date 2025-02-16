import { Application } from "@cmmv/core";

import {
    DefaultAdapter, DefaultHTTPModule
} from "@cmmv/http";

import {
    AppModule
} from "./app.module";

Application.create({
    httpAdapter: DefaultAdapter,
    modules: [
        DefaultHTTPModule,
        AppModule
    ]
});
