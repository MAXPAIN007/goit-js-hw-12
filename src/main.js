import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  showLoader,
  hideLoader,
  clearGallery,
} from './js/render-functions';

const form = document.querySelector('.form');
const input = document.querySelector('[name="search-text"]');
const galleryElem = document.querySelector('.gallery');
const loaderElem = document.querySelector('.loader');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const request = input.value.trim();
  clearGallery(galleryElem);
  showLoader(loaderElem);
  if (!request) {
    hideLoader(loaderElem);
    return iziToast.error({
      title: 'Caution',
      message: 'Please enter a search query.',
      position: 'topRight',
      timeout: 3000,
    });
  }

  getImagesByQuery(request)
    .then(images => {
      createGallery(images, galleryElem);
    })
    .catch(error => {
      iziToast.error({
        title: 'Caution',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 3000,
      });
    })
    .finally(() => {
      hideLoader(loaderElem);
      form.reset();
    });
}
