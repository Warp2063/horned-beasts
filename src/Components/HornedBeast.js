import {useState} from "react";

//function HornedBeast({title, description, imageUrl}) {
function HornedBeast({beast, presentModal}) {

    //const title = {props.title};
    //const ImageUrl = props => <div>{props.children}</div>
    //const Description = props => <Tab><Label>Foo</Label></Tab>

    const [votes, setVotes] = useState(0);

    function voteHandler() {
        setVotes(votes + 1);
    }

    return (
        <div className="horned-beast">
            <h2>{beast.title}</h2>
            <img src={beast.image_url}
                alt={beast.title}
                title={beast.title}
                onClick={() => {presentModal(beast)}}
            />
            <div>{beast.description}</div>
            <div className="votes" onClick={voteHandler}>Votes: 💖{votes}</div>
        </div>
    );
}

export default HornedBeast;