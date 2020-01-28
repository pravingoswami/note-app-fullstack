import React from 'react'
import { Container } from 'reactstrap'
import NoteForm from './Form'
import axios from '../../config/axios'

class NoteNew extends React.Component {
    constructor(){
        super()
        this.state = {
            
        }
    }

    
    handleSubmit = (formData) => {

        const config = {
            headers: {
                "Content-Type": "multipart/form-data;boundary=----WebKitFormBoundaryyrV7KO0BoCBuDbTL"
            }
        }

        axios.post('/notes', formData, config)

        .then(response => {
            if(response.data.hasOwnProperty('errors')) {
                alert(response.data.message)
            } else {
                this.props.history.push('/notes')
            }
        })
        .catch(err => alert(err))
    }


    render(){
        return(
            <div>
                <Container>
                <br></br>
                <h1 className="display-4" style = {{textAlign : "center", fontWeight : "600"}}  > Add New Note</h1> 



            <br></br>
            <NoteForm handleSubmit = {this.handleSubmit} />
            
            </Container>
            </div>
        )
    }
}


export default NoteNew
