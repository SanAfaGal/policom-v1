import { useAuth0 } from "@auth0/auth0-react";
import Home from "../pages/Home";
import LoginButton from "./LoginButton";

export default function Login() {

    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }
    
    return (
        <>
            {isAuthenticated ? (<Home />) : (<LoginButton />)}
        </>
    )
}