import Link from "next/link";
import Head from 'next/head';
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {


    return (
        <MainContainer keywords={"Users"}>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </MainContainer>
    );
}

export default Users;

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    return {
        props: { users }, // will be passed to the page component as props
    }
}
