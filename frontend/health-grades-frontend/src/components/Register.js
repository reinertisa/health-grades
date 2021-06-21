import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Register = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('1-25');
    const history = useHistory();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        const response = await axios.post('http://localhost:8080/api/user', {
            firstName, lastName, email, age
        });

        history.push('/symptoms')
        console.log(response);
        
    }

    return (
        <div className="register">
            <h2>Register with Health Grade</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">Enter first name</label>
                <input
                    type="text"
                    id="firstName"
                    required
                    value= { firstName }
                    onChange= {(e) => setFirstName(e.target.value)} 
                />
                <label htmlFor="lastName">Enter last name</label>
                <input
                    type="text"
                    id="lastName"
                    required
                    value= { lastName }
                    onChange= { (e) => setLastName(e.target.value) }
                />
                <label htmlFor="email">Enter your email</label>
                <input
                    type="email"
                    id="email"
                    required
                    value= { email }
                    onChange= { (e) => setEmail(e.target.value) }
                />
                <label htmlFor="age">Select your age</label>
                <select id="age"
                    value={ age }
                    onChange= { (e) => setAge(e.target.value) }
                >
                    <option value="1-25">1-25</option>
                    <option value="26-50">26-50</option>
                    <option value="51+">51+</option>
                </select>
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register;