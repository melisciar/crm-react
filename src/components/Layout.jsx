import { Outlet, NavLink } from 'react-router-dom';

function Layout() {
  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CRM - clientes
        </h2>
        <nav className="mt-10">
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? 'text-blue-300' : 'text-white'
              } text-2xl block mt-2 hover:text-blue-300 text-white`
            }
            to="/"
          >
            Clientes
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? 'text-blue-300' : 'text-white'
              } text-2xl block mt-2 hover:text-blue-300 text-white`
            }
            to="/clientes/nuevo"
          >
            Nuevo cliente
          </NavLink>
        </nav>
      </aside>
      <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
