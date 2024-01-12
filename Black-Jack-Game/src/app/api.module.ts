import { NgModule } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';


@NgModule({
  providers: [ApiService, HttpClient],
})
export class ApiModule {}
