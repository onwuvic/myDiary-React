const close = document.getElementById('close-menu');
const open = document.getElementById('open-menu');
const sideMenu = document.getElementById('side-menu');
const main = document.getElementById('main');
const moreInfo = document.querySelectorAll('#more-info');
const moreContent = document.querySelector('#more-content');
const moreInformation = document.querySelector('#more-information');
const logOut = document.getElementById('logout');

/**
 * @description - This method renders the jsx for this component
 * @returns {jsx} - jsx
 * @memberof Dashboard
 */
function closeSideMenu() {
  sideMenu.style.cssText = '';
  main.style.cssText = '';
}

/**
 * @description - This method renders the jsx for this component
 * @returns {jsx} - jsx
 * @memberof Dashboard
 */
function openSideMenu() {
  sideMenu.style.width = '250px';
  main.style.marginLeft = '250px';
}

/**
 * @description - This method renders the jsx for this component
 * @returns {jsx} - jsx
 * @memberof Dashboard
 */
function toggleOpen() {
  this.parentNode.classList.toggle('clicked');
}

/**
 * @description - This method renders the jsx for this component
 * @returns {jsx} - jsx
 * @memberof Dashboard
 */
function display() {
  moreContent.classList.toggle('clicked');
}

/**
 * @description - This method renders the jsx for this component
 * @returns {jsx} - jsx
 * @memberof Dashboard
 */
function logOutApp() {
  window.localStorage.clear();
  window.location.replace('#/');
}

if (close) {
  close.addEventListener('click', closeSideMenu, false);
}

if (open) {
  open.addEventListener('click', openSideMenu, false);
}

if (moreInformation) {
  moreInformation.addEventListener('click', display, false);
}

if (logOut) {
  logOut.addEventListener('click', logOutApp, false);
}

moreInfo.forEach(panel => panel.addEventListener('click', toggleOpen, false));
