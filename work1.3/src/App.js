/* const App = () => {
    const course = "Half Stack application development";
    const part1 = {
        name: "Fundamentals of React",
        exercises: 10,
    };
    const part2 = {
        name: "Using props to pass data",
        exercises: 7,
    };
    const part3 = {
        name: "State of a component",
        exercises: 14,
    };

    return (
        <div>
            <h1>{course}</h1>
            <p>
                {part1.name} have {part1.exercises} times.
            </p>
            <p>
                {part2.name} have {part2.exercises} times.
            </p>
            <p>
                {part3.name} have {part3.exercises} times.
            </p>
        </div>
    );
};
*/

const App = () => {
    const course = "Half Stack application development";
    const parts = [
        {
            name: "Fundamentals of React",
            exercises: 10,
        },
        {
            name: "Using props to pass data",
            exercises: 7,
        },
        {
            name: "State of a component",
            exercises: 14,
        },
    ];

    return (
        <div>
            <h1>{course}</h1>
            <p>
                {parts[0].name} have {parts[0].exercises} times.
            </p>
            <p>
                {parts[1].name} have {parts[1].exercises} times.
            </p>
            <p>
                {parts[2].name} have {parts[2].exercises} times.
            </p>
        </div>
    );
};

export default App;
