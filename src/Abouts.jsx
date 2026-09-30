import React from "react";
import Meet from "./components/Meet";
import Building from "./components/Building";
import ContactCTA from "./components/ContactCTA";

function Abouts() {
  return (
    <div className="abouts">
      <Meet />
      <Building />
      <ContactCTA />
    </div>
  );
}

export default Abouts;
