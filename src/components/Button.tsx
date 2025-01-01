
interface ButtonProps {
    name: string;
    className?: string;
}

function Button(props: ButtonProps) {
    return <button className={props.className}>{props.name}</button>;
}

export { Button };