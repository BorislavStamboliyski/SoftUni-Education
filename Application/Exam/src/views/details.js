import { deleteAlbum, getById } from "../api/data.js";
import { getLikes, getOwnLikes, postLike } from "../api/likes.js";
import { html, nothing } from "../lib.js";


const detailTempalte = (album, likesCNT, hasUser, canLike, isOwner, onDelete, onLike) => html`
     <section id="details">
        <div id="details-wrapper">
          <p id="details-title">Album Details</p>
          <div id="img-wrapper">
            <img src=${album.imageUrl} alt="example1" />
          </div>
          <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
            <p>
              <strong>Album name:</strong><span id="details-album">${album.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
          </div>
          <div id="likes">Likes: <span id="likes-count">${likesCNT}</span></div>
          ${likeCard(album, hasUser, canLike, isOwner, onDelete, onLike)}
      </section>`;

function likeCard (album, hasUser, canLike, isOwner, onDelete, onLike) {
    if(hasUser == false) {
        return nothing;
    }
    if(canLike) {
        return html`
        <div id="action-buttons">
    <a @click=${onLike} href="javascript:void(0)" id="like-btn">Like</a>
        </div>`
    }
    if(isOwner) { 
    return html`
    <div id="action-buttons">
            <a href="/edit/${album._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
    </div>`
    }
}

export async function showDetails(ctx) {

    const id = ctx.params.id;

    const requests =[
        getById(id),
        getLikes(id),
    ];

    const hasUser = Boolean(ctx.user);
    if(hasUser) {
        requests.push(getOwnLikes(id, ctx.user._id))
    }
    const [album, likesCNT, hasLiked] = await Promise.all(requests);

    const isOwner = hasUser && ctx.user._id == album._ownerId;
    const canLike = !isOwner && hasLiked == 0;


    ctx.render(detailTempalte(album,likesCNT, hasUser, canLike, isOwner, onDelete, onLike));

    async function onDelete() {
        const choice = confirm("Are you sure you want to delete this album?");

        if(choice) {
            await deleteAlbum(id);
            ctx.page.redirect('/catalog');
        }
    }

    async function onLike() {
        await postLike(id);
        ctx.page.redirect("/catalog/" + id);
    }
}