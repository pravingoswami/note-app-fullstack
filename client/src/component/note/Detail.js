import React from 'react'
import {Container, Media, Button} from 'reactstrap'
import { Jumbotron } from 'reactstrap';
import axios from '../../config/axios'
import {Link} from 'react-router-dom'


class NoteDetail extends React.Component{
    constructor(){
        super()
        this.state = {
            note : {},
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
        
        .catch(err => alert(err))



}

    render(){
        return(
            <div>
                <Container>
                    <br></br>
                    <h1 className="display-3" style = {{textAlign : "center", fontWeight : "600"}}  > Note Details</h1>
                    
                    <br></br>

                    <Jumbotron>
                        {console.log(this.state.note.noteImage)}
                        
                        <h1 className="display-3">{this.state.note.title}</h1>
                        <hr className="my-2" />
                        <p>{this.state.note.description}</p>
                        <p className="lead">

                            <b>Catagory - &nbsp;</b>
                            {
                                this.state.note.catagory !== 'null' && <Button color="primary">{this.state.note.catagory ? this.state.note.catagory.name : `Not Available` }</Button>
                            }
                            
                        </p>
                    </Jumbotron>

                    

                    <img src = {`http://localhost:3015/${this.state.note.noteImage}`} style = {{width : "100%"}} />
                    

                    <br></br>
                        <h4><Link to = {`/notes/edit/${this.props.match.params.id}`}>Edit Note</Link></h4>

                    <br></br>
                        <br></br>
                        <Button color="primary" onClick = {() => this.props.history.push('/notes')} >Back</Button>{' '}

                </Container>
            </div>
        )
    }
}

export default NoteDetail