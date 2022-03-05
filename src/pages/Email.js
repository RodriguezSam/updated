import React from "react";
import "../App.css";
import Tabs from "../components/Tabs";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../components/Login/Login.css";
import loginIcon from "../components/Login/loginIcon.png"

const Email = () => {
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
               <Form>
                  <Form.Group controlId="form.Exercisetemp">
                      <Form.Label>Workout for the week:</Form.Label>
                      <Form.Control as="select" placeholder="select">
                        <option value="1">select</option>
                        <option value="2">80 Miles</option>
                        <option value="3">Recovery week</option>
                      </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="form.Name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter name" />
                  </Form.Group>
                  <Form.Group controlId="form.Email">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group controlId="form.Textarea">
                      <Form.Label>Exercise</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                  </Form.Group>
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
                     <Form.Control type="text" placeholder="Enter name" />
                 </Form.Group>
                 <Form.Group controlId="form.Email">
                     <Form.Label>Email address</Form.Label>
                     <Form.Control type="email" placeholder="name@example.com" />
                 </Form.Group>
                 <Form.Group controlId="form.Textarea">
                     <Form.Label>Comment</Form.Label>
                     <Form.Control as="textarea" rows={3} />
                 </Form.Group>
               </Form>
            </Container>
            </tr>
           </td>
          </tbody>
         </table>
        </div>
      </Tabs>
     <h2>Still making templates</h2>
    </div>
    );
}
export default Email;