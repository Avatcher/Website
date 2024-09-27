
import "./Storyline.css"

function Storyline(props) {
    return (
        <div className="Storyline" style={props.style}>
            {props.children}
        </div>
    )
}

export default Storyline;
