import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LinksComponent } from './links/links.component';
import { PhotosComponent } from './photos/photos.component';

const routeConfig: Routes = [
{
    path: '',
    component: HomeComponent
},
{
    path: 'links',
    component: LinksComponent
},
{
    path: 'photos',
    component: PhotosComponent
}

];

export default routeConfig;