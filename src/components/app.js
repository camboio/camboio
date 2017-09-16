import React, { Component } from 'react';

import Australia from './australia';

export default class App extends Component {
  render() {
    return (
         <div className="app-container">
            <div className="page-header">
               <div className="name-container">
                  <img src="./inc/profile.jpg" />
                  <div className="name">
                     <div className="first">Anthony</div>
                     <div className="last">Campbell</div>
                  </div>
               </div>
               <div className="location-container">
                  <div className="contact">
                     anthony<i className="fa fa-at"></i>cambo.io
                     <a href="https://www.linkedin.com/in/anthony-campbell-349a19141/" target="_blank">
                        <i className="fa fa-linkedin-square"></i>
                     </a>
                     <a href="https://github.com/camboio" target="_blank">
                        <i className="fa fa-github-square"></i>
                     </a>
                  </div>
                  <div className="location">
                     Melbourne, Australia <Australia />
                  </div>
               </div>
            </div>
            <div className="container">
               <div className="content">
                  <h1>Projects</h1>
                  <h2>
                     <a href="http://yooneau.cambo.io" target="_blank">yooneau</a>
                     <small>
                        a react/redux project to make a multiplayer card game. still in early alpha
                     </small>
                  </h2>
                  <h2>
                     <a href="http://github.com/camboio/bird-watcher-3000" target="_blank">BIRD WATCHER 3000</a>
                     <small>
                        a discord bot for watching the falcons at 367 collins st melbourne
                     </small>
                  </h2>
                  <h2>
                     <a href="http://avo.cambo.io/" target="_blank">clicker</a>
                     <small>
                        a react/redux project to make an idle clicker game. currently in alpha
                     </small>
                  </h2>
                  <h2>
                     <a href="http://n64.com.au" target="_blank">n64</a>
                     <small>
                        a react/three.js project for displaying 3d content over the web
                     </small>
                  </h2>
                  <h2>
                     <a href="http://ibis.cambo.io" target="_blank">ibis</a>
                     <small>
                        a react/redux based twitter client. currently in alpha
                     </small>
                  </h2>
                  <h2>
                     <a href="https://twitter.com/tramcop" target="_blank">tramcop</a>
                     <small>
                        a twitter bot for identifying and sharing tweets regarding melbourne's public transport ticket inspectors
                     </small>
                  </h2>

                  <h1>Back End</h1>
                  <h2>
                     <a href="/dig" target="_blank">dig</a>
                     <small>
                        a web interface for the dig tool
                     </small>
                  </h2>
                  <h2>
                     <a href="/had" target="_blank">had</a>
                     <small>
                        a tool to determine whether a domain has web or email hosting within a specific ip range
                     </small>
                  </h2>
                  <h2>
                     <a href="/letc" target="_blank">letc</a>
                     <small>
                        a tool to determine whether or not a domain is hosted on a cPanel server
                     </small>
                  </h2>

                  <h1>Front End</h1>
                  <h2>
                     <a href="https://wellmadeweb.com.au" target="_blank">well made web</a>
                     <small>
                        a responsive web design page with svg animations
                     </small>
                  </h2>
                  <h2>
                     <a href="https://bure.com.au" target="_blank">bure studios</a>
                     <small>
                        a responsive site for selling prints
                     </small>
                  </h2>
                  <h2>
                     <a href="https://bakedpotato.com.au" target="_blank">baked potato</a>
                     <small>
                        it's a baked potato
                     </small>
                  </h2>
               </div>
            </div>
         </div>
    );
  }
}
