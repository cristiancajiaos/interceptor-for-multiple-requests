import { IdService } from './../services/id.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  idForm: FormGroup;
  currentId: number;

  constructor(
    private fb: FormBuilder,
    private idService: IdService
  ) { }

  ngOnInit(): void {
    this.idForm = this.fb.group({
      number: new FormControl(0)
    });
  }

  onSubmit(): void {
    this.currentId = this.idForm.value.number;
    this.idService.setCurrentId(this.currentId);
  }

}
