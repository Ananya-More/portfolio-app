import React from 'react';
import { createRoot } from 'react-dom/client';
import PortfolioApp from './components/PortfolioApp'; // import your main component
import './styles/styles.css'; // import your CSS

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<PortfolioApp />);
