import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../products/button/button.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ButtonComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [HeaderComponent, FooterComponent, ButtonComponent],
})
export class SharedModule {}
