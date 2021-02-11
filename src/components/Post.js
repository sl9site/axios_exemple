import React,{useState} from 'react';
import axios from 'axios';


const PostPersonList =()=> {
    const [inpValue, setInpValue] = useState('')
   const [personList, setPersonList] = useState({
       name: '',
   })

    const handleChange = event => {
        setInpValue( event.target.value);
        setPersonList({...personList, name: inpValue});

    }

    const handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: personList.name
        };

        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }


        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Person Name:
                        <input value={inpValue} name="name" onChange={(event)=> handleChange(event)} />
                    </label>
                    <button onClick={handleSubmit}>Add</button>
                </form>
            </div>
        )
}
export default  PostPersonList;
















// export default class PostPersonList extends React.Component {
//     state = {
//         name: '',
//     }
//
//     handleChange = event => {
//         this.setState({ name: event.target.value });
//     }
//
//     handleSubmit = event => {
//         event.preventDefault();
//
//         const user = {
//             name: this.state.name
//         };
//
//         axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
//             .then(res => {
//                 console.log(res);
//                 console.log(res.data);
//             })
//     }
//
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <label>
//                         Person Name:
//                         <input type="text" name="name" onChange={this.handleChange} />
//                     </label>
//                     <button type="submit">Add</button>
//                 </form>
//             </div>
//         )
//     }
// }