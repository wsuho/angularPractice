import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  Output,
  output,
} from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../sharedUi/card/card.component';

// type User = {
//   id:string;
//   avatar:string;
//   name:string;
// }//앨리어스?

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({required:true}) id!:string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!:string;//
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
//일이 발생하면 앵귤러에서 어떤 정보가  바뀌었는지 전부 체크
//시그널 방법을 사용하면 앵귤러에서 처리해주니 편리~
//16에서부터 추가되고 17에서 안정됨.
// 변수 + ! ===> 어떠한 값으로 결정될거라는 것.
