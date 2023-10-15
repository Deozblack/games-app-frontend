import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalState = new BehaviorSubject<string>(''); 
  public currentModalState = this.modalState.asObservable();

  private isOpenModal = new BehaviorSubject<boolean>(false);
  public isOpenState = this.isOpenModal.asObservable();

  openModal(modalName: string): void {
    this.modalState.next(modalName);
    this.isOpenModal.next(true);
  }

  closeModal(): void {
    this.modalState.next('');
    this.isOpenModal.next(false);
  }
}
