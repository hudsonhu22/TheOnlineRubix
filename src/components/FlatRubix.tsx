import { Rubix } from "./rubix";

interface FlatRubixProps {
  FrontRubix: { id: number; ClassName: string; color: string }[];
  BackRubix: { id: number; ClassName: string; color: string }[];
  LeftRubix: { id: number; ClassName: string; color: string }[];
  RightRubix: { id: number; ClassName: string; color: string }[];
  TopRubix: { id: number; ClassName: string; color: string }[];
  BottomRubix: { id: number; ClassName: string; color: string }[];
}

function FlatRubix(props: FlatRubixProps) {
  return (
    <div className="FlattenedRubixContainer">
      <Rubix name="Front" className="rubixContainer" grids={props.FrontRubix} />
      <Rubix name="Back" className="rubixContainer" grids={props.BackRubix} />
      <Rubix name="Left" className="rubixContainer" grids={props.LeftRubix} />
      <Rubix name="Right" className="rubixContainer" grids={props.RightRubix} />
      <Rubix name="Top" className="rubixContainer" grids={props.TopRubix} />
      <Rubix name="Bottom" className="rubixContainer" grids={props.BottomRubix} />
    </div>
  );
}

export { FlatRubix };
