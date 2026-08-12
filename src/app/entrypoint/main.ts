import { bootstrapApplication } from '@angular/platform-browser';
import { CONFIG } from '../config';
import { App } from './app';

bootstrapApplication(App, CONFIG).catch((error) => console.error(error));
