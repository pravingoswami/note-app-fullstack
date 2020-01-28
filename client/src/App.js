import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

import {
  Navbar,
  Nav,
  NavItem,
  NavLink, NavbarBrand} from 'reactstrap'

  import Home from './component/Home'

  import NoteShow from './component/note/Show'
  import NoteNew from './component/note/Add'
  import NoteDetail from './component/note/Detail'
  import NoteEdit from './component/note/Edit'


  import CatagoryShow from './component/catagory/Show'
  import CatagoryDetail from './component/catagory/Detail'
  import CatagoryEdit from './component/catagory/Edit'

  import FileUpload from './component/file/Temp'

  

class App extends React.Component {
  render(){
    return(
      <div>
        
          <BrowserRouter>
          
          <Navbar color = "dark" >
                        <Nav>

                        <NavbarBrand href="/" style = {{color : "white"}} >Note App</NavbarBrand>

                        </Nav>

                        <Nav></Nav>
                        <Nav>

                        <NavItem>
                        <NavLink><Link to = "/" style = {{color : "white"}} >Home</Link></NavLink>
                        </NavItem>

                        <NavItem>
                        <NavLink><Link to = "/notes" style = {{color : "white"}} >Notes</Link></NavLink>
                        </NavItem>

                        
                        <NavItem>
                        <NavLink><Link to = "/catagories" style = {{color : "white"}} >Catagories</Link></NavLink>
                        </NavItem>

                        
                        
                        <NavItem>
                        <NavLink><Link to = "/file" style = {{color : "white"}} >File - Upload</Link></NavLink>
                        </NavItem>
                        </Nav>


          </Navbar>

          <Switch>


          <Route path = "/" component = {Home} exact = {true}/>

          <Route path = "/notes" component = {NoteShow} exact = {true} />
          <Route path = "/notes/new" component = {NoteNew} exact = {true} />
          <Route path = "/notes/:id" component = {NoteDetail} exact = {true} />
          <Route path = "/notes/edit/:id" component = {NoteEdit} />


          <Route path = "/catagories" component = {CatagoryShow} exact = {true}/>
          <Route path = "/catagories/:catId" component = {CatagoryDetail} exact = {true}/>
          <Route path = "/catagories/edit/:catId" component = {CatagoryEdit} />

          <Route path = "/file" component = {FileUpload} exact = {true}/>


        </Switch>
          
          
          </BrowserRouter>

      </div>
    )
  }
}

export default App