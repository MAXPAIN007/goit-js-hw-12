import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 200,
});

export function createGallery(images, galleryElem) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        type,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item js-gallery-item">
  <a class="gallery-link js-gallery-link" href="${largeImageURL}">
    <div class="image-wrapper">
      <img
        class="gallery-image js-gallery-image"
        src="${webformatURL}"
        data-source="${type}"
        alt="${tags}"
      />
    </div>
  
  <div>
    <ul class="wrapper-box">
      <li class="list-item">
        <p class="value-title">Likes</p>
        <p class="label" data-likes>${likes}</p>
      </li>
      <li class="list-item">
        <p class="value-title">Views</p>
        <p class="label" data-views>${views}</p>
      </li>
      <li class="list-item">
        <p class="value-title">Comments</p>
        <p class="label" data-comments>${comments}</p>
      </li>
      <li class="list-item">
        <p class="value-title">Downloads</p>
        <p class="label" data-downloads>${downloads}</p>
      </li>
    </ul>
  </div>
  </a>
</li>`
    )
    .join('');
  galleryElem.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery(galleryElem) {
  galleryElem.innerHTML = '';
}

export function showLoader(loaderElem) {
  loaderElem.classList.remove('is-hidden');
}

export function hideLoader(loaderElem) {
  loaderElem.classList.add('is-hidden');
}

export function showLoadMoreBtn(fetchPostsBtn) {
  fetchPostsBtn.classList.remove('is-hidden');
}

export function hideLoadMoreBtn(fetchPostsBtn) {
  fetchPostsBtn.classList.add('is-hidden');
}
