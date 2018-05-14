import { ServerService } from "./server.service";
import {environment} from '../environments/environment';
import { HttpClient } from "@angular/common/http";

export function serverFactory(http: HttpClient): ServerService {
    return new ServerService(environment.serverUrl, http);
}