import { Routes } from '@angular/router';
import { RegisterComponent} from './user/register/register.component';
import { LoginComponent} from './user/login/login.component';



export const appRoutes : Routes = [
    {path : 'login' , component : LoginComponent},    
    {path : 'register' , component : RegisterComponent},  
    {path : '' , redirectTo: '/login' ,pathMatch:'full' },
   
   

    
    
]

