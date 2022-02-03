import { Form, Col, Button } from 'react-bootstrap'
 

function refreshPage() {

    setTimeout(function() {window.location.reload(false);   }, 500);
    
    
  }


var now = new Date();
var daycheck = now.getDate()
if ((String(daycheck)).length < 2) {
    daycheck = "0" + daycheck;
}

var mocheck = now.getMonth()
if ((String(mocheck)).length <2) {
     mocheck = "0" + (mocheck + 1);

}

var today = now.getFullYear() + '-' + mocheck + '-' + daycheck;







const Inputform = ({mstat }) => {

    let sendData = async () => {

        const api_dateSale = document.getElementById('dateSale').value
        const api_saleType = document.getElementById('saleType').value
        const api_totalSale = document.getElementById('totalSale').value
        const api_paymentType = document.getElementById('paymentType').value
        const api_sessions = document.getElementById('sessions').value
        const api_instructor = document.getElementById('instructor').value
        const api_memo = document.getElementById('memo').value
      
        if (api_totalSale != '' && api_sessions != '') {
                fetch('https://pertinacity1.pythonanywhere.com/pcsaleapicreate', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
    
                body: JSON.stringify({
                'api_dateSale':api_dateSale,
                'api_saleType':api_saleType,
                'api_totalSale':api_totalSale,
                'api_paymentType':api_paymentType,
                'api_sessions':api_sessions,
                'api_instructor':api_instructor,
                'api_memo':api_memo,
     
            
            
            })
    
    
                }).then(()=> mstat('true')).then(refreshPage)
    
        }    
    
    }




    return (
        < >
            <br/>
   
            <Col  >    
            <input type="date" id="dateSale" name="donedate" defaultValue={today} className='bg-dark text-light border-secondary mb-2 '/>&nbsp;&nbsp;

            <Form.Select aria-label="Default select example" className='bg-dark text-light border-secondary mb-1' id="saleType" name='saleType'>
            
            <option value="Single">Single</option>
            <option value="Duet">Duet</option>
            <option value="Trial">Trial</option>
            <option value="Other">Other</option>
 
            </Form.Select>
            <Form.Control required  type="number" placeholder="Total Sale" 
             id="totalSale" className='bg-dark text-light border-secondary mb-1' name='totalSale'/>
             
             <Form.Control required  type="number" placeholder="Sessions" 
             id="sessions" className='bg-dark text-light border-secondary mb-1' name='sessions'/>
 
            <Form.Select aria-label="Default select example" className='bg-dark text-light border-secondary mb-1' id="paymentType" name='paymentType'>
            
            <option value="CreditCard">CreditCard</option>
            <option value="Bank">Bank</option>
            <option value="Cash">Cash</option>
            <option value="Other">Other</option>
 
            </Form.Select>
            <Form.Select aria-label="Default select example" className='bg-dark text-light border-secondary mb-1' id="instructor" name='instructor'>
            
            <option value="Instructor">Instructor</option>
            <option value="Boss">Boss</option>
            <option value="Other">Other</option>
 
            </Form.Select>
            
            
         
           


 <Form.Control as="textarea" placeholder="Memo"  rows={3} className='my-2 bg-dark text-warning mb-1' id="memo" />

          
  <>
  <div className="d-grid gap-2">
  <Button variant="outline-primary" type="button" onClick={ sendData} className='my-2 '  >Submit
  </Button>
</div>
</>





            </Col>
            

 


 
            </ >

    )
}


 
 



export default Inputform
