
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Navbar, Container} from 'react-bootstrap'
import Home from '../pages/Home'
function NavbarComponent(){
    return ( <Router>
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Todo-list</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Share
            </Navbar.Text>
            <Navbar.Text style={{marginLeft: "2vw"}}>
              Update
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
              <Home />
        </Route>
        <Route path="/share">
              <h1>Ini halaman share</h1>
        </Route>
        <Route path="/update">
              <h1>Ini halaman update</h1>
        </Route>

      </Switch>
    </Router>
)
}

export default NavbarComponent