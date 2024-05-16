import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../container/route';

 
const Drawer = ({ toggleDrawer }) => {
  const [isOpen, setIsOpen] = useState(false);
 const name=['Become a Meemer']
  useEffect(() => {
    setIsOpen(toggleDrawer);
  }, [toggleDrawer]);

  return (
    <>
      <div className={`drawer ${isOpen ? 'active' : ''}`} style={{ zIndex: 101 }}>
        <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
        <div className="drawer-content">
          {/* Page content here */}
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <div className="pointer-events-none">
              <li>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpXH5p42vGQeiFqQExBMq2lrFC5O5lA8w6Gv1nYgzM-g&s" alt="" />
                <h1 className="text-3xl font-bold mt-2 mb-5">Meeme Gangster</h1>
              </li>
            </div>
            <li><NavLink to={'/'}>Home</NavLink></li>
                
            {routes.map((route, index) => (
              // you can use routes.name for defaut naem fetch form file
             // <li key={index}><NavLink to={route.path}>{route.name}</NavLink></li>
              <li key={index}><NavLink to={route.path}> {route.name}</NavLink></li>
            ))}
            
            {/* Footer */}
            <li className='mt-auto pt-4 border-t border-base-300'>
              <footer className="text-center pointer-events-none">by iotnoob Talha Khalid</footer>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Drawer;
