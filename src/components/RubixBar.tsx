
function RubixBar() {

// Make sure to add buttons 
const ButtonNames = ["Shuffle", "Pause", "Restart"];
  return (
    <div className="RubixBar">
        <button className="RubixButton">{ButtonNames[0]}</button>
        <button className="RubixButton">{ButtonNames[1]}</button>
        <button className="RubixButton">{ButtonNames[2]}</button>
    </div>
  );
}

export { RubixBar };