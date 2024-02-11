import { Routes } from '@angular/router';
import { ConverterComponent } from './converter/converter.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [  {path: '', component: ConverterComponent},
  {path: 'about', component: AboutComponent}];
