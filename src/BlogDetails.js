import {useParams, useHistory} from 'react-router-dom'
import useFetch from './useFetch';

const BlogDetails = () => {
    const {id} = useParams();
    const {data, isPending} = useFetch('http://localhost:8000/blogs/' + id );
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + data.id, {
            method : 'DELETE'
        }).then(() => {
            history.push('/');
        })
    };
    
    const handleBack = () => {
        history.go(-1);
    };
    
    return ( 
        <div className="blog-details">
                {isPending && <div id='loading...'>Loading</div>}
                <div className="center">
                {data &&  <h3 id='title'>{data.title}</h3>}
                {data &&  <p id='author'>By : {data.author}</p>}
                {data && <p id='categorie'>{data.categorie}</p>}
                </div>
                {data &&  <p id='body'>{data.body}</p>}
                <button onClick={handleDelete} className='btn'>Delete Blog</button>
                <button onClick={handleBack} className='btn'>Go back</button>
        </div>
     );
};
export default BlogDetails;
