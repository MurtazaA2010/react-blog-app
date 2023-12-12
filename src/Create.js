import { useState } from 'react';
import { FloatingLabel } from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [categorie, setCategorie] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true)
        const blog = { title, author, body, categorie }

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("New blog added")
            setIsPending(false);
            history.push('/')
        })
    }

    return (
        <div className="create">
            <h1>Create a New Blog</h1>

            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="inputs">
                        <input
                         type="text"
                         placeholder='Title'
                         required
                         value={title}
                         onChange={(e) => { setTitle(e.target.value) }}
                        />
                    <br />
                    <input
                        type="text"
                        placeholder='Author Ex:Naruto'
                        required
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />  

                    <br/>
                    <label>Categorie:</label>
                    <select name="" id=""
                        required
                        value={categorie}
                        onChange={(e)=> setCategorie(e.target.value)}
                    >
                        <option value="Technology">Technology</option>
                        <option value="Sports">Sports</option>
                        <option value="Programming">Programming</option>
                    </select>
                    <br />
                    <textarea
                        name="body"  // Add name attribute
                        placeholder='Blgo Details'
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                    <br />
                    {!isPending && <button>Add blog</button>}
                    {isPending && <button>Adding new blog</button>}
                    </div>
                    
                </form>
            </div>
        </div>
    );
}

export default Create;

