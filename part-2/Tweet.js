const Tweet = (props) => {
    return (
    <div className="tweet">
        <span class="author">
            @{props.username}
        </span>
        <br></br>
        <span>
            Name: {props.name}
        </span>
        <br></br>
        <span class="date">
            Date: {props.date}
        </span>
        <br></br>
        <span class="content">
            Message: {props.message}
        </span>
        <br></br>
    </div>
    )
}