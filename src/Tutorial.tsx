import './App.css';
import { NavBar } from './components/NavBar';

function Tutorial() {
  return (
    <div>
      <NavBar />
      <h1> Welcome to TheOnlineRubiks </h1>
      <div className="TutorialContent">
        <img
          className="RubiksGIF"
          src="src/components/rubiks-cube-6366.gif"
          alt="Rubiks gif"
        />
        <div className="TutorialInfo">
          <p>
            This is a virtual Rubik's cube that you can solve online. I've tried
            to make the button configuration as straightforward as possible. Click on
            the "Solve" button to solve the cube. Click on the "Settings" button to
            customize your cube. Now for the specific cube keybinds...  
            <br />
            <strong>Arrow Keys:</strong>  
            ArrowUp - Rotate the bottom face to the front.  
            ArrowDown - Rotate the top face to the front.  
            ArrowLeft - Rotate the right face to the front.  
            ArrowRight - Rotate the left face to the front.  
            <br />
            <strong>Keys:</strong>  
            q - Rotate the left column clockwise.  
            w - Rotate the middle column clockwise.  
            e - Rotate the right column clockwise.  
            a - Rotate the left column counter-clockwise.  
            s - Rotate the middle column counter-clockwise.  
            d - Rotate the right column counter-clockwise.  
            r - Rotate the top row clockwise.  
            t - Rotate the top row counter-clockwise.  
            f - Rotate the middle row clockwise.  
            g - Rotate the middle row counter-clockwise.  
            v - Rotate the bottom row clockwise.  
            b - Rotate the bottom row counter-clockwise.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tutorial;
