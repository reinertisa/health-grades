import ReactDom from 'react-dom';
import { useState } from 'react';
import axios from 'axios';

const DatasetModal = ({ open, onClose, onCloseTwo }) => {

    const [sickName, setSickName] = useState('');
    const [fever, setFever] = useState('No');
    const [breath, setBreath] = useState('No');
    const [cough, setCough] = useState('No');
    const [headache, setHeadache] = useState('No');

    if (!open) return null;


    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.post('http://localhost:8080/api/dataset', {
            sickName, fever, breath, cough, headache
        })

        onClose();

        console.log(response);
    }


    return ReactDom.createPortal(
        <>
            <div className="overlay" onClick={onCloseTwo}></div>
            <div className="dataset-modal">

                <div className="create-dataset">
                    <form onSubmit = { handleSubmit }>

                        <label htmlFor="sickName">Enter information about the illness</label>
                        <input
                            type="text"
                            id="sickName"
                            value = { sickName }
                            onChange = { (e) => setSickName(e.target.value) }
                            placeholder="illness name"
                        />

                        <label htmlFor="fever">Fever</label>
                        <select
                            id="fever"
                            value = { fever }
                            onChange = { (e) => setFever(e.target.value) }
                        >
                            <option value="Common">Common</option>
                            <option value="Sometimes">Sometimes</option>
                            <option value="No">No</option>
                        </select> 

                        <label htmlFor="breath">Shortness of breath</label>
                        <select
                            id="breath"
                            value = { breath }
                            onChange = { (e) => setBreath(e.target.value) }
                        >
                            <option value="Common">Common</option>
                            <option value="Sometimes">Sometimes</option>
                            <option value="No">No</option>
                        </select>

                        <label htmlFor="cough">Cough</label>
                        <select
                            id="cough"
                            value = { cough }
                            onChange = { (e) => setCough(e.target.value) }
                        >
                            <option value="Common">Common</option>
                            <option value="Sometimes">Sometimes</option>
                            <option value="No">No</option>
                        </select>

                        <label htmlFor="headache">Headache</label>
                        <select 
                            id="headache"
                            value = { headache }
                            onChange = { (e) => setHeadache(e.target.value) }
                        >
                            <option value="Common">Common</option>
                            <option value="Sometimes">Sometimes</option>
                            <option value="No">No</option>
                        </select>
                        <button>Add Dataset</button>
                    </form>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )


}

export default DatasetModal;