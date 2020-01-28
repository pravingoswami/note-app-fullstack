import React from 'react'
import {Container, Button} from 'reactstrap'
import axios from '../../config/axios'
import {Link} from 'react-router-dom'

class CatagoryDetail extends React.Component{
    constructor(){
        super()
        this.state = {
            catagory : {}
        }
    }

    componentDidMount = () => {
        const id = this.props.match.params.catId
        console.log(id)
        axios.get(`/catagories/${id}`)

        .then(response => {
            console.log(response.data)
            const catagory = response.data
            this.setState({catagory})
        })
    }

    render(){
        return(
            <div>
                <Container> 
                    <br></br>
                    <h1 className="display-4" style = {{textAlign : "center", fontWeight : "600"}}  > Catagory Details</h1> 
                    <br></br>
                    <h2><b>Name - </b>{this.state.catagory.name}</h2>
                    <br></br>
                    <br></br>
                    <h4><Link to = {`/catagories/edit/${this.props.match.params.catId}`}>Edit Catagory</Link></h4>
                    <br></br>
                        <br></br>
                        <Button color="primary" onClick = {() => this.props.history.push('/catagories')} >Back</Button>{' '}
                </Container>
            </div>
        )
    }
}

export default CatagoryDetail