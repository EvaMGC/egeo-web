
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

import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';
import { HeaderComponent } from './header.component';
import { routing } from './header.routing';


@NgModule({
   imports: [SharedModule, routing],
   declarations: [HeaderComponent]
})
export class HeaderModule { }

