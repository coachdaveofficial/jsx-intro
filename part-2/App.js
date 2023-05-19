const App = () => {
    return (
        <div>
            <Tweet name="dave" username="coach" date={new Date().toDateString()} message="this is a test" />
            <Tweet name="hank" username="the_tank" date={new Date().toDateString()} message="woof!" />
            <Tweet name="nokia" username="crazy_lady" date={new Date().toDateString()} message="my birthday is soon!" />
        </div>
    )
}