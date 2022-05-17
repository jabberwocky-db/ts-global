import { envMode } from 'src/lib/env/env-mode';

export const isDev = envMode === 'development';
