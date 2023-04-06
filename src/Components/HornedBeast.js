import {useState} from "react";

function HornedBeast({title, description, imageUrl}) {

    //const title = {props.title};
    //const ImageUrl = props => <div>{props.children}</div>
    //const Description = props => <Tab><Label>Foo</Label></Tab>

    const [votes, setVotes] = useState(0);

    function clickHandler() {
        setVotes(votes + 1);
    }

    return (
        <div className="horned-beast">
            <h2>{title}</h2>
            <img onClick={clickHandler} src={imageUrl} alt={title} title={title} />
            <p>{description}</p>
            <p>Votes: {votes}</p>
        </div>
    );
}

export default HornedBeast;