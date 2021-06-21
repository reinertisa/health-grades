const SymptomList = (props) => {

    const symptoms = props.symptoms;

    return (
        <div className="symptom-list">
            {symptoms.map(symptom => (
                <div className="symptom-preview" key={symptom.email}>
                    <h1>{symptom.firstName}</h1>
                    <h2>{symptom.lastName}</h2>
                </div>
            ))}
        </div>
    )

}

export default SymptomList;