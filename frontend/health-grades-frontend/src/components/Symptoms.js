import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Symptoms = () => {

    const [email, setEmail] = useState('')
    const [fever, setFever] = useState('No');
    const [breath, setBreath] = useState('No');
    const [cough, setCough] = useState('No');
    const [headache, setHeadache] = useState('No');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit =  (e) =>{
        e.preventDefault();

        setIsPending(true);
        
        fetch('http://localhost:8080/api/disease', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({fever, breath, cough, headache, user: {email}})
        }).then((res) => {
            console.log(res)
            setIsPending(false);
            history.push(`/results/${email}`);
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
        <div className="symptoms">
            <h2>What are your symptoms?</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Enter your email</label>
                <input
                    type="email"
                    id="email"
                    required
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                />

                <label htmlFor="fever">Have you had a fever?</label>
                <select 
                    id="fever" 
                    value = { fever }
                    onChange={ (e) => setFever(e.target.value) }
                >
                    <option value="Often">Often</option>
                    <option value="Sometimes">Sometimes</option>
                    <option value="No">No</option>
                </select>

                <label htmlFor="breath">Have you had shortness of breath</label>
                <select 
                    id="breath"
                    value= { breath } 
                    onChange={ (e) => setBreath(e.target.value) }
                >
                    <option value="Often">Often</option>
                    <option value="Sometimes">Sometimes</option>
                    <option value="No">No</option>
                </select>

                <label htmlFor="cough">Have you had a cough</label>
                <select
                    id="cough"
                    value= { cough }
                    onChange = { (e) => setCough(e.target.value) }
                >
                    <option value="Often">Often</option>
                    <option value="Sometimes">Sometimes</option>
                    <option value="No">No</option>
                </select>

                <label htmlFor="headache">Have you had a headache</label>
                <select
                    id="headache"
                    value= { headache }
                    onChange = { (e) => setHeadache(e.target.value) }
                >
                    <option value="Often">Often</option>
                    <option value="Sometimes">Sometimes</option>
                    <option value="No">No</option>
                </select>

                { !isPending && <button>Add Symptoms</button> }
                { isPending && <button>Adding Symptoms...</button> }
            </form>
        </div>
    )
}

export default Symptoms;
