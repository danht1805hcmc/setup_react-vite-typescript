import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';

import RootLayout from './layouts/Root';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path='home' element={<Navigate to='/' replace />} />

      {/* Other routes */}
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
