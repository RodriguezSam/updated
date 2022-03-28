import React, { useState, useEffect } from "react";
import "../App.css";
import Tabs from "../components/Tabs";
import { Button, Container, Form } from "react-bootstrap";
import emailjs from 'emailjs-com';


const Email = () => {
  const [form1, setform1Input] = useState({
    workout: '',
    name: '', 
    sender_email: '',
    recipient_email: '',
    exercise_details: ''
  });
  const [status, setStatus] = useState('');

  const handleForm1 = (e) => {
    e.preventDefault();
    emailjs.send('service_xug82mn', 'template_ybqig6r', form1, 'c4nT4o57gCX4dBxpv')
    .then(response => {
          console.log('Email successfully sent!', response);
          setform1Input({
            workout: '',
            name: '', 
            sender_email: '',
            recipient_email: '',
            exercise_details: ''
          });
          setStatus('SUCCESS');
        }, error => {
          console.log('MESSAGE FAILURE', error);
        });
      }

  const handleChange1 = (e) => {
    setform1Input(form1 => ({
        ...form1,
        [e.target.name]: e.target.value
    }))
  }

  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  return (
    <div>
      <div class="right">
        <a href="https://account.d5mz5bs8uvjp6.amplifyapp.com/">
        <img class="account" src="https://nyrevconnect.com/wp-content/uploads/2017/06/Placeholder_staff_photo-e1505825573317.png" width="50" height="50" alt="person icon"  ></img>
        </a>
      </div>
      <div class="Top">
        <h1>Email Portal</h1>
        <button class="right"> Distill Data </button>
      </div>
      <Tabs>
        <div label="Send Workout">
          <table>
           <thead>
            <tr>
              <th>Send an exercise template for the week or build a custom one</th>
            </tr>
           </thead>
           <tbody>
           <td>
            <tr>
             <Container>
              {status && renderAlert()}
               <Form>
                  <Form.Group controlId="form.Email">
                      <Form.Label>Enter your email address</Form.Label>
                      <Form.Control onChange={handleChange1} value={form1.sender_email} type="email" required placeholder="name@example.com" name="sender_email" />
                  </Form.Group>
                  <Form.Group controlId="form.Exercisetemp">
                      <Form.Label>Workout for the week:</Form.Label>
                      <Form.Control as="select" placeholder="select" onChange={handleChange1} name="workout" value={form1.workout}>
                        <option value="custom">select</option>
                        <option value="distance">Distance</option>
                        <option value="interval training">Interval Training</option>
                        <option value="recovery">Recovery</option>
                      </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="form.Name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control onChange={handleChange1} value={form1.name} type="text" required placeholder="Athlete name" name="name" />
                  </Form.Group>
                  <Form.Group controlId="form.Email">
                      <Form.Label>Athlete email address</Form.Label>
                      <Form.Control onChange={handleChange1} value={form1.recipient_email} type="email" required placeholder="name@example.com" name="recipient_email" />
                  </Form.Group>
                  <Form.Group controlId="form.Textarea">
                      <Form.Label>Exercise</Form.Label>
                      <Form.Control onChange={handleChange1} value={form1.exercise_details} type="text" as="textarea" rows={3} name="exercise_details"/>
                  </Form.Group>
                  <Button onClick={handleForm1} variant="primary" type="submit">
                    Send Email  
                  </Button>
                </Form>
             </Container>
             </tr>
            </td>
           </tbody>
          </table>
        </div>
        <div label="Welcome Message">
         <table>
          <thead>
           <tr>
            <th>Send a welcome message to a new athlete or staff member:</th>
           </tr>
          </thead>
          <tbody>
           <td>
            <tr>
            <Container>
              <Form>
                 <Form.Group controlId="form.Name">
                     <Form.Label>Name</Form.Label>
                     <Form.Control type="text" required placeholder="Enter name" name="sender_name" />
                 </Form.Group>
                 <Form.Group controlId="form.Email">
                     <Form.Label>Email address</Form.Label>
                     <Form.Control type="email" required placeholder="name@example.com" name="sender_email" />
                 </Form.Group>
                 <Form.Group controlId="form.Textarea">
                     <Form.Label>Comment</Form.Label>
                     <Form.Control name="comment" as="textarea" rows={3} />
                 </Form.Group>
                 <Button variant="primary" type="submit">
                    Send Email  
                  </Button>
               </Form>
            </Container>
            </tr>
           </td>
          </tbody>
         </table>
        </div>
      </Tabs>
    </div>
    );
}

const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
    <p>your message submitted successfully</p>
  </div>
)

export default Email;