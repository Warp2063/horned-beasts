import HornedBeast from "./HornedBeast";
import beasts from "../beasts.json";

// const beasts = [{
//     "_id": 1,
//     "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
//     "title": "UniWhal",
//     "description": "A unicorn and a narwhal nuzzling their horns",
//     "keyword": "narwhal",
//     "horns": 1
//   },

//   {
//     "_id": 2,
//     "image_url": "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
//     "title": "Rhino Family",
//     "description": "Parent rhino with two babies",
//     "keyword": "rhino",
//     "horns": 2
//   },

//   {
//     "_id": 3,
//     "image_url": "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
//     "title": "Unicorn Head",
//     "description": "Someone wearing a very silly unicorn head mask",
//     "keyword": "unicorn",
//     "horns": 1
// }];

function Main() {

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
            <div className="beast-box">
                {beasts.map((beast) => {
                        return <HornedBeast id={beast._id} title={beast.title} imageUrl={beast.image_url} description={beast.description} />
                    })}
            </div>     
        </main>
    );
}

export default Main;