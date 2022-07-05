import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const galleryHTML = galleryItems.map((elem) => {
  return `
    <a class="gallery__item" href="${elem.original}">
      <img class="gallery__image" src="${elem.preview}" alt="${elem.description}" />
    </a>
  `;
});

gallery.insertAdjacentHTML("afterbegin", galleryHTML.join(""));

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
