import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import 'rxjs/rx';
import 'rxjs/add/operator/map';
import {LanguageApp} from "./app/language-app";

bootstrap(LanguageApp, [HTTP_PROVIDERS, ROUTER_PROVIDERS])
  .catch(err => console.error(err));
