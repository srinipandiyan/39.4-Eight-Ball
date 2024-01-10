import React, { useState } from "react";
import "./EightBall.css";

const [prompt] = [
    { msg: "Think of a Question.", color: "black",}
]

const responses = [
    { "msg": "It is certain.", "color": "green" },
    { "msg": "It is decidedly so.", "color": "green" },
    { "msg": "Without a doubt.", "color": "green" },
    { "msg": "Yes - definitely.", "color": "green" },
    { "msg": "You may rely on it.", "color": "green" },
    { "msg": "As I see it, yes.", "color": "green" },
    { "msg": "Most likely.", "color": "green" },
    { "msg": "Outlook good.", "color": "green" },
    { "msg": "Yes.", "color": "green" },
    { "msg": "Signs point to yes.", "color": "goldenrod" },
    { "msg": "Reply hazy, try again.", "color": "goldenrod" },
    { "msg": "Ask again later.", "color": "goldenrod" },
    { "msg": "Better not tell you now.", "color": "goldenrod" },
    { "msg": "Cannot predict now.", "color": "goldenrod" },
    { "msg": "Concentrate and ask again.", "color": "goldenrod" },
    { "msg": "Don't count on it.", "color": "red" },
    { "msg": "My reply is no.", "color": "red" },
    { "msg": "My sources say no.", "color": "red" },
    { "msg": "Outlook not so good.", "color": "red" },
    { "msg": "Very doubtful.", "color": "red" }
]

/**
 * Selects and returns random response from array parameter
*/

function getRandResp(arr) {
    let randIdx = Math.floor(Math.random() * arr.length);
    return arr[randIdx];
}

/**
 * Eightball: will display questiom prompt, then select a random response from set array
 */

function EightBall({ answers = responses}) {
    const [answer, setAnswer] = useState(prompt);

    function handleClick(e){
        setAnswer(getRandResp(responses));
    };

    return (
        <div
        className="EightBall"
        onClick={handleClick}
        style={{backgroundColor: answer.color }}
        >
            <b>{answer.msg}</b>
        </div>
    );
}

export default EightBall;