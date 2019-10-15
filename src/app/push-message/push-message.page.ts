import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-push-message',
  templateUrl: './push-message.page.html',
  styleUrls: ['./push-message.page.scss'],
})
export class PushMessagePage implements OnInit {
  price: any = '';
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.price = this.route.snapshot.params['price'];
  }

}
