const Person = ({name, age, hobbies}) => {
    return (
        <p className="person">
            Learn some information about this person.
            {name.length > 6 ? <h2>Name: {name.substring(0,6)}</h2> : <h2>Name: {name}</h2>}
            Age: {age}
            <br></br>
            {age >= 18 ? <h3>Please go vote!</h3> : <h3>You must be 18</h3>}
            <br></br>
            <ul>
                {hobbies.map((h) => <li>{h}</li>)}
            </ul>
            
        </p>
    )
}