import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdService {

  currentId: number = 0;
  currentIdSubject = new BehaviorSubject(0);

  constructor() { }

  setCurrentId(id: number): void {
    this.currentId = id;
    this.currentIdSubject.next(this.currentId);
  }

  getCurrentId(): Observable<number> {
    return this.currentIdSubject.asObservable();
  }
}
