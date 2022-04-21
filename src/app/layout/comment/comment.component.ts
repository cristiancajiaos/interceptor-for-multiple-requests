import { IdService } from './../../services/id.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

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
