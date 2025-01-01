
function NavBar() {

    const ButtonNames = ["Tutorial", "Play"];
  return (
    <div className="NavBar">
        <a href="/tutorial" className="NavButton">{ButtonNames[0]}</a>
        <a href="/" className="NavButton">{ButtonNames[1]}</a>
    </div>
  );
}

export { NavBar };