import { IdService } from './../../services/id.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  id: number;

  constructor(
    private idService: IdService
  ) { }

  ngOnInit(): void {
    this.idService.getCurrentId().subscribe(id => {
      this.id = id;
    });
  }
}
