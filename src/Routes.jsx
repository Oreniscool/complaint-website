import Home from './pages/Home';
import ComplaintForm from './pages/ComplaintForm';
import ErrorPage from './pages/ErrorPage';
const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/form',
    element: <ComplaintForm />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
