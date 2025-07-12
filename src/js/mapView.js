import L from "leaflet";
import "leaflet/dist/leaflet.css";

class MapView {
  _mapEl = document.querySelector(".map");
  _error = document.querySelector(".map-error");

  _showMap({ lat, long }) {
    document.querySelector(".map__section").classList.remove("hidden");

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

  _showError() {
    this._error.classList.remove("hidden");
  }
}

export default new MapView();
