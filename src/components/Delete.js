import React,{useState} from 'react';
import axios from 'axios';

const DeleteList = () => {
    const [state, setState] = useState({id: ''})

    const handleChange = event => {
        setState({id: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();

        axios.delete(`https://jsonplaceholder.typicode.com/users/${state.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }


        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Person ID:
                        <input type="text" name="id" onChange={handleChange} />
                    </label>
                    <button type="submit">Delete</button>
                </form>
            </div>
        )
}
export default DeleteList ;