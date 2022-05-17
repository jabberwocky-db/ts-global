import { envMode } from 'src/lib/env/env-mode';

export const isProd = envMode === 'production';
