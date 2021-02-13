import React, {useState} from 'react';
import axios from 'axios';


const  PersonList = ()=>  {

   const [list, setList] = useState({
        persons: []
    })

    const componentDidMount = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                console.log(res)
                setList({ persons });
            })
    }


        return (<div>
                <button onClick={componentDidMount }>get</button>
            <ul>
                { list.persons.map(person => <li>{person.name + ' ' + person.username}</li>)}

            </ul>
            </div>
        )

}
export default  PersonList;







//
// export default class PersonList extends React.Component {
//     state = {
//         persons: []
//     }
//
//     componentDidMount() {
//         axios.get(`https://jsonplaceholder.typicode.com/users`)
//             .then(res => {
//                 const persons = res.data;
//                 console.log(res)
//                 this.setState({ persons });
//             })
//     }
//
//     render() {
//         return (
//             <ul>
//                 { this.state.persons.map(person => <li>{person.name + ' ' + person.username}</li>)}
//             </ul>
//         )
//     }
// }