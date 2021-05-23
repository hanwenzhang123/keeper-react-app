import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear(); //dynamic year
  return (
    <footer>
      <p>Copyright ⓒ {currentYear}</p>
    </footer>
  );
}

export default Footer;
