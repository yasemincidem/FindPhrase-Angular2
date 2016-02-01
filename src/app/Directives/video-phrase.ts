/**
 * Created by yasin_000 on 29.1.2016.
 */
import {Component,Input} from "angular2/core"

@Component({
  selector: 'video-phrase',
  template: `
          <div *ngIf="videoId" class="panel panel-default" >
                 <div class="panel-heading" style="background-color:#DDC7E8;font-weight:bold;text-align:center;">
                 PHRASES IN VIDEOS
                    <input tpe="button" class="btn btn-success" value="Previous" (click)="previous()" style="float: left;margin-top:-7px;">
                    <input tpe="button" class="btn btn-danger" value="Next" (click)="next()" style="float: right;margin-top:-7px;">
                 </div>
                 <div class="panel-body ">
                    <iframe  width="100%" height="315"
                        src="http://www.youtube.com/embed/{{videoId[i].id.videoId}}?autoplay=1">
                    </iframe>
                 </div>
          </div>`
})
export class VideoPhrase {
  @Input() videoId;
  public i=0;

  public  previous(){
    if(this.i!=0){
      this.i-=1;
    }
    else
    this.i=0;
  }
  public next(){
    this.i+=1;
  }
}
