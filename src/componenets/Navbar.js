function NavBar({ focusDefault, focusProjects, focusSkills, currentFocus }) {
  return (
    <nav>
      <div className="online-container">
        <div className="green-circle"></div>
        <p>online</p>
      </div>
      <div className="nav-links">
        <ul>
          <li
            className={currentFocus === "home" ? "focused" : ""}
            onClick={focusDefault}
          >
            Home
          </li>
          <li
            className={currentFocus === "projects" ? "focused" : ""}
            onClick={focusProjects}
          >
            Projects
          </li>
          <li
            className={currentFocus === "skills" ? "focused" : ""}
            onClick={focusSkills}
          >
            Skills
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { NavBar };
