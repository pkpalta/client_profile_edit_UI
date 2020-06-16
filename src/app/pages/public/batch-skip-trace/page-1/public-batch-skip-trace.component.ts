import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { BaseComponent } from 'leatherman-bootstrap';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

export class ColumnHeader {
  public index: number;
  public name: string;
}

@Component({
  selector: 'app-public-batch-skip-trace',
  templateUrl: './public-batch-skip-trace.component.html',
  styleUrls: ['./public-batch-skip-trace.component.scss']
})
export class PublicBatchSkipTraceComponent extends BaseComponent
  implements OnInit, AfterViewInit, OnDestroy {

  public uploadProgress: Observable<number>;
  public file: File = null;
  public mapForm: FormGroup;
  public columns: ColumnHeader[] = [];
  public currentPage = 'page1';
  public uploadComplete = false;

  constructor(private router: Router) {
    super();
  }
  // ngOnInit
  public async ngOnInit() {
    this.isLoading = true;
    this.initForm();
    this.isLoading = false;
    this.isInitialized = true;
  }

  // ngAfterViewInit
  public async ngAfterViewInit() {

  }

  private initForm() {
  }
}
