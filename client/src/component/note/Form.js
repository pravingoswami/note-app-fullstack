import React from 'react'
import {Container, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap'
import axios from '../../config/axios'



class NoteForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title : props.title  ? props.title : '',
            description :props.description ? props.description : '',
            catagories : [],
            catagory :props.catagory ? props.catagory : '',
            noteImage : props.noteImage ? props.noteImage : ''
        }
    }



    
    componentDidMount = () => {
        axios.get('/catagories')

        .then(response => {
            console.log(response.data)
            const catagories = response.data
            this.setState({catagories})
        })
        .catch(err => alert(err))

    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            title : this.state.title,
            description : this.state.description,
            catagory : this.state.catagory,
            // noteImage : this.state.noteImage

        }

        const form = new FormData()
        for(let key in formData){
            form.append(key, formData[key])
        }
        form.append('noteImage', this.state.noteImage)
        console.log(formData)

        this.props.handleSubmit(form)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleDropdown = (e) => {
        console.log(e.target.value)
        this.setState({
            catagory : e.target.value
        })
    }


    handleOnFile = (e) => {
        console.log(e.target.files[0])
        this.setState ({
            noteImage : e.target.files[0]
        })
    } 




    render(){
        return(
            <div>
                 <Form onSubmit = {this.handleSubmit}  >
                        <Label htmlFor="title">Title</Label>
                        <Input type="text" name="title" id="title" onChange = {this.handleChange} value = {this.state.title} placeholder = "Enter your title" />

                        <br></br>

                        <Label htmlFor="description">Description</Label>
                        <Input type="text" name="description" id="description" onChange = {this.handleChange} value = {this.state.description} placeholder = "Enter your description id" />

                        <br></br>


                        
                        <Label for="catagory">Department</Label>
                        <Input type="select" name="catagory" id="catagory" onChange = {this.handleDropdown}>
                        <option>{this.state.catagory != '' ? this.state.catagory : `Select`}</option>
                        {
                            this.state.catagories.map((cat,i) => {
                                console.log(cat.name)
                                return(
                                <option value = {cat._id} key = {cat._id} >{cat.name}</option>
                                )
                            })
                        }
                        </Input>

                        
                        <br></br>
                        <Label for="noteImage">File</Label>
                        <Input type="file" name="noteImage" id="noteImage" onChange = {this.handleOnFile} enctype="multipart/form-data" />

{/* 
                        <Label for="department">Department</Label>
                        <Input type="select" name="department" id="department" onChange = {this.handleDropdown}>
                        <option>{this.state.department != '' ?  this.state.department : `Select`}</option>
                        {
                            this.state.dept.map(dept => {
                                return(
                                <option value = {dept._id} >{dept.name}</option>
                                )
                            })
                        }
                        </Input> */}
                        
                        <br></br>

                        <Button color="primary" type = "submit">Submit</Button>{' '}

                        </Form>
            </div>
        )
    }
}

export default NoteForm