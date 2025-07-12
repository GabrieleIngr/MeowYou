class yourMatches {
  _messages = document.querySelectorAll(".message");
  _parentContainers = document.querySelectorAll(".matches__list");

  _renderCats(cats) {
    this._messages.forEach((msg) => msg.classList.add("hidden"));
    this._parentContainers.forEach((container) => (container.innerHTML = ""));

    cats.forEach((cat) => {
      const markup = this._generateMarkup(cat);
      this._parentContainers.forEach((container) =>
        container.insertAdjacentHTML("beforeend", markup)
      );
    });
  }

  _generateMarkup(cat) {
    return `<div class="preview">
    <figure class="preview__fig">
      <img class="cat-pfp" src="${cat.image}" alt="${cat.name}" />
    </figure>
    <div class="preview__data">
      <h4 class="match__name">${cat.name}</h4>
    </div>
  </div>`;
  }
}

export default new yourMatches();
