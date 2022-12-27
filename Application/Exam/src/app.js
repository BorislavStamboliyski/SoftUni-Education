import { page, render } from "./lib.js"
import { updateNav } from "./nav.js";
import { getUserData } from "./util.js";
import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";


const main = document.querySelector('main');


page(decorateRender);
page('/', showHome);
page('/catalog', showCatalog);
page('/catalog/:id', showDetails);
page('/create', showCreate);
page('/edit/:id',showEdit);
page('/login', showLogin);
page('/register', showRegister);
updateNav();

page.start();

function decorateRender(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav();

    const user = getUserData();
    if(user) {
        ctx.user = user;
    }
    next();
}



function renderMain (content) {
    render(content, main);
}