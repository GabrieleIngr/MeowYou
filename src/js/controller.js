import headerView from "./headerView.js";
import sidebarView from "./sidebarView.js";
import model from "./model.js";
import mapView from "./mapView.js";
import matchView from "./matchView.js";
import yourMatches from "./yourMatches.js";

/*this function handles the cat API calls and renders the first element which will also be the next one
    since the model always removes the first one. 
  */
const handleCatAction = async function () {
  try {
    await model._callAgain();
    matchView._renderCats(model._cats[0]);
  } catch (err) {
    console.error("🚨 Failed to load cat data:", err);
    matchView._showError();
  }
};

const controlLike = async function () {
  model._addCat();
  model._removeCat();
  yourMatches._renderCats(model._yourMatches);
  handleCatAction();
};

const controlDislike = async function () {
  model._removeCat();
  handleCatAction();
};

const init = async function () {
  headerView._showHomepage();
  headerView._showMap();
  headerView._showMatches();
  sidebarView._showSidebar();
  sidebarView._addClickOutsideListener();
  sidebarView._hideSidebar();
  sidebarView._showYourMatches();
  matchView._addHandlers(controlLike, controlDislike);

  try {
    await model._loadCatData();
    matchView._renderCats(model._cats[0]);
  } catch (err) {
    console.error("🚨 Failed to load cat data:", err);
    matchView._showError();
  }

  try {
    const coords = await model._getLocation();
    mapView._showMap(coords);
  } catch (err) {
    console.error("Location error:", err);
    mapView._showError();
  }
};

window.addEventListener("beforeunload", function () {
  //removes matches when the user exits the app
  localStorage.removeItem("_yourMatches");
});

init();
