import { logout } from "./api/user.js";
import { html, render, page } from "./lib.js";
import { getUserData } from "./util.js";


const nav = document.querySelector('header');

const updateNavTemplate = (hasUser) => html`
<a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>

<nav>
  <div>
    <a href="/catalog">Dashboard</a>
  </div>
  ${hasUser ? html`
  <div class="user">
    <a href="/create">Add Album</a>
    <a @click=${onLogout} href="javascript:void(0)">Logout</a>
  </div>`
  :html`<div class="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
  </div>`}
</nav>
` 



export function updateNav() {

    const user = getUserData();

    render(updateNavTemplate(user), nav);

}


function onLogout() {
    logout();
    updateNav();
    page.redirect('/catalog')   
}