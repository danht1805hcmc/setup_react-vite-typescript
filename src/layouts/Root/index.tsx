import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div id='root-layout'>
      <p>Header</p>

      <Outlet />

      <p>Footer</p>
    </div>
  );
}

export default RootLayout;
