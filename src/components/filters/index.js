import React from "react";
import Search from "./search";
import Checkbox from "./checkbox";

export default function Filters(props) {
  const searchProps = {
    searchText: props.searchText,
    handleChange: props.handleChange
  };

  const hdProps = {
    id: "hd",
    label: "HD ENABLED",
    handleChange: props.handleHdChange
  };

  const oneWayProps = {
    id: "oneWay",
    label: "ONE WAY ENABLED",
    handleChange: props.handleOneWayChange
  };
  return (
    <section className="filters">
      <Search {...searchProps} />
      <div className="sub-filters">
        <Checkbox {...hdProps} />
        <Checkbox {...oneWayProps} />
      </div>
    </section>
  );
}
