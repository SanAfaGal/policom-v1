import { useAuth0 } from "@auth0/auth0-react";

import ClipLoader from "react-spinners/ClipLoader";

import Profile from "../components/Profile"
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";

export default function Home() {
    const { isAuthenticated, isLoading } = useAuth0();
    

    if (isLoading) {
        return <ClipLoader color="green" />
    }

    return (
        <>
            {isAuthenticated ? (
                <div>
                    <LogoutButton />
                    <Profile />
                </div>
            ) : (<LoginButton />)}
        </>
    )
}
