import React from "react";
import "../App.css";
import Tabs from "../components/Tabs";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useState, useEffect } from "react";

function Dashboard() {

  const POST = {
    method: 'POST',
    headers: { 
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        "username":"jaw645@nau.edu",
        "password":"1fn18t#m6;8!"
      })
  };

  const [userObjects, setuser] = useState(null);
  const [workoutObjects, setworkout] = useState(null);
  
  
  // API calls that fetch data
  // returns multiple arrays of data to be accessed
  useEffect(() => {
  
  fetch('https://www.pwrlab.com/api/iaaa/login', POST)
      .then(response => { 
          if (!response.ok){
          console.log('error')
      }  
      return response.json()
      })
      .then(poster => { 
              return poster.data.access_token;
      })
      .then( access_token => {
          fetch('https://www.pwrlab.com/api/connected-data/users', {
              method: 'GET',
              headers: { 'Authorization': 'Bearer ' + access_token}
          })
          .then(response => { 
              if (!response.ok){
              console.log('error')
          }  
          return response.json()
          })
          .then(getter => {
               console.log('1' + getter)
               setuser(getter)
                  })
              })
  fetch('https://www.pwrlab.com/api/iaaa/login', POST)
      .then(response => { 
          if (!response.ok){
          console.log('error')
      }  
      return response.json()
      })
      .then(poster => { 
              return poster.data.access_token;
      })
      .then( access_token => {
          fetch('https://www.pwrlab.com/api/connected-data/workouts', {
              method: 'GET',
              headers: { 'Authorization': 'Bearer ' + access_token}
          })
          .then(response => { 
              if (!response.ok){
              console.log('error')
          }  
          return response.json()
          })
          .then(getter => {
               console.log('3' + getter)
               setworkout(getter)
                  })
              })
    },[0]);
    const handleDragEnd1 = (result) => 
    {
      if (!result.destination) return;
      let athleteInfo = Array.from(userObjects);
      let [draggedItem] = athleteInfo.splice(result.source.index, 1);
      athleteInfo.splice(result.destination.index, 0, draggedItem);
      setuser(athleteInfo);
    }
    const handleDragEnd3 = (result) => 
    {
      if (!result.destination) return;
      let athleteInfo = Array.from(workoutObjects);
      let [draggedItem] = athleteInfo.splice(result.source.index, 1);
      athleteInfo.splice(result.destination.index, 0, draggedItem);
      setworkout(athleteInfo);
    }
  
  return (
    <div className="dashboard-design">
      <div class="right">
        <a href="https://account.d5mz5bs8uvjp6.amplifyapp.com/">
        <img class="account" src="https://nyrevconnect.com/wp-content/uploads/2017/06/Placeholder_staff_photo-e1505825573317.png" width="50" height="50" alt="person icon"  ></img>
        </a>
      </div>
        <h5 class="right">Username</h5>
          <div class="Top">
            <h1>Team Agone</h1>
            <button class="right"> Save Changes </button>
          </div>
           <div class="Top">
             <Tabs>
               <div label="USERS">
               <DragDropContext onDragEnd={handleDragEnd1}>
                <table>
                 <thead>
                  <tr>
                    <th></th>
                     <th>ID</th>
                     <th>Email</th>
                     <th>First Name</th>
                     <th>Last Name</th>
                     <th>Birth Date</th>
                     <th>Birth Year</th>
                     <th>Gender</th>
                     <th>Height</th>
                     <th>Weight</th>
                     <th>Created on</th>
                     <th>Updated on</th>
                  </tr>
                 </thead>
                 <Droppable droppableId="droppable-1">
                   {(provider) => (
                     <tbody
                       className="text-capitalize"
                       ref={provider.innerRef}
                       {...provider.droppableProps}
                     >
                       {userObjects?.map((dataobject, index) => (
                         <Draggable
                           key={dataobject.id}
                           draggableId={dataobject.id}
                           index={index}
                         >
                           {(provider) => (
                             <tr {...provider.draggableProps} ref={provider.innerRef}>
                             <td {...provider.dragHandleProps}>~</td>
                               <td>{dataobject.id}</td>
                               <td>{dataobject.email}</td>
                               <td>{dataobject.first_name}</td>
                               <td>{dataobject.last_name}</td>
                               <td>{dataobject.birth_date}</td>
                               <td>{dataobject.birth_year}</td>
                               <td>{dataobject.gender}</td>
                               <td>{dataobject.height}</td>
                               <td>{dataobject.weight}</td>
                               <td>{dataobject.created_on}</td>
                               <td>{dataobject.updated_on}</td>
                             </tr>
                           )}
                         </Draggable>
                       ))}
                       {provider.placeholder}
                     </tbody>
                   )}
                 </Droppable>
                </table>
               </DragDropContext>
               </div>
               <div label="WORKOUTS">
                <DragDropContext onDragEnd={handleDragEnd3}>
                 <table>
                  <thead>
                   <tr>
                    <th></th>
                     <th>ID</th>
                     <th>First Name</th>
                     <th>Last Name</th>
                     <th>utc_start_time</th>
                     <th>local_start_time</th>
                     <th>start_latitude</th>
                     <th>start_longitude</th>
                     <th>end_latitude</th>
                     <th>end_longitude</th>
                     <th>elevation_gain</th>
                     <th>elevation_loss</th>
                     <th>average_heartrate</th>
                     <th>maximum_heartrate</th>
                     <th>average_cadence</th>
                     <th>average_steps_per_min</th>
                     <th>total_step_count</th>
                     <th>distance</th>
                     <th>duration</th>
                     <th>elapsed_duration</th>
                     <th>average_pace_duration</th>
                     <th>average_pace_elapsed_duration</th>
                     <th>type</th>
                     <th>duration_moving</th>
                     <th>duration_not_moving</th>
                     <th>endpoints_straight_line_distance</th>
                     <th>vendor</th>
                     <th>average_power</th>
                     <th>average_velocity</th>
                     <th>average_gct</th>
                     <th>average_stride_time</th>
                     <th>average_stride_length</th>
                     <th>average_flight_time</th>
                     <th>average_kvert</th>
                     <th>weighted_load</th>
                     <th>w5sec</th>
                     <th>w15sec</th>
                     <th>w30sec</th>
                     <th>w1min</th>
                     <th>w3min</th>
                     <th>w5min</th>
                     <th>w9min</th>
                     <th>w10min</th>
                     <th>w20min</th>
                     <th>w30min</th>
                     <th>w1hr</th>
                     <th>duration_stop</th>
                     <th>duration_walk</th>
                     <th>duration_run</th>
                     <th>duration_zone_0_walk</th>
                     <th>duration_zone_1_walk</th>
                     <th>duration_zone_2_walk</th>
                     <th>duration_zone_3_walk</th>
                     <th>duration_zone_4_walk</th>
                     <th>duration_zone_5_walk</th>
                     <th>duration_zone_0_run</th>
                     <th>duration_zone_1_run</th>
                     <th>duration_zone_2_run</th>
                     <th>duration_zone_3_run</th>
                     <th>duration_zone_4_run</th>
                     <th>duration_zone_5_run</th>
                     <th>total_distance_stop</th>
                     <th>total_distance_walk</th>
                     <th>total_distance_run</th>
                     <th>total_distance_zone_0_walk</th>
                     <th>total_distance_zone_1_walk</th>
                     <th>total_distance_zone_2_walk</th>
                     <th>total_distance_zone_3_walk</th>
                     <th>total_distance_zone_4_walk</th>
                     <th>total_distance_zone_5_walk</th>
                     <th>total_distance_zone_0_run</th>
                     <th>total_distance_zone_1_run</th>
                     <th>total_distance_zone_2_run</th>
                     <th>total_distance_zone_3_run</th>
                     <th>total_distance_zone_4_run</th>
                     <th>total_distance_zone_5_run</th>
                     <th>average_hr_stop</th>
                     <th>average_hr_walk</th>
                     <th>average_hr_run</th>
                     <th>average_hr_zone_0_walk</th>
                     <th>average_hr_zone_1_walk</th>
                     <th>average_hr_zone_2_walk</th>
                     <th>average_hr_zone_3_walk</th>
                     <th>average_hr_zone_4_walk</th>
                     <th>average_hr_zone_5_walk</th>
                     <th>average_hr_zone_0_run</th>
                     <th>average_hr_zone_1_run</th>
                     <th>average_hr_zone_2_run</th>
                     <th>average_hr_zone_3_run</th>
                     <th>average_hr_zone_4_run</th>
                     <th>average_hr_zone_5_run</th>
                     <th>average_power_stop</th>
                     <th>average_power_walk</th>
                     <th>average_power_run</th>
                     <th>average_power_zone_0_walk</th>
                     <th>average_power_zone_1_walk</th>
                     <th>average_power_zone_2_walk</th>
                     <th>average_power_zone_3_walk</th>
                     <th>average_power_zone_4_walk</th>
                     <th>average_power_zone_5_walk</th>
                     <th>average_power_zone_0_run</th>
                     <th>average_power_zone_1_run</th>
                     <th>average_power_zone_2_run</th>
                     <th>average_power_zone_3_run</th>
                     <th>average_power_zone_4_run</th>
                     <th>average_power_zone_5_run</th>
                   </tr>
                  </thead>
                 <Droppable droppableId="droppable-1">
                   {(provider) => (
                     <tbody
                       className="text-capitalize"
                       ref={provider.innerRef}
                       {...provider.droppableProps}
                     >
                       {workoutObjects?.map((dataobject, index) => (
                         <Draggable
                           key={dataobject.id}
                           draggableId={dataobject.id}
                           index={index}
                         >
                           {(provider) => (
                             <tr {...provider.draggableProps} ref={provider.innerRef}>
                               <td {...provider.dragHandleProps}>~</td>
                               <td>{dataobject.id}</td>
                               <td>{dataobject.first_name}</td>
                               <td>{dataobject.last_name}</td>
                               <td>{dataobject.utc_start_time}</td>
                               <td>{dataobject.local_start_time}</td>
                               <td>{dataobject.start_latitude}</td>
                               <td>{dataobject.start_longitude}</td>
                               <td>{dataobject.end_latitude}</td>
                               <td>{dataobject.end_longitude}</td>
                               <td>{dataobject.elevation_gain}</td>
                               <td>{dataobject.elevation_loss}</td>
                               <td>{dataobject.average_heartrate}</td>
                               <td>{dataobject.maximum_heartrate}</td>
                               <td>{dataobject.average_cadence}</td>
                               <td>{dataobject.average_steps_per_min}</td>
                               <td>{dataobject.total_step_count}</td>
                               <td>{dataobject.distance}</td>
                               <td>{dataobject.duration}</td>
                               <td>{dataobject.elapsed_duration}</td>
                               <td>{dataobject.average_pace_duration}</td>
                               <td>{dataobject.average_pace_elapsed_duration}</td>
                               <td>{dataobject.type}</td>
                               <td>{dataobject.duration_moving}</td>
                               <td>{dataobject.duration_not_moving}</td>
                               <td>{dataobject.endpoints_straight_line_distance}</td>
                               <td>{dataobject.vendor}</td>
                               <td>{dataobject.average_power}</td>
                               <td>{dataobject.average_velocity}</td>
                               <td>{dataobject.average_gct}</td>
                               <td>{dataobject.average_stride_time}</td>
                               <td>{dataobject.average_stride_length}</td>
                               <td>{dataobject.average_flight_time}</td>
                               <td>{dataobject.average_kvert}</td>
                               <td>{dataobject.weighted_load}</td>
                               <td>{dataobject.w5sec}</td>
                               <td>{dataobject.w15sec}</td>
                               <td>{dataobject.w30sec}</td>
                               <td>{dataobject.w1min}</td>
                               <td>{dataobject.w3min}</td>
                               <td>{dataobject.w5min}</td>
                               <td>{dataobject.w9min}</td>
                               <td>{dataobject.w10min}</td>
                               <td>{dataobject.w20min}</td>
                               <td>{dataobject.w30min}</td>
                               <td>{dataobject.w1hr}</td>
                               <td>{dataobject.duration_stop}</td>
                               <td>{dataobject.duration_walk}</td>
                               <td>{dataobject.duration_run}</td>
                               <td>{dataobject.duration_zone_0_walk}</td>
                               <td>{dataobject.duration_zone_1_walk}</td>
                               <td>{dataobject.duration_zone_2_walk}</td>
                               <td>{dataobject.duration_zone_3_walk}</td>
                               <td>{dataobject.duration_zone_4_walk}</td>
                               <td>{dataobject.duration_zone_5_walk}</td>
                               <td>{dataobject.duration_zone_0_run}</td>
                               <td>{dataobject.duration_zone_1_run}</td>
                               <td>{dataobject.duration_zone_2_run}</td>
                               <td>{dataobject.duration_zone_3_run}</td>
                               <td>{dataobject.duration_zone_4_run}</td>
                               <td>{dataobject.duration_zone_5_run}</td>
                               <td>{dataobject.total_distance_stop}</td>
                               <td>{dataobject.total_distance_walk}</td>
                               <td>{dataobject.total_distance_run}</td>
                               <td>{dataobject.total_distance_zone_0_walk}</td>
                               <td>{dataobject.total_distance_zone_1_walk}</td>
                               <td>{dataobject.total_distance_zone_2_walk}</td>
                               <td>{dataobject.total_distance_zone_3_walk}</td>
                               <td>{dataobject.total_distance_zone_4_walk}</td>
                               <td>{dataobject.total_distance_zone_5_walk}</td>
                               <td>{dataobject.total_distance_zone_0_run}</td>
                               <td>{dataobject.total_distance_zone_1_run}</td>
                               <td>{dataobject.total_distance_zone_2_run}</td>
                               <td>{dataobject.total_distance_zone_3_run}</td>
                               <td>{dataobject.total_distance_zone_4_run}</td>
                               <td>{dataobject.total_distance_zone_5_run}</td>
                               <td>{dataobject.average_hr_stop}</td>
                               <td>{dataobject.average_hr_walk}</td>
                               <td>{dataobject.average_hr_run}</td>
                               <td>{dataobject.average_hr_zone_0_walk}</td>
                               <td>{dataobject.average_hr_zone_1_walk}</td>
                               <td>{dataobject.average_hr_zone_2_walk}</td>
                               <td>{dataobject.average_hr_zone_3_walk}</td>
                               <td>{dataobject.average_hr_zone_4_walk}</td>
                               <td>{dataobject.average_hr_zone_5_walk}</td>
                               <td>{dataobject.average_hr_zone_0_run}</td>
                               <td>{dataobject.average_hr_zone_1_run}</td>
                               <td>{dataobject.average_hr_zone_2_run}</td>
                               <td>{dataobject.average_hr_zone_3_run}</td>
                               <td>{dataobject.average_hr_zone_4_run}</td>
                               <td>{dataobject.average_hr_zone_5_run}</td>
                               <td>{dataobject.average_power_stop}</td>
                               <td>{dataobject.average_power_walk}</td>
                               <td>{dataobject.average_power_run}</td>
                               <td>{dataobject.average_power_zone_0_walk}</td>
                               <td>{dataobject.average_power_zone_1_walk}</td>
                               <td>{dataobject.average_power_zone_2_walk}</td>
                               <td>{dataobject.average_power_zone_3_walk}</td>
                               <td>{dataobject.average_power_zone_4_walk}</td>
                               <td>{dataobject.average_power_zone_5_walk}</td>
                               <td>{dataobject.average_power_zone_0_run}</td>
                               <td>{dataobject.average_power_zone_1_run}</td>
                               <td>{dataobject.average_power_zone_2_run}</td>
                               <td>{dataobject.average_power_zone_3_run}</td>
                               <td>{dataobject.average_power_zone_4_run}</td>
                               <td>{dataobject.average_power_zone_5_run}</td>
                             </tr>
                           )}
                         </Draggable>
                       ))}
                       {provider.placeholder}
                     </tbody>
                   )}
                 </Droppable>
                 </table>
                </DragDropContext>
               </div>
             </Tabs>
            </div>
      </div>
    );
  }

export default Dashboard;