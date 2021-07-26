import './header.scss';

export default function Header(props) {
    return (
        <div className="container__header">
            <h1>{props.title}</h1>
        </div>
    )
}