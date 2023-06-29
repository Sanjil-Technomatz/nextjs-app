import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <h1>Navbar</h1>
      <div>{children}</div>
      <h1>Footer</h1>
    </div>
  );
}
