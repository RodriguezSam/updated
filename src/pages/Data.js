import React, {useState, useEffect } from "react";
import "../App.css";
import { API } from 'aws-amplify';
import { listAthletes } from './graphql/queries';
import { createAthlete as createAthleteMutation, deleteAthlete as deleteAthleteMutation } from './graphql/mutations';

const initalFormState = { email: '', gender: '', phone_number: '', date_of_birth: '', full_name: ''}

const Data = () => {
    
    const [athletes, setAthletes] = useState([]);
    const [formData, setFormData] = useState(initalFormState);

    useEffect(() => {
        fetchAthletes();
    }, []);

    async function fetchAthletes() {
        const apiData = await API.graphql({ query: listAthletes });
        setAthletes(apiData.data.listAthletes.items);
        print(apiData);
    }

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

        <input
            onChange={e => setFormData({ ...formData, 'full_name': e.target.value})}
            placeholder="Full Name"
            value={formData.full_name}
        />
        <input
            onChange={e => setFormData({ ...formData, 'email': e.target.value})}
            placeholder="Email"
            value={formData.email}
        />
        <input
            onChange={e => setFormData({ ...formData, 'gender': e.target.value})}
            placeholder="Gender"
            value={formData.gender}
        />
        <input
            onChange={e => setFormData({ ...formData, 'phone_number': e.target.value})}
            placeholder="Phone Number"
            value={formData.phone_number}
        />
        <input
            onChange={e => setFormData({ ...formData, 'date_of_birth': e.target.value})}
            placeholder="Date of Birth"
            value={formData.date_of_birth}
        />
        <button onClick={createAthlete}>Create Athlete</button>
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