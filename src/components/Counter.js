import React from "react";

function Counter() {

    // countというstateを定義する
    const [count, setCount] = React.useState(0);

    const down = () => {
        setCount(count - 1);
    }

    const up = () => {
        setCount(count + 1);
    }

    const jou = () => {
        setCount(count * count);
    }

    const clear = () => {
        setCount(count * 0);
    }

    return (
        <div>
            <div>{count}</div>
            <button onClick={up}>+</button>
            <button onClick={down}>-</button>
            <button onClick={jou}>**</button>
            <button onClick={clear}>0</button>
        </div>
    );
}

export default Counter;