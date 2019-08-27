import React from "react";

export default function Checkbox({ id, label, handleChange }) {
  return (
    <div className="checkbox">
      <label htmlFor={id}>{label}</label>
      <input type="checkbox" name={id} id={id} onChange={handleChange} />
    </div>
  );
}
