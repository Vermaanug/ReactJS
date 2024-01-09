import React from "react";
import ReactDOM  from "react-dom/client";

const Parent = React.createElement(
  "div",
  { id: "Parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Welocome "),
    React.createElement("h1", {}, "Welocome "),
    React.createElement("h1", {}, "Hello I'm H1 tag"),
    React.createElement("h2", {}, "Hello I'm H2 tag"),
  ])
);

// const heading = React.createElement(
//   "H1",
//   { id: "heading ", Style: "color:red" },
//   "Hello Wolrd Form Reacts"
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(heading); //  return Object

root.render(Parent);
