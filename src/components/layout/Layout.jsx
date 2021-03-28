import React from "react";

// TODO sækja Sass

export function Layout({ children }) {
  return (
    <div className="l">
      <header className="l">
        <h1>RÚV fréttir</h1>
      </header>
      <main className="l">{children}</main>
      <footer className="l">
        <span>
          Fréttir frá <a href="https://www.ruv.is/">RÚV</a>
        </span>
      </footer>
    </div>
  );
}
