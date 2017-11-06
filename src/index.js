import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['hello', 'webpack'], ' ');
  element.classList.add('hello');

  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
    return element;
}

document.body.appendChild(component());