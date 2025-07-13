import L from "leaflet";
import "leaflet/dist/leaflet.css";

class MapView {
  _mapEl = document.querySelector(".map");
  _error = document.querySelector(".map-error");
  _mapButtons = document.querySelectorAll(".nav__btn-location");
  _mapSection = document.querySelector(".map__section");
  _showMap({ lat, long }) {
    if (this._mapSection.classList.contains("hidden")) return; //avoid displaying map over other sections when geolocation is allowed
    this._mapSection.classList.remove("hidden");

    const map = L.map(this._mapEl).setView([lat, long], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    L.circleMarker([lat, long], {
      color: "#004d00",
      fillColor: "#004d00",
      fillOpacity: 0.8,
      radius: 8,
      weight: 2,
    })
      .addTo(map)
      .bindPopup("You are here!")
      .openPopup();
  }

  _mapHandler(handler) {
    this._mapButtons.forEach((button) => {
      button.addEventListener("click", handler);
    });
  }

  _showError() {
    this._error.classList.remove("hidden");
  }
}

export default new MapView();
