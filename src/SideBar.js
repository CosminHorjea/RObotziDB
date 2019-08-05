import React from 'react';
import logoCM from './logoCM.png';
import './SideBar.css';

function SideBar() {
      return (
            <div className="sideBar">
                  <div className="inneR">

                        <img src={logoCM} alt="CMarmy" />
                        <h1>Hello from sidebar</h1>
                        <div>
                              <h1>Hello, world!</h1>
                              <h2>It is {new Date().toLocaleTimeString()}.</h2>
                        </div>
                  </div>
            </div>
      );
}

export default SideBar;