
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared';
import { routing } from './dynamic-form.routing';
import {DynamicFormComponent} from "./dynamic-form.component";


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [DynamicFormComponent]
})
export class DynamicFormModule { }

