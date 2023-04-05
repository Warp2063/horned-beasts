function HornedBeast({title, description, imageUrl}) {

    //const title = {props.title};
    //const ImageUrl = props => <div>{props.children}</div>
    //const Description = props => <Tab><Label>Foo</Label></Tab>

    return (
        <div className="horned-beast">
            <h2>{title}</h2>
            <img src={imageUrl} alt={title} title={title} />
            <p>{description}</p>
        </div>
    );
}

export default HornedBeast;