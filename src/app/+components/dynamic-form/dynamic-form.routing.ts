
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import {DynamicFormComponent} from './dynamic-form.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: DynamicFormComponent }
]);
