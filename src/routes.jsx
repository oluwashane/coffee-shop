import { createBrowserRouter } from 'react-router-dom';
import { Landing } from './views/landing';
import { CoffeeDetail } from './views/coffee-detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/coffee/:type/:id',
    element: <CoffeeDetail />,
  },
]);

export default router;
