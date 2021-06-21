import DatasetModal from './DatasetModal';
import { useState } from 'react';
import useFetch from '../services/useFetch';

const Dataset = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { data: dataset, isPending, Error } = useFetch('http://localhost:8080/api/dataset');

    console.log("dataset", dataset);


    return (
        <>
            <div className="dataset">
                <h2>Training dataset</h2>

                <button onClick={() => setIsOpen(true)}>Add Training Dataset</button>

                <DatasetModal open={ isOpen } onClose={() => {setIsOpen(false); window.location.reload()}} onCloseTwo = {() => setIsOpen(false)} /> 
            </div>

            <div className="dataset-list">
            <table>
                <thead>
                <tr>
                    <th>Sick name</th>
                    <th>Fever</th>
                    <th>Breath</th>
                    <th>Cough</th>
                    <th>Headache</th>
                </tr>
                </thead>
                <tbody>
                {!isPending && dataset.map(set => (
                    
                            <tr key={set.id}>
                                <td>{ set.sickName }</td>
                                <td>{ set.fever }</td>
                                <td>{ set.breath }</td>
                                <td>{ set.cough }</td>
                                <td>{ set.headache }</td>
                            </tr>

                ))}
                </tbody>
             </table>
            </div>
        </>
    )
}

export default Dataset;