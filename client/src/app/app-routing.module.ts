import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { BookingComponent } from './booking/booking.component'
import { AdminComponent} from './admin/admin.component'

const routes: Routes = [
  {path: '', component: RestaurantComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
