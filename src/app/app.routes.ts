import { Routes } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { BackgroundComponent } from './shared/background/background.component';

export const routes: Routes = [
    {
        path: '',
        component: PortfolioComponent
    },
    {
        path: 'wasd',
        component: BackgroundComponent
    }
];
