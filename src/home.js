import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import BlogList from "./blogList";

const Home = () => {
    const {data, isPending} = useFetch('http://localhost:8000/blogs')
    return (  
        <div className="home">
            {isPending && <div>Loading..</div>}
            {data && < BlogList blogs={data}  title={'All blogs'}></BlogList>}
        </div>

    );
}
 
export default Home;