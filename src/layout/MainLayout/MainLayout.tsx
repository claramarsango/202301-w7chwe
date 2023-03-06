import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <h1>Star Wars</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
