import { useAuth0 } from "@auth0/auth0-react";
import { determineEmailType } from '../logic';

export default function Profile() {
    const { user } = useAuth0();
    const userType = determineEmailType(user.email)

    return (
        <div>
            <p>{user.name}</p>
            <p>Usuario: {userType}</p>
            <p>{user.email}</p>
        </div>

    );
}