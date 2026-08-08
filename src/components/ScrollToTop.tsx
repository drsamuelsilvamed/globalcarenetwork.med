import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
 const { pathname, hash } = useLocation();

 useEffect(() => {
 if (hash) {
 // Un pequeño retraso para permitir que la página se renderice completamente antes de scrollear
 setTimeout(() => {
 const element = document.getElementById(hash.replace('#', ''));
 if (element) {
 element.scrollIntoView({ behavior: 'smooth' });
 }
 }, 100);
 } else {
 window.scrollTo(0, 0);
 }
 }, [pathname, hash]);

 return null;
}
