import axios from 'axios'
import { useReducer, useEffect } from 'react'

const initialState = {
    users: [],
    loading: true,
    error: ''
}

const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_SUCCESS':
            return { ...state, users: action.payload, loading: false }
        case 'FETCH_ERROR':
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}

const Patient = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('http://localhost:8080/api/user')
            .then(res => {
                console.log(res)
                dispatch({type: 'FETCH_SUCCESS', payload: res.data})
            })
            .catch(err => {
                console.log(err)
                dispatch({type: 'FETCH_ERROR', payload: 'Something went wrong'})
            })
    }, [])


    return(
        <div className='dataset-list'>
            <h1>Patient Information</h1>
           
            <table>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Age</th>
                </tr>
                </thead>
                <tbody>
                {state.loading ? <tr><td>'...loading'</td></tr> : state.users.map(user => (
                    
                            <tr key={user.email}>
                                <td>{ user.firstName }</td>
                                <td>{ user.lastName }</td>
                                <td>{ user.email }</td>
                                <td>{ user.age }</td>
                            </tr>

                ))}
                </tbody>
             </table>
             {state.error ? <strong style={{backgroundColor: 'red'}}>{state.error}</strong> : null}
        </div>
    )

}

export default Patient