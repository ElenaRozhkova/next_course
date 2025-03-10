import { useRouter } from 'next/router';
import styles from '../../styles/user.module.scss'
import MainContainer from '../../components/MainContainer';

export default function ({ user, todos }) {
    const { query } = useRouter()

    return (
        <MainContainer keywords={user.name}>
            <div className={styles.user}>
                <h1> users mit id {query.id} </h1>
                <h2 > Name {user.name}</h2>
                <h2> email: {user.email}</h2>
            </div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.userId}
                        {todo.title}
                    </li>
                ))}
            </ul>
        </MainContainer>

    )
}


export async function getServerSideProps({ params }) {
    console.log(params)
    // Fetch data from an API
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();

    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();

    const userTodos = todos.filter(todo => todo.userId === Number(params.id));

    // Pass data to the page via props
    return {
        props: {
            user,
            todos: userTodos,
        },
    };
}

