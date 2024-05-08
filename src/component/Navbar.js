import React from 'react';
import { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = ({ButtonEvent}) => {
 
  return (
    <div style={{ position: 'fixed ', top: 0, left: 0, right: 0, zIndex: 100 }} className="navbar bg-base-300 cnt">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost" onClick={ButtonEvent}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <NavLink to={'/'} className="btn btn-ghost text-xl">MeemeGangster</NavLink>
    
      </div>
      <div className="flex-none">
 
      </div>
    </div>
  );
};

export default Navbar;
