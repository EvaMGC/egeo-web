/*
 * Copyright (c) 2017. Stratio Big Data Inc., Sucursal en España. All rights reserved.
 *
 * This software is licensed under the Apache Licence 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Component } from '@angular/core';
import { ApiDoc, TYPES } from '../../shared';

@Component({
   selector: 'dropdown-menu-example',
   templateUrl: 'dropdown-menu.component.html'
})

export class DropdownMenuComponent {

   public itemsWithParent: Array<any> = [
      {
         title: 'FILTER BY SEVERITY:',
         items: [
            {
               label: 'Critical Error',
               value: 1
            },
            {
               label: 'Warning',
               value: 2
            },
            {
               label: 'Lorem Ipsum',
               value: 3
            }
         ]
      },
      {
         title: 'FILTER BY STATUS:',
         items: [
            {
               label: 'Active',
               value: 1
            },
            {
               label: 'Inactive',
               value: 0
            }
         ]
      }
   ];

   public itemsWithIcon: Array<any> = [
      {
         label: 'Edit',
         icon: 'icon-edit2',
         value: 'edit'
      },
      {
         label: 'Duplicate',
         icon: 'icon-copy',
         value: 'duplicate'
      },
      {
         label: 'Add',
         icon: 'icon-copy',
         value: 'add'
      },
      {
         label: 'Delete',
         icon: 'icon-copy',
         value: 'delete'
      }
   ];

   public items: Array<any> = [
      {
         label: 'Item 1',
         value: 1
      },
      {
         label: 'Item 2',
         value: 2
      },
      {
         label: 'Item 3',
         value: 3
      },
      {
         label: 'Item 4',
         value: 4
      }
   ];

   public apiDoc: ApiDoc = {
      title: 'Dropdown Menu',
      description: 'The dropdown menu component',
      haveModel: true,
      // tslint:disable:max-line-length
      apiSection: {
         inputs: [
            { paramName: 'qaTag', type: TYPES.STR, required: false, details: 'qaTag For set id for tests' },
            { paramName: 'active', type: TYPES.BOOL, required: false, details: 'Allows to enable or disable the dropdown' },
            { paramName: 'items', type: 'Array<StDropDownMenuItem | StDropDownMenuGroup>', required: true, details: 'Values array that receives the dropdown' },
            { paramName: 'placement', type: `'top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'`, required: false, details: 'Posible possitions of menu with respect element to attach. Default: bottom-start' },
            { paramName: 'emptyListMessage', type: TYPES.STR, required: false, details: 'Message to show in case of empty list' }
         ],
         outputs: [
            { paramName: 'change', type: TYPES.BOOL, required: false, details: 'This event is fired when the selected value changes in the dropdown, returns the value of the element' }
         ]
      },
      exampleDesc: `You can see below several samples showing different the most common configurations of the dropdown menu component inside a Stratio application.`
   };
   // tslint:enable:max-line-length
}
