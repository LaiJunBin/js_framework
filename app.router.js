import {
    Route
} from "./core/route";

var route = new Route('/test', 'test');

export class AppRoutes {
    constructor() {
        this.route = route;
    }
}