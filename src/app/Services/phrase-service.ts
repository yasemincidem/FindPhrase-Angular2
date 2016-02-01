/**
 * Created by yasin_000 on 29.1.2016.
 */
import {Injectable} from "angular2/core"
import {Http,Response} from 'angular2/http'
import {Observable} from "rxjs/Observable";

@Injectable()
export class PhraseService {
  constructor(public http:Http) {}

  getResults(name:string) {

    let phraseUrl = `http://capitolwords.org/api/1/text.json?phrase=${name}&apikey=e622eded433a451f88b237338d65ba61`;
    let videoUrl=` https://www.googleapis.com/youtube/v3/search?
                   order=date&part=id%2Csnippet&q=${name}&maxResults=50&key=AIzaSyCBi3KEOy7AQqCJkd9B0fEnJj2g-5VeP6o`;

    return Observable.forkJoin(
      this.http.get(phraseUrl).map((res:Response) => res.json()),
      this.http.get(videoUrl).map((res:Response) => res.json())

  )

  }
}
