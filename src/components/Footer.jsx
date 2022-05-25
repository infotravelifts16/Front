import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-300 text-center lg:text-left">
        <div
          className="text-gray-700 text-center p-4"
        >
          © 2021 Copyright:
          <a className="text-gray-800" href="http://ifts16.com/">
            {" "} IFTS16
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
