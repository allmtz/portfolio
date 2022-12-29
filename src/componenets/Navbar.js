function NavBar({ openNav, closeNav, navDropdownRef }) {
  return (
    <nav className="row">
      <a href="https://github.com/ramenDiet" target="_blank" rel="noreferrer">
        <iconify-icon
          icon="codicon:github-inverted"
          style={{ color: "white" }}
          width="50"
          height="50"
        ></iconify-icon>
      </a>

      <button className="open-nav-btn" onClick={openNav}>
        ☰
      </button>

      <ul ref={navDropdownRef} className="anchors row">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <button onClick={closeNav} className="close-nav-btn">
            X
          </button>
        </li>
      </ul>
    </nav>
  );
}

export { NavBar };
