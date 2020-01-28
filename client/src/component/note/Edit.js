import React from 'react'
import { Container } from 'reactstrap'
import NoteForm from './Form'
import axios from '../../config/axios'

class NoteEdit extends React.Component {
    constructor(){
        super()
        this.state = {
            note : {}
        }
    }

    componentDidMount = () => {
        const id = this.props.match.params.id
        console.log(id)

        axios.get(`/notes/${id}`)
        .then(response => {
            const note = response.data
            console.log(note)
            this.setState ({note})
        })
    }

    handleSubmit = (formData) => {
        axios.put(`/notes/${this.props.match.params.id}`, formData)

            .then(response => {
                console.log(response.data)
                this.props.history.push(`/notes/${this.props.match.params.id}`)
            })
    }

    render(){
        return(
            <div>
                <Container>
                    <br></br>
                <h1 className="display-4" style = {{textAlign : "center", fontWeight : "600"}}  > Edit Note</h1> 

                <br></br>

                {
                    Object.keys(this.state.note).length > 0 && <NoteForm
                    title = {this.state.note.title}
                    description = {this.state.note.description}
                    catagory = {this.state.note.catagory ? this.state.note.catagory.name : ``}
                    handleSubmit = {this.handleSubmit} />
                }

                </Container>
            </div>
        )
    }
}

export default NoteEdit
