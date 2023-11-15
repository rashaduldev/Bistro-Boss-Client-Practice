import Popularmenu from "../../Components/Popularmenu";
import Banner from "./Banner";
import Catagory from "./Catagory";
import Featured from "./Featured";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <Catagory></Catagory>
        <Popularmenu></Popularmenu>
        <Featured></Featured>
        <Testimonials></Testimonials>
        </div>
    );
};

export default Home;