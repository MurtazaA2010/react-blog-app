import {Link} from 'react-router-dom';

const BlogList = ({blogs, title}) => {
    return ( 
        
        <div className="bloglist">
            <h1>{title}</h1>
            <div className="bflex">
                {blogs.map((blog)=> (
                
                    <div className="blog-preview" key={blog.id}>
                        <Link  to={`/blog/${blog.id}`}>
                            <div className="aut">
                                <p className='author'>{blog.author} </p>
                                <p className='categorie'>{blog.categorie}</p>
                            </div>
                            <div className="main-b">
                            <h4>{blog.title}</h4>
                            <p>{blog.body.slice(0,21) + "..."}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default BlogList;