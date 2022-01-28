import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown, Nav, Container, Row, Col, ProgressBar, Table, Alert } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import Inputform from './Components/Inputform'
import SaleLog from './Components/SaleLog'
import Messagebox from './Components/Messagebox'
import Moment from 'react-moment';
import moment from 'moment';


console.log(moment().startOf('month').subtract(6, 'months').format('MMMM Do YYYY'))
// console.log(moment().startOf('month').subtract(1, 'week').date())
// console.log(moment('2002-06-20').format('MMMM Do YYYY dddd'))
 
const date = new Date();
 
// const fourweeksago = moment().startOf('day').subtract(4,'week');
// console.log(moment(fourweeksago).format('MMMM Do YYYY, h:mm:ss a'));
 

const atoday = moment().startOf('day');
 

const moDays = moment().daysInMonth()
const dDay = moment().date()
const moDoneBar = ( Math.round(parseFloat(dDay/moDays)*100))

 


function App() {


   const [tasks, setTasks] = useState([])
   const [success, setSuccess] = useState(false)
 
 
 

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
      }

      
    getTasks()
    console.log('use effect fired')

  }, [])


  const fetchTasks = async () => {
    const res = await fetch('https://pertinacity1.pythonanywhere.com/pcsaleapi')
    const data = await res.json()
  
    return data

  }

  const mstat = (stat) => { 
    
    setSuccess(true);

  }
 


  return (
    <div className="App">
            <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><span className='text-danger'>Pilates</span> Club</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Lessons</Nav.Link>
 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     {/* { message && <Alert variant={'success'} dismissible={true} className='rounded-0 ' onClick={() => setMessage(false)}>
      Sales Added!
    </Alert> } */}
       {success && <Messagebox mstat={mstat} /> }
      <br />
      <Container className="text-start text-light"> 

      <Moment format='MMMM Do YYYY, h:mm:ss a dddd'>{date}</Moment>
      {/* <br/>
      <Moment subtract={{ days: 7  }} format='MMMM Do YYYY, h:mm:ss a dddd'>{date}</Moment>
      <br/>
      <Moment subtract={{ weeks: 4  }} format='MMMM Do YYYY, h:mm:ss a dddd'>{date}</Moment> */}
      <span className='float-end text-warning' >{moDoneBar}%</span>
      <hr className='bg-danger'/>
      <ProgressBar className="bg-dark rounded-0" variant="info" now={moDoneBar}  style={{height: 10}}/>


      <Container >
  <Row>
  <Col className="col-md-4"> <Inputform  mstat={mstat} /></Col>
  <Col className="col-md-8">  <SaleLog tasks={tasks}/></Col>
  </Row>
 
</Container>





     
</Container>
    </div>
    
  );
}

export default App;
document.body.style = 'background: black;';
