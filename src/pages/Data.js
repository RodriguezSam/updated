import React, {useState, useEffect } from "react";
import "../App.css";
import awsconfig from './aws-exports';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listAthletes } from './graphql/queries';
import { createAthlete as createAthleteMutation, deleteAthlete as deleteAthleteMutation } from './graphql/mutations';

Amplify.configure(awsconfig);

const initalFormState = { email: '', gender: '', phone_number: '', date_of_birth: '', full_name: ''}

const Data = () => {
    
    const [athletes, setAthletes] = useState([]);
    const [formData, setFormData] = useState(initalFormState);

    useEffect(() => {
        fetchAthletes()
    })

    const fetchAthletes = async () => {
        // const apiData = await API.graphql({ query: listAthletes });
        // setAthletes(apiData.data.listAthletes.items);
        try {
            const athleteData = await API.graphql(graphqlOperation(listAthletes));
            const athleteList = athleteData.data.listAthletes.items;
            console.log('athlete list', athleteList);
            setAthletes(athleteList);
        } catch (error) {
            console.log('error on fetching athletes', error);
        }
    };

    async function createAthlete() {
        if (!formData.email || !formData.gender || !formData.phone_number || !formData.date_of_birth || !formData.full_name) return;
        await API.graphql({ query: createAthleteMutation, variables: { input: formData } });
        setAthletes([ ...athletes, formData ]);
        setFormData(initalFormState);
    }

    async function deleteAthlete({ id }) {
        const newAthletesArray = athletes.filter(athlete => athlete.id !== id);
        setAthletes(newAthletesArray);
        await API.graphql({ query: deleteAthleteMutation, variables: {input: {id } }});
    }

    return(
      <div>

        <h1>Data</h1>
        <div style={{marginBottom: 30}}>
            {
                athletes.map(athlete => (
                    <div key={athlete.id || athlete.team_id}>
                        <h2>{athlete.full_name}</h2>
                        <p>{athlete.date_of_birth}</p>
                        <button onClick={() => deleteAthlete(athlete)}>Delete Athlete</button>
                    </div>
                ))
            }    
        </div>
      </div>

    );

}
export default Data;