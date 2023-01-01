import { useState } from "react";

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export const Batch2 = () => {
    console.log("batch");
    const [todos, setTodos] = useState<Todo[] | null>(null);
    const [isFin, setIsFin] = useState(false);


    const onClickExecuteApi = () => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => {
            setTodos(data);
            setIsFin(true);
        })

    }

    return (
        <div>
            <p>Batch(その他)(確認用)</p>
            <button onClick={onClickExecuteApi}>Update State</button>
            <p>isFin: {isFin ? "TRUE" : "FALSE"}</p>
            {todos?.map((t) => <p key={t.id}>{t.title}</p>)}
        </div>
    )
};