class matchView {
  _parentContainer = document.querySelector(".entire-card");
  _catCard = document.querySelector(".cat-card");
  _catImage = document.querySelector(".cat-card__img img");
  _catName = document.querySelector(".cat-name");
  _catBio = document.querySelector(".cat-bio");
  _likeHandler;
  _dislikeHandler;
  _error = document.querySelector(".cat-error");
  _spinner = document.querySelector(".spinner");

  // using event delegation to add the listener to each new button
  constructor() {
    this._parentContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".card__btn");
      if (!btn) return;
      if (btn.classList.contains("btn--like") && this._likeHandler) {
        this._likeHandler();
      }
      if (btn.classList.contains("btn--no") && this._dislikeHandler) {
        this._dislikeHandler();
      }
    });
  }

  _addHandlers(likeHandler, dislikeHandler) {
    this._likeHandler = likeHandler;
    this._dislikeHandler = dislikeHandler;
  }

  _hideSpinner() {
    this._spinner.classList.add("hidden");
  }

  _renderCats(cat) {
    this._hideSpinner();
    this._parentContainer.innerHTML = "";
    const markup = this._generateMarkup(cat);
    this._parentContainer.insertAdjacentHTML("beforeend", markup);
  }

  //dynamically generating the HTML markup for each cat
  _generateMarkup(cat) {
    return `<article class="cat-card "> <figure class="cat-card__img">
            <img class="test" src="${cat.image}" alt="${cat.name}" />
            
          </figure>
          <div class="cat-card__info">
            <h2 class="cat-name">${cat.name}</h2>
            <p class="cat-bio">${cat.temperament}</p>
          </div>
          <div class="cat-card__actions ">
            <button class="card__btn btn--no">
              <i class="fa-solid fa-x" style="color: #ff0000;"></i>
            </button>
            <button class="card__btn btn--like">
              <i class="fa-solid fa-heart" style="color: #0cd480;"></i>
            </button>
          </div></article>`;
  }

  _showError() {
    this._hideSpinner();
    this._error.classList.remove("hidden");
  }
}
export default new matchView();
