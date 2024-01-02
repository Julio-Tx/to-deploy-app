// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {

  const [isSidebarExpanded, setSidebarExpanded] = useState(true);

  const toggleSidebarSize = () => {
    setSidebarExpanded((prev) => !prev);
  };

  const sidebarWidth = isSidebarExpanded ? 'w-72' : 'w-32';
  const arrowIcon = isSidebarExpanded ? 'arrow-left' : 'arrow-right';
  
  return (
    <div className={`sidebar flex flex-col bg-zinc-900 h-screen ${sidebarWidth} text-white transition-all duration-150 relative`}>
      <div className='flex items-center w-full border-b border-zinc-600'>
        <button className='italic uppercase text-left py-3 pl-4 w-full'>
          Header
        </button>
        <button className='p-3' onClick={toggleSidebarSize}>
          <FontAwesomeIcon icon={arrowIcon} className='text-white h-5 pt-1' />
        </button>
      </div>
      <div className='flex flex-col items-center gap-1.5'>
        <Link className='py-2 pl-4 border-b border-zinc-700 w-full hover:font-semibold' to="/">Home</Link>
        <Link className='py-2 pl-4 border-b border-zinc-700 w-full hover:font-semibold' to="/about">About</Link>
        <Link className='py-2 pl-4 border-b border-zinc-700 w-full hover:font-semibold' to="/contact">Contact</Link>
        {/* Add more links as needed */}
      </div>
      <div className='absolute bottom-0 border-t border-zinc-600 w-full'>
        <button className='italic uppercase text-left py-3 pl-4 w-full'>
          Footer
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
