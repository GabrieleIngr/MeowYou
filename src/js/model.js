class AppData {
  _cats = [];
  _yourMatches = [];

  async _getLocation() {
    return new Promise((resolve, reject) => {
      const success = (pos) => {
        const lat = pos.coords.latitude;
        const long = pos.coords.longitude; //getting user's location with the browser geolocation API
        resolve({ lat, long });
      };

      const error = () => {
        reject("Failed to get location");
      };

      const options = {
        maximumAge: 0,
        timeout: 10000,
        enableHighAccuracy: true,
      };

      navigator.geolocation.getCurrentPosition(success, error, options);
    });
  }

  async _loadCatData() {
    try {
      const response = await fetch("/.netlify/functions/cat-api"); // using netlify to hide the API key
      const data = await response.json();

      const seenNames = new Set();

      data.forEach((cat) => {
        if (cat.breeds?.length > 0) {
          // avoiding errors using the optional chaining operator
          cat.breeds.forEach((breed) => {
            if (!seenNames.has(breed.name)) {
              // this filters out duplicate breeds thanks to Set that acts as a check
              seenNames.add(breed.name);

              const shortTemp = breed.temperament
                .split(", ")
                .slice(0, 2)
                .join(", ");

              this._cats.push({
                image: cat.url,
                name: breed.name,
                temperament: shortTemp,
              });
            }
          });
        }
      });

      console.log("✅ Stored breed data:", this._cats);
      console.log("🐱 Cat data from API:", data);
    } catch (err) {
      console.error("🚨 Failed to fetch cat data:", err);
      throw err;
    }
  }

  _addCat() {
    if (this._cats.length > 0) {
      this._yourMatches.push(this._cats[0]);
      localStorage.setItem("_yourMatches", JSON.stringify(this._yourMatches));
    }
  }

  _removeCat() {
    this._cats.shift();
  }

  async _callAgain() {
    if (this._cats.length === 0) this._loadCatData();
  }
}

export default new AppData();
