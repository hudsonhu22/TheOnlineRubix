
import './App.css';
import { Rubix } from './components/rubix';
import { NavBar } from './components/NavBar';
import Timer from './components/Timer';

function Solve() {

  const gridsForCube = [
    [ // Front face grid
      { id: 1, ClassName: "topLeft", color: "White" },
      { id: 2, ClassName: "topMiddle", color: "white" },
      { id: 3, ClassName: "topRight", color: "white" },
      { id: 4, ClassName: "middleLeft", color: "white" },
      { id: 5, ClassName: "middleMiddle", color: "white" },
      { id: 6, ClassName: "middleRight", color: "white" },
      { id: 7, ClassName: "bottomLeft", color: "white" },
      { id: 8, ClassName: "bottomMiddle", color: "white" },
      { id: 9, ClassName: "bottomRight", color: "white" },
    ],
    [ // Back face grid
      { id: 1, ClassName: "topLeft", color: "green" },
      { id: 2, ClassName: "topMiddle", color: "green" },
      { id: 3, ClassName: "topRight", color: "green" },
      { id: 4, ClassName: "middleLeft", color: "green" },
      { id: 5, ClassName: "middleMiddle", color: "green" },
      { id: 6, ClassName: "middleRight", color: "green" },
      { id: 7, ClassName: "bottomLeft", color: "green" },
      { id: 8, ClassName: "bottomMiddle", color: "green" },
      { id: 9, ClassName: "bottomRight", color: "green" },
    ],
    [ // Right face grid
      { id: 1, ClassName: "topLeft", color: "blue" },
      { id: 2, ClassName: "topMiddle", color: "blue" },
      { id: 3, ClassName: "topRight", color: "blue" },
      { id: 4, ClassName: "middleLeft", color: "blue" },
      { id: 5, ClassName: "middleMiddle", color: "blue" },
      { id: 6, ClassName: "middleRight", color: "blue" },
      { id: 7, ClassName: "bottomLeft", color: "blue" },
      { id: 8, ClassName: "bottomMiddle", color: "blue" },
      { id: 9, ClassName: "bottomRight", color: "blue" },
    ],
    [ // Left face grid
      { id: 1, ClassName: "topLeft", color: "red" },
      { id: 2, ClassName: "topMiddle", color: "red" },
      { id: 3, ClassName: "topRight", color: "red" },
      { id: 4, ClassName: "middleLeft", color: "red" },
      { id: 5, ClassName: "middleMiddle", color: "red" },
      { id: 6, ClassName: "middleRight", color: "red" },
      { id: 7, ClassName: "bottomLeft", color: "red" },
      { id: 8, ClassName: "bottomMiddle", color: "red" },
      { id: 9, ClassName: "bottomRight", color: "red" },
    ],
    [ // Top face grid
      { id: 1, ClassName: "topLeft", color: "orange" },
      { id: 2, ClassName: "topMiddle", color: "orange" },
      { id: 3, ClassName: "topRight", color: "orange" },
      { id: 4, ClassName: "middleLeft", color: "orange" },
      { id: 5, ClassName: "middleMiddle", color: "orange" },
      { id: 6, ClassName: "middleRight", color: "orange" },
      { id: 7, ClassName: "bottomLeft", color: "orange" },
      { id: 8, ClassName: "bottomMiddle", color: "orange" },
      { id: 9, ClassName: "bottomRight", color: "orange" },
    ],
    [ // Bottom face grid
      { id: 1, ClassName: "topLeft", color: "gray" },
      { id: 2, ClassName: "topMiddle", color: "gray" },
      { id: 3, ClassName: "topRight", color: "gray" },
      { id: 4, ClassName: "middleLeft", color: "gray" },
      { id: 5, ClassName: "middleMiddle", color: "gray" },
      { id: 6, ClassName: "middleRight", color: "gray" },
      { id: 7, ClassName: "bottomLeft", color: "gray" },
      { id: 8, ClassName: "bottomMiddle", color: "gray" },
      { id: 9, ClassName: "bottomRight", color: "gray" },
    ],
  ];


  return (
    <div>
      <NavBar />
      <Rubix listGrids={gridsForCube} />
      <Timer />
      
    </div>
  );
}

export default Solve;
