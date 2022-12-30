import { galleryItems } from './gallery-items.js';
//import * as basicLightbox from 'basiclightbox';
// Change code below this line
console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');

const makeGalleryMarkup = (galleryItems) => {
    return galleryItems.map(({preview, original, description}) => {
        return `<div class='gallery__item'>
        <a class="gallery__link" href="${original}">
            <img 
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>`
    }).join("");
}

const galleryMarkup = makeGalleryMarkup(galleryItems);
console.log(galleryMarkup);

galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryEl.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
    event.preventDefault();

    const instance = basicLightbox.create(`
    <div class="modal">
       <img src="${event.target.dataset.source}" alt="${event.target.alt}" />
    </div>
`);

    instance.show();
}

console.log(galleryItems);
