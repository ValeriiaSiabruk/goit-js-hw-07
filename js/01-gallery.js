import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
let modal;

const galleryHTML = galleryItems.map((elem) => {
  return `
    <div class="gallery__item">
      <a class="gallery__link" href="${elem.original}">
        <img
          class="gallery__image"
          src="${elem.preview}"
          data-source="${elem.original}"
          alt="${elem.description}"
        >
      </a>
    </div>
  `;
});

gallery.insertAdjacentHTML("afterbegin", galleryHTML.join(""));

function modalShowHandler(event) {
  event.preventDefault();

  const imgSrc = event.target.dataset.source;

  if (!imgSrc) return;

  modal = basicLightbox.create(
    `<img src="${imgSrc}" width="1280" height="853">`,
    {
      onShow: () => {
        document.addEventListener("keydown", modalCloseHandler);
      },
      onClose: () => {
        document.removeEventListener("keydown", modalCloseHandler);
      },
    }
  );

  modal.show();
}

function modalCloseHandler(event) {
  if (event.key === "Escape") {
    modal.close();
  }
}

gallery.addEventListener("click", modalShowHandler);
