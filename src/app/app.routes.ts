import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LinksComponent } from './links/links.component';
import { PhotosComponent } from './photos/photos.component';
import { ProjectsComponent } from './projects/projects.component';
import { MusicstatsComponent } from './musicstats/musicstats.component';

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
},
{
    path: 'projects',
    component: ProjectsComponent
},
{
    path: 'music',
    component: MusicstatsComponent
}
];

export default routeConfig;