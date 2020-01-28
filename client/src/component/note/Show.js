import React from 'react'
import axios from '../../config/axios'
import {Link} from 'react-router-dom'

import TableDetails from './Table.js'
import { Container } from 'reactstrap'



class NoteShow extends React.Component {
    constructor(){
        super()
        this.state = {
            notes : [],
            header : {
                title : "Title",
                description : "Description",
                catagory : "Catagory"
            }
        }
    }

    componentDidMount = () => {
        axios.get('/notes')
            .then(response => {
                const notes = response.data
                console.log(notes)
                this.setState({notes})
            })

            .catch(err => alert(err))
    }

    
    handleRemove = (id) => {
        axios.delete(`/notes/${id}`)

            .then(response => {
                this.setState(prevState => ({
                    notes : prevState.notes.filter(emp => emp._id != id)
                }))
            })

    }

    

    render(){
        return(
        <Container>
                <br></br>
            <h1 className="display-4" style = {{textAlign : "center", fontWeight : "600"}}  > Listing Notes - {this.state.notes.length}</h1> 

            <h3><Link to = "/notes/new">Add Notes</Link></h3>

            <br></br>
            <TableDetails list = {this.state.notes} handleRemove = {this.handleRemove} header = {this.state.header}/>




            </Container>
        )
    }
}

export default NoteShow




// import React from 'react'
// import axios from '../../config/axios'

// import {Link} from 'react-router-dom'
// import { Container } from 'reactstrap'

// import TableDetails from './Table'

// import CustomerNew from './New'

// class CustomerList extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             customers : [],
//             header : {
//                 name : "Name",
//                 email : "Email",
//                 mobile : "Mobile"
//             }
//         }
//     }


//     componentDidMount = () => {
//         axios.get('/customers', {
//             headers : {
//                 'x-auth' : localStorage.getItem('authToken')
//             }
//         })
//         .then(response => {
//             const customers = response.data
//             this.setState ({customers})
//         })
//     }

//     handleRemove = (id) => {
//         axios.delete(`/customers/${id}`, {
//             headers : {
//                 'x-auth' : localStorage.getItem('authToken')
//             }
//         })

//             .then(response => {
//                 this.setState(prevState => ({
//                     customers : prevState.customers.filter(customer => customer._id != id)
//                 }))
//             })

//     }



//     render(){
//         return(
//             <Container>
//                 <br></br>
//     <h1 className="display-4" style = {{textAlign : "center", fontWeight : "600"}}  > Listing Customers - {this.state.customers.length}</h1> 

//     <h3><Link to = "/customers/new">Add Customer</Link></h3>

//             <br></br>
//             <TableDetails header = {this.state.header} list = {this.state.customers} handleRemove = {this.handleRemove} />




//             </Container>
//         )
//     }

// }

// export default CustomerList