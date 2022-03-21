import React from 'react';

class POST extends React.Component {
    constructor(props) {
        super(props);

		this.state = {
			request_token: null,
            id: null,
            email: null,
            first_name: null,
            last_name: null,
            birth_date: null,
            birth_year: null,
            gender: null,
            height: null,
            weight: null,
            created_on: null,
            updated_on: null
		};

    }
    
    componentDidMount() {

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

        fetch('https://www.pwrlab.com/api/iaaa/login', POST)
            .then(response => { 
                if (!response.ok){
                console.log('error')
            }  
            return response.json()
            })
            .then(poster => { 
                    console.log( poster)
                    this.setState( { request_token: poster.data.access_token });
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
                     console.log(getter[0].id)
                     this.setState({ id: JSON.stringify(getter[0].id)})
                     this.setState({ email: JSON.stringify(getter[0].email)})
                     this.setState({ first_name: JSON.stringify(getter[0].first_name)})
                     this.setState({ last_name: JSON.stringify(getter[0].last_name)})
                     this.setState({ birth_date: JSON.stringify(getter[0].birth_date)})
                     this.setState({ birth_year: JSON.stringify(getter[0].birth_year)})
                     this.setState({ gender: JSON.stringify(getter[0].gender)})
                     this.setState({ height: JSON.stringify(getter[0].height)})
                     this.setState({ weight: JSON.stringify(getter[0].weight)})
                     this.setState({ created_on: JSON.stringify(getter[0].created_on)})
                     this.setState({ updated_on: JSON.stringify(getter[0].updated_on)})
                    })
            });
    }

    render() {
        const{ id } = this.state;
        const{ email } = this.state;
        const{ first_name } = this.state;
        const{ last_name } = this.state;
        const{ birth_date } = this.state;
        const{ birth_year } = this.state;
        const{ gender } = this.state;
        const{ height } = this.state;
        const{ weight } = this.state;
        const{ created_on } = this.state;
        const{ updated_on } = this.state;
      
        return (
            <tr>
                           <td>~</td>
                          <td>{id}</td>
                          <td>{email}</td>
                          <td>{first_name}</td>
                          <td>{last_name}</td>
                          <td>{birth_date}</td>
                          <td>{birth_year}</td>
                          <td>{gender}</td>
                          <td>{height}</td>
                          <td>{weight}</td>
                          <td>{created_on}</td>
                          <td>{updated_on}</td>
            </tr>
        );
    }
}

export { POST }; 