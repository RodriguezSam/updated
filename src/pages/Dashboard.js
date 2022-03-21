import React from "react";
import "../App.css";
import Tabs from "../components/Tabs";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useState } from "react";
import userdata from "../athleteInfo.json";
import { POST } from "../components/POST.js";


function Dashboard() {
  const [users, setUsers] = useState(userdata.data);

  const handleDragEnd = (result) => {
  if (!result.destination) return;
  let athleteInfo = Array.from(users);
  let [draggedItem] = athleteInfo.splice(result.source.index, 1);
  athleteInfo.splice(result.destination.index, 0, draggedItem);
  setUsers(athleteInfo);
};

return (
  <div>
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
         </div>
           <Tabs>
             <div label="USERS">
             <DragDropContext onDragEnd={handleDragEnd}>
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
                <POST />
              </table>
             </DragDropContext>
             </div>
             <div label="SNAPSHOTS">
              <DragDropContext onDragEnd={handleDragEnd}>
               <table>
                <thead>
                 <tr>
                 <th></th>
                  <th>ID</th>
                  <th>sample_rate</th>
                   <th>timestamp</th>
                   <th>acute_load_distance_based</th>
                   <th>chronic_load_distance_based</th>
                   <th>acwr_distance_based</th>
                   <th>acute_load_effort_based</th>
                   <th>chronic_load_effort_based</th>
                   <th>acwr_effort_based</th>
                   <th>critical_power</th>
                   <th>consistency</th>
                   <th>bmi</th>
                   <th>ground_dominance</th>
                   <th>stride_dominance</th>
                   <th>avg_weekly_distance</th>
                   <th>running_consistency</th>
                   <th>avg_running_days_week</th>
                   <th>running_experience</th>
                   <th>run_time_of_day</th>
                   <th>elevation_change</th>
                   <th>running_monotony</th>
                 </tr>
                </thead>
               <Droppable droppableId="droppable-1">
                 {(provider) => (
                   <tbody
                     className="text-capitalize"
                     ref={provider.innerRef}
                     {...provider.droppableProps}
                   >
                     {users?.map((user, index) => (
                       <Draggable
                         key={user.id}
                         draggableId={user.id}
                         index={index}
                       >
                         {(provider) => (
                           <tr {...provider.draggableProps} ref={provider.innerRef}>
                           <td {...provider.dragHandleProps}>~</td>
                             <td>{user.id}</td>
                             <td>{user.sample_rate}</td>
                             <td>{user.timestamp}</td>
                             <td>{user.acute_load_distance_based}</td>
                             <td>{user.chronic_load_distance_based}</td>
                             <td>{user.acwr_distance_based}</td>
                             <td>{user.acute_load_distance_based}</td>
                             <td>{user.chronic_load_effort_based}</td>
                             <td>{user.acwr_effort_based}</td>
                             <td>{user.critical_power}</td>
                             <td>{user.consistency}</td>
                             <td>{user.bmi}</td>
                             <td>{user.ground_dominance}</td>
                             <td>{user.stride_dominance}</td>
                             <td>{user.avg_weekly_distance}</td>
                             <td>{user.running_consistency}</td>
                             <td>{user.avg_running_days_week}</td>
                             <td>{user.running_experience}</td>
                             <td>{user.run_time_of_day}</td>
                             <td>{user.elevation_change}</td>
                             <td>{user.running_monotony}</td>
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
              <DragDropContext onDragEnd={handleDragEnd}>
               <table>
                <thead>
                 <tr>
                  <th></th>
                   <th>ID</th>
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
                     {users?.map((user, index) => (
                       <Draggable
                         key={user.name}
                         draggableId={user.name}
                         index={index}
                       >
                         {(provider) => (
                           <tr {...provider.draggableProps} ref={provider.innerRef}>
                             <td {...provider.dragHandleProps}>~</td>
                             <td>{user.id}</td>
                             <td>{user.utc_start_time}</td>
                             <td>{user.local_start_time}</td>
                             <td>{user.start_latitude}</td>
                             <td>{user.start_longitude}</td>
                             <td>{user.end_latitude}</td>
                             <td>{user.end_longitude}</td>
                             <td>{user.elevation_gain}</td>
                             <td>{user.elevation_loss}</td>
                             <td>{user.average_heartrate}</td>
                             <td>{user.maximum_heartrate}</td>
                             <td>{user.average_cadence}</td>
                             <td>{user.average_steps_per_min}</td>
                             <td>{user.total_step_count}</td>
                             <td>{user.distance}</td>
                             <td>{user.duration}</td>
                             <td>{user.elapsed_duration}</td>
                             <td>{user.average_pace_duration}</td>
                             <td>{user.average_pace_elapsed_duration}</td>
                             <td>{user.type}</td>
                             <td>{user.duration_moving}</td>
                             <td>{user.duration_not_moving}</td>
                             <td>{user.endpoints_straight_line_distance}</td>
                             <td>{user.vendor}</td>
                             <td>{user.average_power}</td>
                             <td>{user.average_velocity}</td>
                             <td>{user.average_gct}</td>
                             <td>{user.average_stride_time}</td>
                             <td>{user.average_stride_length}</td>
                             <td>{user.average_flight_time}</td>
                             <td>{user.average_kvert}</td>
                             <td>{user.weighted_load}</td>
                             <td>{user.w5sec}</td>
                             <td>{user.w15sec}</td>
                             <td>{user.w30sec}</td>
                             <td>{user.w1min}</td>
                             <td>{user.w3min}</td>
                             <td>{user.w5min}</td>
                             <td>{user.w9min}</td>
                             <td>{user.w10min}</td>
                             <td>{user.w20min}</td>
                             <td>{user.w30min}</td>
                             <td>{user.w1hr}</td>
                             <td>{user.duration_stop}</td>
                             <td>{user.duration_walk}</td>
                             <td>{user.duration_run}</td>
                             <td>{user.duration_zone_0_walk}</td>
                             <td>{user.duration_zone_1_walk}</td>
                             <td>{user.duration_zone_2_walk}</td>
                             <td>{user.duration_zone_3_walk}</td>
                             <td>{user.duration_zone_4_walk}</td>
                             <td>{user.duration_zone_5_walk}</td>
                             <td>{user.duration_zone_0_run}</td>
                             <td>{user.duration_zone_1_run}</td>
                             <td>{user.duration_zone_2_run}</td>
                             <td>{user.duration_zone_3_run}</td>
                             <td>{user.duration_zone_4_run}</td>
                             <td>{user.duration_zone_5_run}</td>
                             <td>{user.total_distance_stop}</td>
                             <td>{user.total_distance_walk}</td>
                             <td>{user.total_distance_run}</td>
                             <td>{user.total_distance_zone_0_walk}</td>
                             <td>{user.total_distance_zone_1_walk}</td>
                             <td>{user.total_distance_zone_2_walk}</td>
                             <td>{user.total_distance_zone_3_walk}</td>
                             <td>{user.total_distance_zone_4_walk}</td>
                             <td>{user.total_distance_zone_5_walk}</td>
                             <td>{user.total_distance_zone_0_run}</td>
                             <td>{user.total_distance_zone_1_run}</td>
                             <td>{user.total_distance_zone_2_run}</td>
                             <td>{user.total_distance_zone_3_run}</td>
                             <td>{user.total_distance_zone_4_run}</td>
                             <td>{user.total_distance_zone_5_run}</td>
                             <td>{user.average_hr_stop}</td>
                             <td>{user.average_hr_walk}</td>
                             <td>{user.average_hr_run}</td>
                             <td>{user.average_hr_zone_0_walk}</td>
                             <td>{user.average_hr_zone_1_walk}</td>
                             <td>{user.average_hr_zone_2_walk}</td>
                             <td>{user.average_hr_zone_3_walk}</td>
                             <td>{user.average_hr_zone_4_walk}</td>
                             <td>{user.average_hr_zone_5_walk}</td>
                             <td>{user.average_hr_zone_0_run}</td>
                             <td>{user.average_hr_zone_1_run}</td>
                             <td>{user.average_hr_zone_2_run}</td>
                             <td>{user.average_hr_zone_3_run}</td>
                             <td>{user.average_hr_zone_4_run}</td>
                             <td>{user.average_hr_zone_5_run}</td>
                             <td>{user.average_power_stop}</td>
                             <td>{user.average_power_walk}</td>
                             <td>{user.average_power_run}</td>
                             <td>{user.average_power_zone_0_walk}</td>
                             <td>{user.average_power_zone_1_walk}</td>
                             <td>{user.average_power_zone_2_walk}</td>
                             <td>{user.average_power_zone_3_walk}</td>
                             <td>{user.average_power_zone_4_walk}</td>
                             <td>{user.average_power_zone_5_walk}</td>
                             <td>{user.average_power_zone_0_run}</td>
                             <td>{user.average_power_zone_1_run}</td>
                             <td>{user.average_power_zone_2_run}</td>
                             <td>{user.average_power_zone_3_run}</td>
                             <td>{user.average_power_zone_4_run}</td>
                             <td>{user.average_power_zone_5_run}</td>
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
             <div label="SAMPLES">
              <DragDropContext onDragEnd={handleDragEnd}>
               <table>
                <thead>
                 <tr>
                   <th></th>
                   <th>ID</th>
                   <th>workout</th>
                   <th>elapsed_time</th>
                   <th>elevation</th>
                   <th>local_time</th>
                   <th>latitude</th>
                   <th>longitude</th>
                   <th>flight_time</th>
                   <th>gct</th>
                   <th>grade</th>
                   <th>heartrate</th>
                   <th>kvert</th>
                   <th>cadence</th>
                   <th>moving</th>
                   <th>power</th>
                   <th>speed</th>
                   <th>stride_length</th>
                   <th>stride_time</th>
                   <th>bearing</th>
                   <th>temperature</th>
                   <th>ehpe</th>
                   <th>velocity</th>
                   <th>vertical_speed</th>
                   <th>weighted_effort</th>
                   <th>device_paused</th>
                   <th>device_start_event</th>
                   <th>device_stop_event</th>
                   <th>device_event_time</th>
                 </tr>
                </thead>
               <Droppable droppableId="droppable-1">
                 {(provider) => (
                   <tbody
                     className="text-capitalize"
                     ref={provider.innerRef}
                     {...provider.droppableProps}
                   >
                     {users?.map((user, index) => (
                       <Draggable
                         key={user.id}
                         draggableId={user.id}
                         index={index}
                       >
                         {(provider) => (
                           <tr {...provider.draggableProps} ref={provider.innerRef}>
                             <td {...provider.dragHandleProps}>~</td>
                             <td>{user.id}</td>
                             <td>{user.workout}</td>
                             <td>{user.elapsed_time}</td>
                             <td>{user.elevation}</td>
                             <td>{user.local_time}</td>
                             <td>{user.latitude}</td>
                             <td>{user.longitude}</td>
                             <td>{user.flight_time}</td>
                             <td>{user.gct}</td>
                             <td>{user.grade}</td>
                             <td>{user.heartrate}</td>
                             <td>{user.kvert}</td>
                             <td>{user.cadence}</td>
                             <td>{user.moving}</td>
                             <td>{user.power}</td>
                             <td>{user.speed}</td>
                             <td>{user.stride_length}</td>
                             <td>{user.stride_time}</td>
                             <td>{user.bearing}</td>
                             <td>{user.temperature}</td>
                             <td>{user.ehpe}</td>
                             <td>{user.velocity}</td>
                             <td>{user.vertical_speed}</td>
                             <td>{user.weighted_effort}</td>
                             <td>{user.device_paused}</td>
                             <td>{user.device_start_event}</td>
                             <td>{user.device_stop_event}</td>
                             <td>{user.device_event_time}</td>
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
    
  );

}

export default Dashboard;
