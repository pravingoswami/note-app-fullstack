import React from 'react'
import axios from '../../config/axios'
import {Link} from 'react-router-dom'

import {Container, Table, Button, Form , Label , Input} from 'reactstrap'
import CatagoryNew from './New'

class DepartmentList extends React.Component{

    constructor(){
        super()
        this.state = {
            catagories : []
        }
    }


    componentDidMount = () => {
        axios.get('/catagories')
            .then(response => {
                const catagories = response.data
                this.setState({catagories})
            })

            .catch(err => alert(err))
    }

    handleSubmit = (formData) => {
        console.log("hi")
        axios.post(`/catagories`, formData)

            .then(response => {
                const data = response.data
                this.setState(prevState => ({
                    catagories : prevState.catagories.concat(data)
                }
                ))
            })

            .catch(err => alert(err))

    }

    
    handleRemove = (id) => {
        console.log(id)
        axios.delete(`/catagories/${id}`)

            .then(response => {
                this.setState(prevState => ({
                    catagories : prevState.catagories.filter(cat => cat._id != id)
                }))
            })

    }




    render(){
        return(
            <div>
                <Container>
                    <br></br>
                    <h1 className="display-4" style = {{textAlign : "center", fontWeight : "600"}}  > Listing Catagories - {this.state.catagories.length}</h1> 

                <br></br>
                <br></br>
                <div>

                    {
                        <Table dark striped>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Action</th>
                            <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.catagories.map((cat, i) => {
                                    i = i+1
                                    return(
                                        <tr>
                                        <th scope = "row" > {i}</th>
                                        <td>{cat.name}</td>
                                        <td>
                                            <Button color="info">
                                                <Link 
                                                    to = {`/catagories/${cat._id}`} 
                                                    style = {{color : "white"}}
                                                    >
                                                        Show Detail
                                                </Link>
                                            </Button>{' '}</td>
                                        <td><Button color="danger" onClick = {() => this.handleRemove(cat._id) } >Remove</Button>{' '}</td>
                                        </tr>
                                    )
                                })
                            }
    
                        </tbody>
                        </Table>
                    }

                </div>
                    
                    <br></br>
                    <br></br>


                    <CatagoryNew handleSubmit = {this.handleSubmit} />


                </Container>
            </div>
        )
    }
}

export default DepartmentList













// import React from 'react'
// import axios from '../../config/axios'

// import TableDetails from './Table.js'
// import { Container } from 'reactstrap'



// class CatagoryShow extends React.Component {
//     constructor(){
//         super()
//         this.state = {
//             catagories : [],
//             header : {
//                 name : "Name",
//             }
//         }
//     }

//     componentDidMount = () => {
//         axios.get('/catagories')
//             .then(response => {
//                 const catagories = response.data
//                 console.log(catagories)
//                 this.setState({catagories})
//             })

//             .catch(err => alert(err))
//     }

    

//     render(){
//         return(
//         <Container>
//                 <br></br>
//             <h1 className="display-4" style = {{textAlign : "center", fontWeight : "600"}}  > Listing Catagories - {this.state.catagories.length}</h1> 

//             {/* <h3><Link to = "/customers/new">Add Customer</Link></h3> */}

//             <br></br>
//             <TableDetails list = {this.state.catagories} handleRemove = {this.handleRemove} header = {this.state.header}/>




//             </Container>
//         )
//     }
// }

// export default CatagoryShow

