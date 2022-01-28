import { Table, Popover, OverlayTrigger, Button } from 'react-bootstrap'
import Moment from 'react-moment';
import moment from 'moment';



const startofmonth =  moment().startOf('month').format('x')
const weekago =  moment().subtract(1, 'months').format('x')
const startofyear =  moment().startOf('year').format('x')
 
 


  const Example = ({memo}) => (
    
    <OverlayTrigger trigger="click" placement="left" overlay={
        <Popover id="popover-basic">
        {/* <Popover.Header as="h3" className='bg-dark text-warning'>Memo</Popover.Header> */}
        <Popover.Body className='bg-secondary text-warning'>
        {memo}
        </Popover.Body>
      </Popover>

    }>
        <td  style={{cursor:"pointer"}} >{memo.slice(0, 5)}</td>
    </OverlayTrigger>
  );

const SaleLog = ({tasks}) => {

    var totalSales = 0;

    for (let i = 0; i < tasks.length; i++){
      
      var jsondateobj = moment(tasks[i].dateSale);
      const jsondate = jsondateobj.format('x'); 
     
      if (jsondate >= startofyear ) {
        totalSales += parseInt(tasks[i].totalSale)
      }
    }

    tasks = tasks.slice(-50).reverse()
    var monthSales = 0;
     for (let i = 0; i < tasks.length; i++){
      
      var jsondateobj = moment(tasks[i].dateSale);
      const jsondate = jsondateobj.format('x'); 
     
      if (jsondate >= startofmonth ) {
        monthSales += parseInt(tasks[i].totalSale)
      }
    }



  return <>
 <div className='text-center text-warning'>{totalSales.toLocaleString()} &#9830; {moment().startOf('month').format('YYYY-MM-DD')} : &nbsp;
   {monthSales.toLocaleString()} </div>
      <Table striped bordered hover variant="dark" className='table-sm mt-2 mt-md-5' >
     
  <thead>
    <tr>
      <th>Date</th>
      <th>Type</th>
      <th>Sale</th>
      <th>P-Type</th>
      <th>Instructor</th>
      <th>Memo</th>
    
    </tr>
  </thead>
  <tbody>
 

    {tasks.map((task, index) =>(
        
              <tr key={task.id} >
              <td>{task.dateSale}</td>
              <td>{task.saleType}</td>
              <td>{task.totalSale.toLocaleString()}</td>
              <td>{task.paymentType.slice(0,6)}</td>             
              <td>{task.instructor}</td>
              <Example memo={task.memo}/>
            
            </tr>
            
               
            ))}

  </tbody>
</Table>




  </>;
};



export default SaleLog;
