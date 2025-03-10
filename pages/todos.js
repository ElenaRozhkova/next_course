import React from 'react';
import MainContainer from '../components/MainContainer';

const Todos = ({ todos }) => {
    return (
        <MainContainer keywords={"todos"}>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.userId}
                        {todo.title}
                    </li>
                ))}
            </ul>
        </MainContainer>
    );
}

export default Todos;


export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();

    return {
        props: { todos },
    }
}