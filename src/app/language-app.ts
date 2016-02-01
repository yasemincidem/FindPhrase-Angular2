import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ListPhrase} from "./Components/ListPhrase/list-phrase";

@Component({
  selector: 'language-app',
  providers: [],
  templateUrl: 'app/language-app.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  {
      path:'/list-phrase',
      name:'ListPhrase',
      component:ListPhrase,
      useAsDefault:true
}
])

export class LanguageApp {}
