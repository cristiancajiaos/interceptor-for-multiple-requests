import { IdService } from './../../services/id.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

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
