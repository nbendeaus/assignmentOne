import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
              <div class="container">
                <div class="row">
                  <div class="col-xs-3">
                      <div class="success alert">
                        Successful!
                      </div>
                  </div>
                </div>
              </div>`,
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}
