import { Routes } from '@angular/router';

// Admin Components
import { ManageUserComponent } from './component/admin/manage-user/manage-user';
import { AdminDashboardComponent } from './component/admin/admin-dashboard/admin-dashboard';
import { AdminLoginComponent } from './component/admin/admin-login/admin-login';
import { ManageMealComponent } from './component/admin/manage-meals/manage-meals';
import { AdminLandingPageComponent } from './component/admin/admin-landingpage/admin-landingpage';

// User Components
import { UserLoginComponent } from './component/user/user-login/user-login';
import { FooditemsComponent } from './component/user/fooditem/fooditem';
import { GlucoselogComponent } from './component/user/glucoselog/glucoselog';
import { MealsComponent } from './component/user/meal/meal';
import { MeallogComponent } from './component/user/meallog/meallog';
import { DietplansComponent } from './component/user/dietplan/dietplan';
import { UserLandingComponent } from './component/user/user-landing/user-landing';
import { UserDashboardComponent } from './component/user/user-dashboard/user-dashboard';


const routes: Routes = [
  // Admin Routes
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'admin/landingpage', component: AdminLandingPageComponent },
  { path: 'admin/manage-users', component: ManageUserComponent },
  { path: 'admin/manage-meals', component: ManageMealComponent },

  // User Routes
  { path: '', component: UserLandingComponent },
  { path: 'user/dashboard', component: UserDashboardComponent },
  { path: 'user/login', component: UserLoginComponent },
  { path: 'user/dietplans', component: DietplansComponent },
  { path: 'user/meals', component: MealsComponent },
  { path: 'user/meallog', component: MeallogComponent },
  { path: 'user/glucoselog', component: GlucoselogComponent },
  { path: 'user/fooditems', component: FooditemsComponent },

  // Wildcard route (optional)
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

export default routes;
