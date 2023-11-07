import { Navigate, Outlet } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({ isAllowed, children, redirectTo = '/home' }) {
    if (!isAllowed) {
        return <Navigate to={redirectTo} />
    }

    return children ? children : (<Outlet />)
}
