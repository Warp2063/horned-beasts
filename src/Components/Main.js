import HornedBeast from "./HornedBeast";
import beasts from "../beasts.json";


function Main({presentModal}) {

    //<HornedBeast title="Smaug" imageUrl="https://study.com/cimages/multimages/16/smaug_illustration.jpg" description="The dragon from The Hobbit." />
    //<HornedBeast title="Narwhal" imageUrl="https://i.kym-cdn.com/photos/images/newsfeed/000/284/307/40c.png" description="They keep Cthulu from eating ye!" />


    // const rendBeasts = [];
    // for (let i = 0; i < beasts.length; i++) {
    //     const {_id, title, image_url, description} = beasts[i];
    //     rendBeasts.push(<HornedBeast id={_id} title={title} imageUrl={image_url} description={description} />);
    // }

    return (
        <main>
            <h2>And now, the beasties.</h2>
            <div className="beasts-container">
                {beasts.map((beast) => {
                        return <HornedBeast beast={beast} presentModal={presentModal} />
                    })}
            </div>     
        </main>
    );
}

export default Main;