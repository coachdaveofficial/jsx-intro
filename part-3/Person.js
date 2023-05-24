const Person = ({name, age, hobbies}) => {
    return (
        <p className="person">
            Learn some information about this person.
            <h2>Name: {name.length > 6 ? name.substring(0,6) : name}</h2>
            Age: {age}
            <br></br>
            <h3>{age >= 18 ? 'Please go vote!' : 'You must be 18'}</h3>
            <br></br>
            <ul>
                {hobbies.map((h) => <li>{h}</li>)}
            </ul>
            
        </p>
    )
}