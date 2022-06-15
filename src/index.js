import _ from 'lodash';

function component() {
    const element = document.createElement('div'); //csinál egy divet  
  
     // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' '); //beletölti a 'hellot' és 'webpacket'
  
    return element; //ezt fűzi a body végére
  }
  
  document.body.appendChild(component());