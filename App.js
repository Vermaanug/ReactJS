import React from "react";
import ReactDOM from "react-dom/client";

// This is core React
// const heading = React.createElement("h1" , { id : "heading"} , "Hello From World");

// This is how you create react element in jsx
const jsxheading = <h1 id="heading">Welcome From JSX</h1>;


//React Functional Component

const Title = () => (
    <h1> Namasate Reacts </h1>
) 

//Component Composition
const HeadingComponent = () => (
    <div>
    {jsxheading}
    <Title/>
    <h1> Namasate React Functional Component </h1>
    </div>
)


 
// const Heading2 = () => (
//     <h1> Hello From Functional Component </h1>
// )

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
