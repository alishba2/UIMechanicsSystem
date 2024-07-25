import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import avatar from './assets/avatar.jpeg';

function Profile() {
  return (
    <div className='profile flex flex-col items-center' style={{ marginTop: '20px' }}>
      <img src={avatar} alt='Profile' className='w-20 h-20 rounded-full border-2 border-green-500' />
      <h2 className='text-lg font-semibold text-green-500' style={{ color: 'black' }}>John Doe</h2>
    </div>
  );
}

function Booking() {
  const formik = useFormik({
    initialValues: {
      mechanicName: '',
      date: '',
      time: '',
      price: ''
    },
    onSubmit: async (values) => {
      // Handle form submission here
      console.log(values);
    }
  });

  return (
    <div className='container mx-auto mt-10 mb-5 border border-black border-2 border-opacity-25' style={{ width: '400px', boxShadow: '0 0 20px green, 0 0 5px black inset' }}>
      <Profile />
      <div className='title flex flex-col items-center'>
        <h1 className='text-3xl font-bold text-black-500'>
          Book a Mechanic
        </h1>
        <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
          Select a mechanic and book an appointment
        </span>
      </div>
      <form className="py-1" onSubmit={formik.handleSubmit}>
        <div className="text-box flex flex-col items-center gap-6 justify-items-center">
          <input
            {...formik.getFieldProps('mechanicName')}
            className='textbox'
            type="text"
            placeholder="Mechanic Name"
            style={{ borderRadius: '9px', marginLeft:'20%',marginTop:'5%',marginBottom:'5%', backgroundColor: 'lightgreen', width: '200px', textAlign: 'center' }} 
          />
           <input
            {...formik.getFieldProps('Select Mechanic')}
            className='textbox'
            type="text"
            placeholder="Select Mechanic"
            style={{ borderRadius: '9px', marginLeft:'20%',marginTop:'5%',marginBottom:'5%', backgroundColor: 'lightgreen', width: '200px', textAlign: 'center' }} 
          />
          <input
            {...formik.getFieldProps('date')}
            className='textbox'
            type="date"
            placeholder="Date"
            style={{ borderRadius: '9px',marginLeft:'20%',marginTop:'3%', backgroundColor: 'lightgreen', width: '200px', textAlign: 'center' }} 
          />
          <input
            {...formik.getFieldProps('time')}
            className='textbox'
            type="time"
            placeholder="Time"
            style={{ borderRadius: '9px',marginLeft:'20%',marginTop:'5%',backgroundColor: 'lightgreen', width: '200px', textAlign: 'center' }} 
          />
     

<select
  {...formik.getFieldProps('currency')}
  style={{ marginLeft: '20%', marginTop: '5%', backgroundColor: 'lightgreen', borderRadius: '9px', width: '65%' }}
>
  <option value="">Prices</option>
  <option value="€">fuel changing =  500Rs</option>
  <option value="£">repair any parts=1500Rs</option>
  <option value="£">replace any parts=2500Rs</option>

</select>
          <div style={{ display: 'flex',marginLeft:'5%',justifyContent: 'center' }}>
          <button className='btn text-black px-2 py-2 rounded border-black' type="submit" style={{  marginBottom:'15px',width: '100px',backgroundColor:'white' }}>Submit</button>
</div>
        </div>
        <div style={{ display: 'flex', width:'90%',marginLeft:'5%',justifyContent: 'center' }}>
         <Link to="/Appointment" ><button className='btn text-black px-2 py-2 rounded border-black' type="submit" style={{  marginBottom:'15px',width: '150px',backgroundColor:'green' }}>see appointments</button></Link>
     </div>
      </form>
    </div>
  );
}

export default Booking;
