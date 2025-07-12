class HeaderView {
  _logo = document.querySelector(".logo__title");
  _locationBtns = document.querySelectorAll(".nav__btn-location");
  _matchesBtns = document.querySelectorAll(".nav__btn--new-matches");
  _home = document.querySelector(".home");
  _mapSection = document.querySelector(".map__section");
  _matchesSection = document.querySelector(".find__matches");

  _hideAllSections() {
    this._home.classList.add("hidden");
    this._mapSection.classList.add("hidden");
    this._matchesSection.classList.add("hidden");
  }

  _showHomepage() {
    this._logo.addEventListener("click", () => {
      this._hideAllSections();
      this._home.classList.remove("hidden");
    });
  }

  _showMap() {
    this._locationBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this._hideAllSections();
        this._mapSection.classList.remove("hidden");
      });
    });
  }

  _showMatches() {
    this._matchesBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this._hideAllSections();
        this._matchesSection.classList.remove("hidden");
      });
    });
  }
}
export default new HeaderView();
