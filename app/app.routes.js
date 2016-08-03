"use strict";
var router_1 = require('@angular/router');
var timeline_component_1 = require('./components/timeline.component');
var routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'timeline',
        component: timeline_component_1.TimelineComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map