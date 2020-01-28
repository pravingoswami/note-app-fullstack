import React from 'react'
import { Container } from 'reactstrap'
import CatagoryNew from './New'
import axios from '../../config/axios'

class CatagoryEdit extends React.Component {
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
            const catagory = response.data
            console.log(catagory)
            this.setState ({catagory})
        })
    }

    handleSubmit = (formData) => {
        axios.put(`/catagories/${this.props.match.params.catId}`, formData)

            .then(response => {
                console.log(response.data)
                this.props.history.push(`/catagories/${this.props.match.params.catId}`)
            })
    }

    render(){
        return(
            <div>
                <Container>
                    <br></br>
                <h1 className="display-4" style = {{textAlign : "center", fontWeight : "600"}}  > Edit Catagory</h1> 

                <br></br>

                {
                    Object.keys(this.state.catagory).length > 0 && <CatagoryNew name = {this.state.catagory.name} handleSubmit = {this.handleSubmit} />
                }

                </Container>
            </div>
        )
    }
}

export default CatagoryEdit