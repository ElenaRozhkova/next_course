import A from "../components/A";
import Head from 'next/head';

const MainContainer = ({ children, keywords }) => {
    return (
        <>
            <Head>
                <meta keywords={"Lena next tutor" + " " + keywords}></meta>
                <title>{keywords}</title>
            </Head>
            <div className="navbar">
                <A href={"/"} text='Startseite'></A>
                <A href={"/users"} text='Users'></A>
            </div>
            <div>
                {children}
            </div>
            <style jsx >
                {`.navbar {
                background:green;
                padding:20px;}`}
            </style>
        </>
    );
}

export default MainContainer;
