import React, { useState, useEffect } from "react";
import "./scss/app.scss";
import Header from "./components/header";
import Filters from "./components/filters";
import CitiesList from "./components/cities-list";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState("");
  const [hd, setHd] = useState(null);
  const [oneWay, setOneWay] = useState(null);

  // Fetch cities
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.zoomcar.com/v4/cities?platform=web"
        );
        const sortedCities = response.data.cities.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setData(sortedCities);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  // Filters
  useEffect(() => {
    let filtered = data.filter(city =>
      city.name.toLowerCase().includes(search.toLowerCase())
    );

    if (hd !== null) {
      if (hd) {
        filtered = filtered.filter(city => city.hd_enabled === true);
      } else {
        filtered = filtered.filter(city => city.hd_enabled === false);
      }
    }

    if (oneWay !== null) {
      if (oneWay) {
        filtered = filtered.filter(city => city.one_way_enabled === true);
      } else {
        filtered = filtered.filter(city => city.one_way_enabled === false);
      }
    }

    setCities(filtered);
  }, [data, search, hd, oneWay]);

  const filterProps = {
    searchText: search,
    handleChange: e => setSearch(e.target.value),
    handleHdChange: e => setHd(e.target.checked),
    handleOneWayChange: e => setOneWay(e.target.checked)
  };

  return (
    <div>
      <Header />
      <main>
        {loading ? (
          <div>loading...</div>
        ) : (
          <div className="wrap">
            <Filters {...filterProps} />
            <CitiesList cities={cities} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
