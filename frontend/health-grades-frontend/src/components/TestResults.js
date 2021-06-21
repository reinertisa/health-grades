import { useParams } from 'react-router-dom';
import useFetch from '../services/useFetch';
import { Bar } from 'react-chartjs-2';

const TestResults = () => {

    const { email } = useParams();
    console.log(email);

    const { data : testResults, isPending, error } = useFetch(`http://localhost:8080/api/user/test/${email}`);
   
    
    return (
        <div className="dashboard">
            <h1>Dashboard Component</h1>
            {!isPending && <Bar
                data={{
                    labels: Object.keys(testResults.testResult),
                    datasets: [
                        {
                            label: 'Percentage of this illness',
                            data: Object.values(testResults.testResult),
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(255, 205, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(201, 203, 207, 0.2)'
                              ],
                            borderColor: [
                                'rgb(255, 99, 132)',
                                'rgb(255, 159, 64)',
                                'rgb(255, 205, 86)',
                                'rgb(75, 192, 192)',
                                'rgb(54, 162, 235)',
                                'rgb(153, 102, 255)',
                                'rgb(201, 203, 207)'
                              ],
                            borderWidth:1,
                            barPercentage: 0.8
                            
                        }
                    ]
                }}
                height={200}
                width={400}
                options={{ 
      
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                }
                            }
                        ]
                    } 
                }}
            />}
        </div>
    )
}

export default TestResults;