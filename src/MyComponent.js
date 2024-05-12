import './MyComponent.css'

export  default function MyComponent(props){
    return (
        <div className="component-list">
                <img className="component-image" src={props.img} alt="hinh"/>
                <p className="component-title">{props.title}</p>
                <a className="component-link" href={props.links}>Nhấn vào đây nè</a>
        </div>

    );
}