// JSX: JavaScript Syntax xml/extensible. It automatically suggests HTML tags and React components while typing.
// JSX is faster than JS from 0.1 seconds

import React from 'react';

function HelloJSX() {

    // Always Variable should declared outside of the return statement
    let name = "Rabindra Nath";

    let person = {
        name: "Govind",
        course: "Front-End"
    }

    let List = <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
    </ul>

    return (
        <div>
            <h1>Name: {name}</h1>

            {/* To apply JS or Script tag, always have to use {} */}
            {
                console.log(person)
        
            }

            <h2>Name: {person.name}</h2>
            <h2>Course: {person.course}</h2>

            {List}

        </div>
    );
}
export default HelloJSX;