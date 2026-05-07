import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MinimalScrollFix = () => {
  const location = useLocation();

  useEffect(() => {
    // Remove scroll lock classes
    document.body.classList.remove('offcanvas-active', 'modal-open', 'overflow-y-hidden');
    // Reset scroll lock styles
    document.body.style.overflow = '';
    document.body.style.overflowY = '';
    
    // Scroll to top when navigating to a new page
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

export default MinimalScrollFix; 