import React from "react";

import './layout.scss';

export function Layout({ children }) {
  return (
    <div>
      <header>
        <h1>RÚV fréttir</h1>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <hr></hr>
        <span>
          Fréttir frá <a href="https://www.ruv.is/">RÚV</a>
        </span>
      </footer>
    </div>
  );
}
