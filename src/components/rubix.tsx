import { useState, useEffect } from 'react';

interface Grid {
    id: number;
    ClassName: string;
    color: string;
}

interface CubeProps {
    listGrids: Grid[][];
}
type Grids = Grid[][];

function turnClockwise(faces: Grids): Grids {
    return [faces[2], faces[3], faces[1], faces[0], faces[4], faces[5]];
}

function turnCounterClockwise(faces: Grids): Grids {
    console.log('turning counter clockwise');
    return [faces[3], faces[2], faces[0], faces[1], faces[4], faces[5]];
    
}
function turnDown(faces: Grids): Grids {
    return [faces[5], faces[4], faces[2], faces[3], faces[0], faces[1]];
    
}
function turnUp(faces: Grids): Grids {
    return [faces[4], faces[5], faces[2], faces[3], faces[0], faces[1]];
    
}

function rotateTopRowClockwise(faces: Grids): Grids {
    // Save the current colors in the top row of each face.
    const topRowFront = [faces[2][0].color, faces[2][1].color, faces[2][2].color];
    const topRowBack = [faces[3][0].color, faces[3][1].color, faces[3][2].color];
    const topRowLeft = [faces[0][0].color, faces[0][1].color, faces[0][2].color];
    const topRowRight = [faces[1][0].color, faces[1][1].color, faces[1][2].color];
    const topRowTop = [faces[4][6].color, faces[4][7].color, faces[4][8].color];

    // Rotate the top row colors in a clockwise direction.
    // We shift colors from top -> right -> bottom -> left -> top
    faces[2][0].color = topRowLeft[2];   // front top-left <- left top-right
    faces[2][1].color = topRowLeft[1];   // front top-center <- left top-center
    faces[2][2].color = topRowLeft[0];   // front top-right <- left top-left
    
    faces[1][0].color = topRowFront[0];  // right top-left <- front top-left
    faces[1][1].color = topRowFront[1];  // right top-center <- front top-center
    faces[1][2].color = topRowFront[2];  // right top-right <- front top-right

    faces[3][0].color = topRowRight[2];  // back top-left <- right top-right
    faces[3][1].color = topRowRight[1];  // back top-center <- right top-center
    faces[3][2].color = topRowRight[0];  // back top-right <- right top-left

    faces[0][0].color = topRowBack[2];  // left top-left <- back top-right
    faces[0][1].color = topRowBack[1];  // left top-center <- back top-center
    faces[0][2].color = topRowBack[0];  // left top-right <- back top-left

    // Rotate the top face itself clockwise.
    faces[4][6].color = topRowTop[2];   // top top-left <- top top-right
    faces[4][7].color = topRowTop[1];   // top top-center <- top top-center
    faces[4][8].color = topRowTop[0];   // top top-right <- top top-left

    return faces;
}


function rotateTopRowCounterClockwise(faces: Grids): Grids {
    // Extract the top row colors of each face
    const topRowFront = [faces[2][0].color, faces[2][1].color, faces[2][2].color];
    const topRowBack = [faces[3][0].color, faces[3][1].color, faces[3][2].color];
    const topRowLeft = [faces[0][0].color, faces[0][1].color, faces[0][2].color];
    const topRowRight = [faces[1][0].color, faces[1][1].color, faces[1][2].color];
    const topRowTop = [faces[4][2].color, faces[4][5].color, faces[4][8].color];

    // Perform counterclockwise rotation of the top row colors
    faces[2][0].color = topRowRight[0];  // front top-left <- right top-left
    faces[2][1].color = topRowRight[1];  // front top-center <- right top-center
    faces[2][2].color = topRowRight[2];  // front top-right <- right top-right

    faces[1][0].color = topRowBack[2];   // right top-left <- back top-right
    faces[1][1].color = topRowBack[1];   // right top-center <- back top-center
    faces[1][2].color = topRowBack[0];   // right top-right <- back top-left

    faces[3][0].color = topRowLeft[2];   // back top-left <- left top-right
    faces[3][1].color = topRowLeft[1];   // back top-center <- left top-center
    faces[3][2].color = topRowLeft[0];   // back top-right <- left top-left

    faces[0][0].color = topRowFront[0];  // left top-left <- front top-left
    faces[0][1].color = topRowFront[1];  // left top-center <- front top-center
    faces[0][2].color = topRowFront[2];  // left top-right <- front top-right

    // Rotate the top face itself counterclockwise
    faces[4][2].color = topRowTop[0];   // top top-left <- top top-right
    faces[4][5].color = topRowTop[1];   // top top-center <- top top-center
    faces[4][8].color = topRowTop[2];   // top top-right <- top top-left

    return faces;
}

function rotateMiddleRowClockwise(faces: Grids): Grids {
    // Extract the middle row colors of each face
    const middleRowFront = [faces[2][3].color, faces[2][4].color, faces[2][5].color];
    const middleRowBack = [faces[3][3].color, faces[3][4].color, faces[3][5].color];
    const middleRowLeft = [faces[0][3].color, faces[0][4].color, faces[0][5].color];
    const middleRowRight = [faces[1][3].color, faces[1][4].color, faces[1][5].color];

    // Perform clockwise rotation of the middle row colors
    faces[2][3].color = middleRowLeft[2];  // front middle-left <- left middle-right
    faces[2][4].color = middleRowLeft[1];  // front middle-center <- left middle-center
    faces[2][5].color = middleRowLeft[0];  // front middle-right <- left middle-left

    faces[1][3].color = middleRowFront[0];  // right middle-left <- front middle-left
    faces[1][4].color = middleRowFront[1];  // right middle-center <- front middle-center
    faces[1][5].color = middleRowFront[2];  // right middle-right <- front middle-right

    faces[3][3].color = middleRowRight[2];  // back middle-left <- right middle-right
    faces[3][4].color = middleRowRight[1];  // back middle-center <- right middle-center
    faces[3][5].color = middleRowRight[0];  // back middle-right <- right middle-left

    faces[0][3].color = middleRowBack[2];  // left middle-left <- back middle-right
    faces[0][4].color = middleRowBack[1];  // left middle-center <- back middle-center
    faces[0][5].color = middleRowBack[0];  // left middle-right <- back middle-left

    return faces;
}

function rotateMiddleRowCounterClockwise(faces: Grids): Grids {
    // Extract the middle row colors of each face
    const middleRowFront = [faces[2][3].color, faces[2][4].color, faces[2][5].color];
    const middleRowBack = [faces[3][3].color, faces[3][4].color, faces[3][5].color];
    const middleRowLeft = [faces[0][3].color, faces[0][4].color, faces[0][5].color];
    const middleRowRight = [faces[1][3].color, faces[1][4].color, faces[1][5].color];

    // Perform counterclockwise rotation of the middle row colors
    faces[2][3].color = middleRowRight[0];  // front middle-left <- right middle-left
    faces[2][4].color = middleRowRight[1];  // front middle-center <- right middle-center
    faces[2][5].color = middleRowRight[2];  // front middle-right <- right middle-right

    faces[1][3].color = middleRowBack[2];   // right middle-left <- back middle-right
    faces[1][4].color = middleRowBack[1];   // right middle-center <- back middle-center
    faces[1][5].color = middleRowBack[0];   // right middle-right <- back middle-left

    faces[3][3].color = middleRowLeft[2];   // back middle-left <- left middle-right
    faces[3][4].color = middleRowLeft[1];   // back middle-center <- left middle-center
    faces[3][5].color = middleRowLeft[0];   // back middle-right <- left middle-left

    faces[0][3].color = middleRowFront[2];  // left middle-left <- front middle-right
    faces[0][4].color = middleRowFront[1];  // left middle-center <- front middle-center
    faces[0][5].color = middleRowFront[0];  // left middle-right <- front middle-left

    return faces;
}

function rotateBottomRowClockwise(faces: Grids): Grids {
    // Extract the bottom row colors of each face
    const bottomRowFront = [faces[0][6].color, faces[0][7].color, faces[0][8].color];
    const bottomRowBack = [faces[1][6].color, faces[1][7].color, faces[1][8].color];
    const bottomRowLeft = [faces[3][6].color, faces[3][7].color, faces[3][8].color];
    const bottomRowRight = [faces[2][6].color, faces[2][7].color, faces[2][8].color];
    const bottomRowBottom = [faces[5][6].color, faces[5][7].color, faces[5][8].color];

    // Perform clockwise rotation of the bottom row colors
    faces[0][6].color = bottomRowLeft[2];   // front bottom-left <- left bottom-right
    faces[0][7].color = bottomRowLeft[1];   // front bottom-center <- left bottom-center
    faces[0][8].color = bottomRowLeft[0];   // front bottom-right <- left bottom-left

    faces[2][6].color = bottomRowFront[0];  // right bottom-left <- front bottom-left
    faces[2][7].color = bottomRowFront[1];  // right bottom-center <- front bottom-center
    faces[2][8].color = bottomRowFront[2];  // right bottom-right <- front bottom-right

    faces[1][6].color = bottomRowRight[2];  // back bottom-left <- right bottom-right
    faces[1][7].color = bottomRowRight[1];  // back bottom-center <- right bottom-center
    faces[1][8].color = bottomRowRight[0];  // back bottom-right <- right bottom-left

    faces[3][6].color = bottomRowBack[0];   // left bottom-left <- back bottom-left
    faces[3][7].color = bottomRowBack[1];   // left bottom-center <- back bottom-center
    faces[3][8].color = bottomRowBack[2];   // left bottom-right <- back bottom-right

    // Rotate the bottom face clockwise
    faces[5][6].color = bottomRowBottom[0];  // bottom bottom-left <- bottom bottom-left
    faces[5][7].color = bottomRowBottom[1];  // bottom bottom-center <- bottom bottom-center
    faces[5][8].color = bottomRowBottom[2];  // bottom bottom-right <- bottom bottom-right

    return faces;
}



function rotateBottomRowCounterClockwise(faces: Grids): Grids {
    // Extract the bottom row colors of each face
    const bottomRowFront = [faces[0][6].color, faces[0][7].color, faces[0][8].color];
    const bottomRowBack = [faces[1][6].color, faces[1][7].color, faces[1][8].color];
    const bottomRowLeft = [faces[3][6].color, faces[3][7].color, faces[3][8].color];
    const bottomRowRight = [faces[2][6].color, faces[2][7].color, faces[2][8].color];
    const bottomRowBottom = [faces[5][6].color, faces[5][7].color, faces[5][8].color];

    // Perform counterclockwise rotation of the bottom row colors
    faces[0][6].color = bottomRowRight[0];  // front bottom-left <- right bottom-left
    faces[0][7].color = bottomRowRight[1];  // front bottom-center <- right bottom-center
    faces[0][8].color = bottomRowRight[2];  // front bottom-right <- right bottom-right

    faces[2][6].color = bottomRowBack[2];   // right bottom-left <- back bottom-right
    faces[2][7].color = bottomRowBack[1];   // right bottom-center <- back bottom-center
    faces[2][8].color = bottomRowBack[0];   // right bottom-right <- back bottom-left

    faces[1][6].color = bottomRowLeft[0];   // back bottom-left <- left bottom-left
    faces[1][7].color = bottomRowLeft[1];   // back bottom-center <- left bottom-center
    faces[1][8].color = bottomRowLeft[2];   // back bottom-right <- left bottom-right

    faces[3][6].color = bottomRowFront[2];  // left bottom-left <- front bottom-right
    faces[3][7].color = bottomRowFront[1];  // left bottom-center <- front bottom-center
    faces[3][8].color = bottomRowFront[0];  // left bottom-right <- front bottom-left

    // Rotate the bottom face counterclockwise
    faces[5][6].color = bottomRowBottom[2];  // bottom bottom-left <- bottom bottom-right
    faces[5][7].color = bottomRowBottom[1];  // bottom bottom-center <- bottom bottom-center
    faces[5][8].color = bottomRowBottom[0];  // bottom bottom-right <- bottom bottom-left

    return faces;
}

function rotateRightColumnClockwise(faces: Grids): Grids {
    // Extract the right column colors of each face
    const rightColumnFront = [faces[2][2].color, faces[2][5].color, faces[2][8].color];
    const rightColumnBack = [faces[3][2].color, faces[3][5].color, faces[3][8].color];
    const rightColumnLeft = [faces[0][2].color, faces[0][5].color, faces[0][8].color];
    const rightColumnRight = [faces[1][2].color, faces[1][5].color, faces[1][8].color];

    // Perform clockwise rotation of the right column colors
    faces[2][2].color = rightColumnRight[0];  // front right-top <- right right-top
    faces[2][5].color = rightColumnRight[1];  // front right-center <- right right-center
    faces[2][8].color = rightColumnRight[2];  // front right-bottom <- right right-bottom

    faces[1][2].color = rightColumnFront[0];  // right right-top <- front right-top
    faces[1][5].color = rightColumnFront[1];  // right right-center <- front right-center
    faces[1][8].color = rightColumnFront[2];  // right right-bottom <- front right-bottom

    faces[3][2].color = rightColumnLeft[0];   // back right-top <- left right-top
    faces[3][5].color = rightColumnLeft[1];   // back right-center <- left right-center
    faces[3][8].color = rightColumnLeft[2];   // back right-bottom <- left right-bottom

    faces[0][2].color = rightColumnBack[0];   // left right-top <- back right-top
    faces[0][5].color = rightColumnBack[1];   // left right-center <- back right-center
    faces[0][8].color = rightColumnBack[2];   // left right-bottom <- back right-bottom

    return faces;
}

function rotateRightColumnCounterClockwise(faces: Grids): Grids {
    // Extract the right column colors of each face
    const rightColumnFront = [faces[2][2].color, faces[2][5].color, faces[2][8].color];
    const rightColumnBack = [faces[3][2].color, faces[3][5].color, faces[3][8].color];
    const rightColumnLeft = [faces[0][2].color, faces[0][5].color, faces[0][8].color];
    const rightColumnRight = [faces[1][2].color, faces[1][5].color, faces[1][8].color];

    // Perform counterclockwise rotation of the right column colors
    faces[2][2].color = rightColumnLeft[0];   // front right-top <- left right-top
    faces[2][5].color = rightColumnLeft[1];   // front right-center <- left right-center
    faces[2][8].color = rightColumnLeft[2];   // front right-bottom <- left right-bottom

    faces[1][2].color = rightColumnBack[0];   // right right-top <- back right-top
    faces[1][5].color = rightColumnBack[1];   // right right-center <- back right-center
    faces[1][8].color = rightColumnBack[2];   // right right-bottom <- back right-bottom

    faces[3][2].color = rightColumnFront[0];  // back right-top <- front right-top
    faces[3][5].color = rightColumnFront[1];  // back right-center <- front right-center
    faces[3][8].color = rightColumnFront[2];  // back right-bottom <- front right-bottom

    faces[0][2].color = rightColumnRight[0];  // left right-top <- right right-top
    faces[0][5].color = rightColumnRight[1];  // left right-center <- right right-center
    faces[0][8].color = rightColumnRight[2];  // left right-bottom <- right right-bottom

    return faces;
}

function rotateMiddleColumnClockwise(faces: Grids): Grids {
    // Extract the middle column colors of each face
    const middleColumnFront = [faces[2][1].color, faces[2][4].color, faces[2][7].color];
    const middleColumnBack = [faces[3][1].color, faces[3][4].color, faces[3][7].color];
    const middleColumnLeft = [faces[0][1].color, faces[0][4].color, faces[0][7].color];
    const middleColumnRight = [faces[1][1].color, faces[1][4].color, faces[1][7].color];

    // Perform clockwise rotation of the middle column colors
    faces[2][1].color = middleColumnRight[0];  // front middle-top <- right middle-top
    faces[2][4].color = middleColumnRight[1];  // front middle-center <- right middle-center
    faces[2][7].color = middleColumnRight[2];  // front middle-bottom <- right middle-bottom

    faces[1][1].color = middleColumnFront[0];  // right middle-top <- front middle-top
    faces[1][4].color = middleColumnFront[1];  // right middle-center <- front middle-center
    faces[1][7].color = middleColumnFront[2];  // right middle-bottom <- front middle-bottom

    faces[3][1].color = middleColumnLeft[0];   // back middle-top <- left middle-top
    faces[3][4].color = middleColumnLeft[1];   // back middle-center <- left middle-center
    faces[3][7].color = middleColumnLeft[2];   // back middle-bottom <- left middle-bottom

    faces[0][1].color = middleColumnBack[0];   // left middle-top <- back middle-top
    faces[0][4].color = middleColumnBack[1];   // left middle-center <- back middle-center
    faces[0][7].color = middleColumnBack[2];   // left middle-bottom <- back middle-bottom

    return faces;
}

function rotateMiddleColumnCounterClockwise(faces: Grids): Grids {
    // Extract the middle column colors of each face
    const middleColumnFront = [faces[2][1].color, faces[2][4].color, faces[2][7].color];
    const middleColumnBack = [faces[3][1].color, faces[3][4].color, faces[3][7].color];
    const middleColumnLeft = [faces[0][1].color, faces[0][4].color, faces[0][7].color];
    const middleColumnRight = [faces[1][1].color, faces[1][4].color, faces[1][7].color];

    // Perform counterclockwise rotation of the middle column colors
    faces[2][1].color = middleColumnLeft[0];   // front middle-top <- left middle-top
    faces[2][4].color = middleColumnLeft[1];   // front middle-center <- left middle-center
    faces[2][7].color = middleColumnLeft[2];   // front middle-bottom <- left middle-bottom

    faces[1][1].color = middleColumnBack[0];   // right middle-top <- back middle-top
    faces[1][4].color = middleColumnBack[1];   // right middle-center <- back middle-center
    faces[1][7].color = middleColumnBack[2];   // right middle-bottom <- back middle-bottom

    faces[3][1].color = middleColumnFront[0];  // back middle-top <- front middle-top
    faces[3][4].color = middleColumnFront[1];  // back middle-center <- front middle-center
    faces[3][7].color = middleColumnFront[2];  // back middle-bottom <- front middle-bottom

    faces[0][1].color = middleColumnRight[0];  // left middle-top <- right middle-top
    faces[0][4].color = middleColumnRight[1];  // left middle-center <- right middle-center
    faces[0][7].color = middleColumnRight[2];  // left middle-bottom <- right middle-bottom

    return faces;
}

function rotateLeftColumnClockwise(faces: Grids): Grids {
    // Extract the left column colors of each face
    const leftColumnFront = [faces[2][0].color, faces[2][3].color, faces[2][6].color];
    const leftColumnBack = [faces[3][0].color, faces[3][3].color, faces[3][6].color];
    const leftColumnLeft = [faces[0][0].color, faces[0][3].color, faces[0][6].color];
    const leftColumnRight = [faces[1][0].color, faces[1][3].color, faces[1][6].color];

    // Perform clockwise rotation of the left column colors
    faces[2][0].color = leftColumnRight[0];  // front left-top <- right left-top
    faces[2][3].color = leftColumnRight[1];  // front left-center <- right left-center
    faces[2][6].color = leftColumnRight[2];  // front left-bottom <- right left-bottom

    faces[1][0].color = leftColumnFront[0];  // right left-top <- front left-top
    faces[1][3].color = leftColumnFront[1];  // right left-center <- front left-center
    faces[1][6].color = leftColumnFront[2];  // right left-bottom <- front left-bottom

    faces[3][0].color = leftColumnLeft[0];   // back left-top <- left left-top
    faces[3][3].color = leftColumnLeft[1];   // back left-center <- left left-center
    faces[3][6].color = leftColumnLeft[2];   // back left-bottom <- left left-bottom

    faces[0][0].color = leftColumnBack[0];   // left left-top <- back left-top
    faces[0][3].color = leftColumnBack[1];   // left left-center <- back left-center
    faces[0][6].color = leftColumnBack[2];   // left left-bottom <- back left-bottom

    return faces;
}

function rotateLeftColumnCounterClockwise(faces: Grids): Grids {
    // Extract the left column colors of each face
    const leftColumnFront = [faces[2][0].color, faces[2][3].color, faces[2][6].color];
    const leftColumnBack = [faces[3][0].color, faces[3][3].color, faces[3][6].color];
    const leftColumnLeft = [faces[0][0].color, faces[0][3].color, faces[0][6].color];
    const leftColumnRight = [faces[1][0].color, faces[1][3].color, faces[1][6].color];

    // Perform counterclockwise rotation of the left column colors
    faces[2][0].color = leftColumnLeft[0];   // front left-top <- left left-top
    faces[2][3].color = leftColumnLeft[1];   // front left-center <- left left-center
    faces[2][6].color = leftColumnLeft[2];   // front left-bottom <- left left-bottom

    faces[1][0].color = leftColumnFront[0];  // right left-top <- front left-top
    faces[1][3].color = leftColumnFront[1];  // right left-center <- front left-center
    faces[1][6].color = leftColumnFront[2];  // right left-bottom <- front left-bottom

    faces[3][0].color = leftColumnRight[0];  // back left-top <- right left-top
    faces[3][3].color = leftColumnRight[1];  // back left-center <- right left-center
    faces[3][6].color = leftColumnRight[2];  // back left-bottom <- right left-bottom

    faces[0][0].color = leftColumnBack[0];   // left left-top <- back left-top
    faces[0][3].color = leftColumnBack[1];   // left left-center <- back left-center
    faces[0][6].color = leftColumnBack[2];   // left left-bottom <- back left-bottom

    return faces;
}


function Rubix(props: CubeProps) {
    const [FrontFace, setFrontFace] = useState(props.listGrids[0]);
    const [BackFace, setBackFace] = useState(props.listGrids[1]);
    const [RightFace, setRightFace] = useState(props.listGrids[2]);
    const [LeftFace, setLeftFace] = useState(props.listGrids[3]);
    const [TopFace, setTopFace] = useState(props.listGrids[4]);
    const [BottomFace, setBottomFace] = useState(props.listGrids[5]);

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.code === 'ArrowRight') {
            let [newFront, newBack, newRight, newLeft, newTop, ] = turnClockwise([FrontFace, BackFace, RightFace, LeftFace, TopFace, BottomFace]);
            setFrontFace(newFront);
            setBackFace(newBack);
            setRightFace(newRight);
            setLeftFace(newLeft);
            setTopFace(newTop);
        } else if (event.code === 'ArrowLeft') {
            let [newFront, newBack, newRight, newLeft, newTop, newBottom] = turnCounterClockwise([FrontFace, BackFace, RightFace, LeftFace, TopFace, BottomFace]);
            setFrontFace(newFront);
            setBackFace(newBack);
            setRightFace(newRight);
            setLeftFace(newLeft);
            setTopFace(newTop);
            setBottomFace(newBottom);
        } else if (event.code === 'ArrowUp') {
            let [newFront, newBack, newRight, newLeft, newTop, newBottom] = turnUp([FrontFace, BackFace, RightFace, LeftFace, TopFace, BottomFace]);
            setFrontFace(newFront);
            setBackFace(newBack);
            setTopFace(newTop);
            setBottomFace(newBottom);
            setLeftFace(newLeft);
            setRightFace(newRight);
            console.log('up');
        } else if (event.code === 'ArrowDown') {
            let [newFront, newBack, newRight, newLeft, newTop, newBottom] = turnDown([FrontFace, BackFace, RightFace, LeftFace, TopFace, BottomFace]);
            setFrontFace(newFront);
            setBackFace(newBack);
            setTopFace(newTop);
            setBottomFace(newBottom);
            setLeftFace(newLeft);
            setRightFace(newRight);
        } else if (event.key === 'q') {
            // Rotate left column clockwise
            console.log(FrontFace, BackFace, RightFace, LeftFace, TopFace, BottomFace);
            let [newFront, newBack, newRight, newLeft, newTop, newBottom] = rotateLeftColumnClockwise([FrontFace, BackFace, RightFace, LeftFace, TopFace, BottomFace]);
            setFrontFace(newFront);
            setBackFace(newBack);
            setLeftFace(newLeft);
            setRightFace(newRight);
            setTopFace(newTop);
            setBottomFace(newBottom);
            console.log('left column clockwise');
            console.log(FrontFace, BackFace, RightFace, LeftFace, TopFace, BottomFace);
        } else if (event.key === 'w') {
            // Rotate middle column clockwise
            let [newFront, newBack, newRight, newLeft, newTop, newBottom] = rotateMiddleColumnClockwise([FrontFace, BackFace, RightFace, LeftFace, TopFace, BottomFace]);
            setFrontFace(newFront);
            setBackFace(newBack);
            setLeftFace(newLeft);
            setRightFace(newRight);
            setTopFace(newTop);
            setBottomFace(newBottom);
        } else if (event.key === 'e') {
            // Rotate right column clockwise
            let [newFront, newBack, newRight, newLeft, newTop, newBottom] = rotateRightColumnClockwise([FrontFace, BackFace, RightFace, LeftFace, TopFace, BottomFace]);
            setFrontFace(newFront);
            setBackFace(newBack);
            setLeftFace(newLeft);
            setRightFace(newRight);
            setTopFace(newTop);
            setBottomFace(newBottom);
        } else if (event.key === 'a') {
            // Rotate left column counter clockwise
            let [newFront, newBack, newRight, newLeft, newTop, newBottom] = rotateLeftColumnCounterClockwise([FrontFace, BackFace, RightFace, LeftFace, TopFace, BottomFace]);
            setFrontFace(newFront);
            setBackFace(newBack);
            setLeftFace(newLeft);
            setRightFace(newRight);
            setTopFace(newTop);
            setBottomFace(newBottom);
        } else if (event.key === 's') {
            // Rotate middle column counter clockwise
            let [newFront, newBack, newRight, newLeft, newTop, newBottom] = rotateMiddleColumnCounterClockwise([FrontFace, BackFace, RightFace, LeftFace, TopFace, BottomFace]);
            setFrontFace(newFront);
            setBackFace(newBack);
            setLeftFace(newLeft);
            setRightFace(newRight);
            setTopFace(newTop);
            setBottomFace(newBottom);
        } else if (event.key === 'd') {
            // Rotate right column counter clockwise
            let [newFront, newBack, newRight, newLeft, newTop, newBottom] = rotateRightColumnCounterClockwise([FrontFace, BackFace, RightFace, LeftFace, TopFace, BottomFace]);
            setFrontFace(newFront);
            setBackFace(newBack);
            setLeftFace(newLeft);
            setRightFace(newRight);
            setTopFace(newTop);
            setBottomFace(newBottom);
        } else if (event.key === 'r') {
            // Rotate top row clockwise
            let [newFront, newBack, newRight, newLeft, newTop, newBottom] = rotateTopRowClockwise([FrontFace, BackFace, RightFace, LeftFace, TopFace, BottomFace]);
            setFrontFace(newFront);
            setBackFace(newBack);
            setTopFace(newTop);
            setBottomFace(newBottom);
            setLeftFace(newLeft);
            setRightFace(newRight);
        } else if (event.key === 'f') {
            // Rotate middle row clockwise
            let [newFront, newBack, newRight, newLeft, , ] = rotateMiddleRowClockwise([FrontFace, BackFace, RightFace, LeftFace, TopFace, BottomFace]);
            setFrontFace(newFront);
            setBackFace(newBack);
            setLeftFace(newLeft);
            setRightFace(newRight);
        } else if (event.key === 'v') {
            // Rotate bottom row clockwise
            let [newFront, newBack, newRight, newLeft, newTop, newBottom] = rotateBottomRowClockwise([FrontFace, BackFace, RightFace, LeftFace, TopFace, BottomFace]);
            setFrontFace(newFront);
            setBackFace(newBack);
            setBottomFace(newBottom);
            setTopFace(newTop);
            setLeftFace(newLeft);
            setRightFace(newRight);
        } else if (event.key === 't') {
            // Rotate top row counter clockwise
            let [newFront, newBack, newRight, newLeft, newTop, newBottom] = rotateTopRowCounterClockwise([FrontFace, BackFace, RightFace, LeftFace, TopFace, BottomFace]);
            setFrontFace(newFront);
            setBackFace(newBack);
            setTopFace(newTop);
            setBottomFace(newBottom);
            setLeftFace(newLeft);
            setRightFace(newRight);
            console.log('top row counter clockwise');
        } else if (event.key === 'g') {
            // Rotate middle row counter clockwise
            let [newFront, newBack, newRight, newLeft, , ] = rotateMiddleRowCounterClockwise([FrontFace, BackFace, RightFace, LeftFace, TopFace, BottomFace]);
            setFrontFace(newFront);
            setBackFace(newBack);
            setLeftFace(newLeft);
            setRightFace(newRight);
        } else if (event.key === 'b') {
            // Rotate bottom row counter clockwise
            let [newFront, newBack, newRight, newLeft, , newBottom] = rotateBottomRowCounterClockwise([FrontFace, BackFace, RightFace, LeftFace, TopFace, BottomFace]);
            setFrontFace(newFront);
            setBackFace(newBack);
            setBottomFace(newBottom);
            setLeftFace(newLeft);
            setRightFace(newRight);
        }
    }

    const cubeShuffle = () => {
        // Perform 100 random moves on the cube
        let faces = [FrontFace, BackFace, RightFace, LeftFace, TopFace, BottomFace];
        for (let i = 0; i < 100; i++) {
            const randomMove = Math.floor(Math.random() * 12);
            if (randomMove === 0) {
                faces = rotateTopRowClockwise(faces);
            } else if (randomMove === 1) {
                faces = rotateTopRowCounterClockwise(faces);
            } else if (randomMove === 2) {
                faces = rotateMiddleRowClockwise(faces);
            } else if (randomMove === 3) {
                faces = rotateMiddleRowCounterClockwise(faces);
            } else if (randomMove === 4) {
                faces = rotateBottomRowClockwise(faces);
            } else if (randomMove === 5) {
                faces = rotateBottomRowCounterClockwise(faces);
            } else if (randomMove === 6) {
                faces = rotateRightColumnClockwise(faces);
            } else if (randomMove === 7) {
                faces = rotateRightColumnCounterClockwise(faces);
            } else if (randomMove === 8) {
                faces = rotateMiddleColumnClockwise(faces);
            } else if (randomMove === 9) {
                faces = rotateMiddleColumnCounterClockwise(faces);
            } else if (randomMove === 10) {
                faces = rotateLeftColumnClockwise(faces);
            } else if (randomMove === 11) {
                faces = rotateLeftColumnCounterClockwise(faces);
            }
            setFrontFace(faces[0]);
            setBackFace(faces[1]);
            setRightFace(faces[2]);
            setLeftFace(faces[3]);
            setTopFace(faces[4]);
            setBottomFace(faces[5]);
        }
    }

    const cubeSolver = () => {
        const goalState = [
            ['white', 'white', 'white', 'white', 'white', 'white'], // Front face
            ['yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow'], // Back face
            ['blue', 'blue', 'blue', 'blue', 'blue', 'blue'], // Right face
            ['green', 'green', 'green', 'green', 'green', 'green'], // Left face
            ['red', 'red', 'red', 'red', 'red', 'red'], // Top face
            ['orange', 'orange', 'orange', 'orange', 'orange', 'orange'] // Bottom face
        ];
    
        let faces = [FrontFace, BackFace, RightFace, LeftFace, TopFace, BottomFace];
        let solution: string[] = [];
        let visited = new Set<string>();
    
        type QueueItem = [Grids, string[]];
        let queue: QueueItem[] = [[faces, []]];
    
        while (queue.length > 0) {
            let item = queue.shift();
            if (!item) continue;
            let [currentState, moves] = item;
    
            // Convert current state to a string key to use in the visited set
            let stateKey = JSON.stringify(currentState);
            if (visited.has(stateKey)) continue; // Skip if we've already visited this state
            visited.add(stateKey);
    
            // Check if the current state is the goal state
            if (JSON.stringify(currentState) === JSON.stringify(goalState)) {
                solution = moves;
                break;
            }
    
            // Try all possible moves (12 possible moves)
            const possibleMoves = [
                { move: 'topRowClockwise', rotate: rotateTopRowClockwise },
                { move: 'topRowCounterClockwise', rotate: rotateTopRowCounterClockwise },
                { move: 'middleRowClockwise', rotate: rotateMiddleRowClockwise },
                { move: 'middleRowCounterClockwise', rotate: rotateMiddleRowCounterClockwise },
                { move: 'bottomRowClockwise', rotate: rotateBottomRowClockwise },
                { move: 'bottomRowCounterClockwise', rotate: rotateBottomRowCounterClockwise },
                { move: 'rightColumnClockwise', rotate: rotateRightColumnClockwise },
                { move: 'rightColumnCounterClockwise', rotate: rotateRightColumnCounterClockwise },
                { move: 'middleColumnClockwise', rotate: rotateMiddleColumnClockwise },
                { move: 'middleColumnCounterClockwise', rotate: rotateMiddleColumnCounterClockwise },
                { move: 'leftColumnClockwise', rotate: rotateLeftColumnClockwise },
                { move: 'leftColumnCounterClockwise', rotate: rotateLeftColumnCounterClockwise },
            ];
    
            // Explore each possible move
            for (let { move, rotate } of possibleMoves) {
                let newState = rotate(currentState);
                queue.push([newState, [...moves, move]]);
            }
        }
    
        // Now iterate through the solution and apply each move to the cube's faces
        for (let move of solution) {
            if (move === 'topRowClockwise') {
                faces = rotateTopRowClockwise(faces);
            } else if (move === 'topRowCounterClockwise') {
                faces = rotateTopRowCounterClockwise(faces);
            } else if (move === 'middleRowClockwise') {
                faces = rotateMiddleRowClockwise(faces);
            } else if (move === 'middleRowCounterClockwise') {
                faces = rotateMiddleRowCounterClockwise(faces);
            } else if (move === 'bottomRowClockwise') {
                faces = rotateBottomRowClockwise(faces);
            } else if (move === 'bottomRowCounterClockwise') {
                faces = rotateBottomRowCounterClockwise(faces);
            } else if (move === 'rightColumnClockwise') {
                faces = rotateRightColumnClockwise(faces);
            } else if (move === 'rightColumnCounterClockwise') {
                faces = rotateRightColumnCounterClockwise(faces);
            } else if (move === 'middleColumnClockwise') {
                faces = rotateMiddleColumnClockwise(faces);
            } else if (move === 'middleColumnCounterClockwise') {
                faces = rotateMiddleColumnCounterClockwise(faces);
            } else if (move === 'leftColumnClockwise') {
                faces = rotateLeftColumnClockwise(faces);
            } else if (move === 'leftColumnCounterClockwise') {
                faces = rotateLeftColumnCounterClockwise(faces);
            }
    
            // After each move, update the state of the cube's faces
            setFrontFace(faces[0]);
            setBackFace(faces[1]);
            setRightFace(faces[2]);
            setLeftFace(faces[3]);
            setTopFace(faces[4]);
            setBottomFace(faces[5]);
        }
    };
    
    

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [FrontFace, BackFace, RightFace, LeftFace, TopFace, BottomFace]);

    return (
        <div className='FlattenedRubixContainer'>
            <button className="RubixButton" onClick={cubeShuffle}>Shuffle</button>
            <button className="RubixButton" onClick={cubeSolver}>Solve</button>
            <br />
            <br />
            {FrontFace.map((grid) => (
                <div
                    key={grid.id}
                    className={grid.ClassName}
                    style={{ backgroundColor: grid.color }}
                />
            ))}
        </div>
    );
}

export { Rubix };
