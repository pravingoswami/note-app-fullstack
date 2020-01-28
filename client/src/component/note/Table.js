import React from 'react'
import {Table, Button} from 'reactstrap'
import {Link} from 'react-router-dom'


class TableDetails extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }



    render(){
        return(
            <div>
                <Table dark striped>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>{this.props.header.title}</th>
                        <th>{this.props.header.desription}</th>
                        <th>{this.props.header.catagory}</th>
                        <th>Action</th>
                        <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.list.map((list, i) => {
                                i = i+1
                                return(
                                    <tr>
                                    <th scope = "row" > {i}</th>
                                    <td>{list.title}</td>
                                    <td>{list.description}</td>
                                    <td>{list.catagory == null ? `Not Availlable` : list.catagory.name}</td>
                                    <td><Button color="info" style = {{width : "120px"}} >
                                        <Link 
                                            to = {`notes/${list._id}`} 
                                            style= {{color : "white"}} >
                                                Show Detail
                                            </Link>
                                        </Button>{' '}
                                    </td>
                                    <td><Button color="danger" onClick = {() => this.props.handleRemove(list._id)} >Remove</Button>{' '}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                    </Table>
            </div>
        )
    }
}

export default TableDetails