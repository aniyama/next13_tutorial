import { useState } from "react";

export const Batch1 = () => {
    console.log("batch");
    const [state1, setState1] = useState(0);
    const [state2, setState2] = useState(0);

    const onClickUpdate = () => {
        console.log(state1);
        setState1((pre) => pre + 1);
        console.log(state1);
        setState2((pre) => pre + 1);
    }

    return (
        <div>
            <p>Batch(イベントハンドラー)</p>
            <button onClick={onClickUpdate}>Update State</button>
            <p>State1: {state1}</p>
            <p>State2: {state2}</p>
        </div>
    );
};