import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  sm: any;
  usNm: string;
  constructor(
    private router: Router,
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit() {
     // this.usNm = this.activatedroute.snapshot.params['usNm'];

     this.activatedroute.params.subscribe(
      rtPrm => this.usNm = rtPrm['usNm']
    );

    this.router.routerState.root.queryParams.subscribe(
      quPrm => this.sm = quPrm['smApp']
    );
  }
  upUs(uN: string) {
    this.router.navigate(['/dash', uN]);
  }
}


