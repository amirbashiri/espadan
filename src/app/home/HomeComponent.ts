import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatTooltip} from '@angular/material';
import {ToastrService} from 'ngx-toastr';
import {HomeService} from './HomeService';
import {SessionContract, SpeakerContract} from './SpeakerContract';

@Component({
             selector   : 'app-home',
             templateUrl: './home.html',
             styleUrls  : ['./home.scss']
           })
export class HomeComponent implements OnInit
{


  speakers: SpeakerContract[]   = [];
  protected _isLoading: boolean = false;
  set isLoading(value: boolean)
  {
    this._isLoading = value;
    this._changeDetectorRef.markForCheck();
  }

  get isLoading(): boolean
  {
    return this._isLoading;
  }


  constructor(protected _changeDetectorRef: ChangeDetectorRef,
              protected _toastr: ToastrService,
              protected _homeService: HomeService)
  { }

  ngOnInit()
  {
    this.getSpeakers();
  }

  getSpeakers()
  {
    this.isLoading = true;
    this._homeService.getSpeakers().subscribe(
      (result: { items: SpeakerContract[] }) => {
        this.speakers  = result.items ? result.items : [];
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
        this._toastr.error('error in fetch data', 'Error');
      }
    );
  }

  getSpeakerDesc(item: SpeakerContract)
  {
    if (!item.description)
    {
      this._homeService.getDescription(item.href).subscribe(
        res => {
          let index: number = this.speakers.findIndex(speaker => speaker.href == item.href);
          if (index != -1)
          {
            this.speakers[index].description = res;

          }
        },
        () => {
          this._toastr.error('error in fetch data', 'Error');
        }
      );
    }


  }

  getSessions(speaker: SpeakerContract)
  {
    if (!speaker.sessions || speaker.sessions.length)
    {
      if (speaker.links && speaker.links.length)
      {
        this._homeService.getSessions(speaker.links[0].href).subscribe(
          (result: { items: SessionContract[] }) => {
            speaker.sessions = result.items;
          }
        );
      }
    }
  }

  getSessionTitle(session:SessionContract):string{
    let n:number = session.href.lastIndexOf('/');
    let sessionNumber:string = session.href.substring(n + 1);
    return `Session ${sessionNumber}`
  }
}
