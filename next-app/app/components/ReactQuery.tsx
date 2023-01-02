"use client"
import axios from "axios";
import { Suspense, useState, useTransition } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { AlbumList } from "./AlbumList";
import { Sidebar } from "./Sidebar";
import { TodoList } from "./TodoList";

type Tabs = 'todo' | 'album';

interface Album {
    userId: number;
    id: number;
    title: string;
}

const fetchAlbums = async () => {
    return await axios.get<Album[]>("https://jsonplaceholder.typicode.com/albums").then((res) => res.data)
}

export const ReactQuery = () => {
    const [selectedTab, setSelectedTab] = useState<Tabs>('todo');
    const [isPending, startTransition] = useTransition();

    const buttonStyle = {
        padding: '12px',
        fontSize: '16px',
        border: 'none',
        opacity: isPending ? 0.5 : 1,
    }
    const albumButtonStyle = {
        ...buttonStyle,
        backgroundColor: selectedTab === 'album' ? 'royalblue' : 'white',
        color: selectedTab === 'album' ? 'white' : 'black',
    }
    const todoButtonStyle = {
        ...buttonStyle,
        backgroundColor: selectedTab === 'todo' ? 'royalblue' : 'white',
        color: selectedTab === 'todo' ? 'white' : 'black',
    }

    const onClickTabButton = (tab: Tabs) => {
        startTransition(() => {
            setSelectedTab(tab);
        });
    }

    return (
        <div>
            <p>ReactQuery</p>
            <div style={{display: "flex", padding: "16px"}}>
                <Sidebar />
                <div style={{flexGrow: 1}}>
                    <ErrorBoundary fallback={<h1>suspense-list-error!!!!!</h1>}>
                        <Suspense fallback={<p>suspense-list-loading...</p>}>
                            <button style={todoButtonStyle} onClick={() => onClickTabButton('todo')}>Todo</button>
                            <button style={albumButtonStyle} onClick={() => onClickTabButton('album')}>Album</button>
                            {selectedTab === 'todo' ? <TodoList /> : <AlbumList />}
                        </Suspense>
                    </ErrorBoundary>
                </div>
            </div>
        </div>
    )
};