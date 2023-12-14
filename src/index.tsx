import { createRoot } from 'react-dom/client';
import '@/app/styles/index.scss';
import App from './app/App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
