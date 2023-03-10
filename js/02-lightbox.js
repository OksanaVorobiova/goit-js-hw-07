import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const makeGalleryMarkup = (galleryItems) => {
    return galleryItems.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join("");
}

const galleryMarkup = makeGalleryMarkup(galleryItems);
console.log(galleryMarkup);

galleryEl.innerHTML = galleryMarkup;

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
});



console.log(lightbox);


console.log(galleryItems);
