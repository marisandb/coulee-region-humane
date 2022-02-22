import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import "./style.css"


function Nav(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name + " - Coulee Region Wildlife Rehabilitation");
  }, [currentPage]);

  return (    
      <nav>
        <ul className="flex-row">
          {pages.map((Page) => (
            <li
              className={`nav-name ${
                currentPage.name === Page.name && 'navActive'
                }`}
              key={Page.name}
            >
              <span
                onClick={() => setCurrentPage(Page)}
              >
                {capitalizeFirstLetter(Page.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
  );
}

export default Nav;