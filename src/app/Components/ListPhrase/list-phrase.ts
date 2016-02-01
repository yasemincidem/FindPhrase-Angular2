/**
 * Created by yasin_000 on 29.1.2016.
 */
import {Component} from "angular2/core"
import {PhraseService} from "../../Services/phrase-service";
import {CORE_DIRECTIVES} from "angular2/common";
import {FORM_DIRECTIVES} from "angular2/common";
import {InputDebounceComponent} from "../../Directives/input-debounce";
import {VideoPhrase} from "../../Directives/video-phrase";

@Component({
  selector:'list-phrase',
  bindings:[PhraseService],
  directives:[CORE_DIRECTIVES, FORM_DIRECTIVES, InputDebounceComponent,VideoPhrase],
  templateUrl:"app/Components/ListPhrase/list-phrase.html"
})
export class ListPhrase{
  public lists:Array<string>;
  public videos:Array<string>;
  public search:string;
  public items_error:Boolean = false;
   lists_show:Boolean = false;
   videos_show:Boolean = false;

  constructor(private _phraseService:PhraseService) {
  }


  public searchChanged(value) {
    this._phraseService.getResults(value).subscribe(
      data => {
        this.lists  = data[0].results,
        this.videos = data[1].items
        console.log(data[1].items)
      },
      err => {
        this.items_error = true
      }
    )
  }
}
