class sidebarView {
  _hamburger = document.querySelector(".hamburger__menu");
  _sidebar = document.querySelector(".side-bar");
  _yourMatches = document.querySelector(".nav__btn-matches.sidebar");
  _matchesList = document.querySelector(".matches.hidden");
  _sidebarBtns = [
    ...document.querySelectorAll(".nav__btn-location"),
    ...document.querySelectorAll(".nav__btn--new-matches"),
  ]; // Using the spread operator to convert NodeLists into a single array

  _resetSidebar() {
    this._matchesList.classList.add("hidden");

    this._yourMatches.classList.remove("hidden");

    this._sidebarBtns.forEach((btn) => {
      btn.classList.remove("hidden");
    });
  }

  _hideSidebar() {
    this._sidebarBtns.forEach((btns) => {
      btns.addEventListener("click", () =>
        this._sidebar.classList.add("hidden")
      );
    });
  }

  _showSidebar() {
    this._hamburger.addEventListener("click", () => {
      this._sidebar.classList.toggle("hidden");
      this._resetSidebar();
    });
  }

  _addClickOutsideListener() {
    document.addEventListener("click", (e) => {
      if (
        !this._sidebar.classList.contains("hidden") &&
        !this._sidebar.contains(e.target) &&
        !this._hamburger.contains(e.target)
      ) {
        this._sidebar.classList.add("hidden");
        this._resetSidebar();
      }
    });
  }

  _showYourMatches() {
    this._yourMatches.addEventListener("click", () => {
      this._matchesList.classList.remove("hidden");

      this._yourMatches.classList.add("hidden");

      this._sidebarBtns.forEach((sidebarBtn) => {
        sidebarBtn.classList.add("hidden");
      });
    });
  }
}

export default new sidebarView();
