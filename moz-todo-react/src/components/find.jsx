import React from "react";
const Find = ({ flavors }) => {
  const candyFlavor = flavors.find((flavor) => flavor.name.includes("Sorbet"));

  return (
    <div>

      {sorbetFlavor && (
      <p>Our Sorbet of the day is: <strong>{sorbetFlavor.name}</strong> 
      </p>
         )}
         </div>
       );
     };