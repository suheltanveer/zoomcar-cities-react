import React, { Fragment } from "react";

export default function Cities({ cities, title }) {
  return (
    <Fragment>
      {!cities.length ? null : (
        <Fragment>
          <h2>{title}</h2>
          <ul>
            {cities.map(city => (
              <li key={city.id}>
                <img src={city.icon} alt={city.name} />
                <span>{city.name}</span>
              </li>
            ))}
          </ul>
        </Fragment>
      )}
    </Fragment>
  );
}
