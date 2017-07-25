/*
 * Copyright (C) 2016 Stratio (http://stratio.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Component } from '@angular/core';
import { STALERT_SEVERITY, StAlertsService } from '@stratio/egeo';

import { ApiDoc, TYPES } from '../../shared';

@Component({
   selector: 'st-alerts-doc',
   templateUrl: './alerts.component.html'
})
export class StAlertsDocComponent {

   // tslint:disable:max-line-length
   public apiDoc: ApiDoc = {
      title: 'Alerts',
      description: 'Notifications are banners that display relevant information about processes that are running in background, without direct user interaction.',
      haveModel: false,
      apiSection: {
         inputs: [
            { paramName: 'showInConsole', type: TYPES.BOOL, required: false, details: 'If true, all notifications will be displayed in the console too. DEFAULT: false' },
            { paramName: 'qaTag', type: TYPES.STR, required: false, details: 'Id value for qa test' }
         ],
         outputs: []
      },
      exampleDesc: ''
   };
   // tslint:enable:max-line-length

   constructor(private _alertService: StAlertsService) { }

   showWarning(): void {
      this._alertService.notifyAlert(
         'Warning',
         'Internal server Error.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor incididunt ut labore et dolore magna aliqua',
         STALERT_SEVERITY.WARNING);
   }

   showError(): void {
      this._alertService.notifyAlert(
         'Error',
         'Internal server Error.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
         STALERT_SEVERITY.ERROR,
         undefined, 10000);
   }

   showSuccess(): void {
      this._alertService.notifyAlert(
         'Success',
         'Internal server Error.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
         STALERT_SEVERITY.SUCCESS);
   }
}
