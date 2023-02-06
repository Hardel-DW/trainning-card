import { render } from 'preact';
import { Index } from '@/app';
import '@styles/global.css';
import '@fontsource/space-grotesk';

render(<Index />, document.getElementById('app') as HTMLElement);
