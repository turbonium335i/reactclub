import {  Alert } from 'react-bootstrap'
 
 


const Messagebox = ({mstat}) => {

        console.log(mstat)

    


  return <div>

     {/* { message && <Alert variant={'success'} dismissible={true} className='rounded-0 ' onClick={() => setMessage(false)}>
      Sales Added!
    </Alert> } */}
 

        <Alert variant={'success'} dismissible={true} className='rounded-0 ' onClick={()=> mstat('false')}>
            Sales Added!
            </Alert>

  </div>;
};

export default Messagebox;
