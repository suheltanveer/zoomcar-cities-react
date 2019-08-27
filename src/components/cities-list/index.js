import React from "react";
import Cities from "./cities";

export default function CitiesList({ cities }) {
  const popularCities = cities.filter(city => city.popular === true);
  const otherCities = cities.filter(city => city.popular === false);
  return (
    <section className="list">
      <Cities title="Popular" cities={popularCities} />
      <Cities title="Others" cities={otherCities} />
    </section>
  );
}
