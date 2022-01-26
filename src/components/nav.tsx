import React from 'react';

const Nav = () => {
  return (
    <div id="navigation" className="navigation">
      <nav>
        <ul >
          <li>
            <a href="https://www.netflix.com/browse" target="_blank" rel="noopener noreferrer noopener">Browse</a>
          </li>
          <li>
            <a>Top picks</a>
          </li>
          <li>
            <a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer noopener">Recent</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav