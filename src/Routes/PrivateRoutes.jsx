import { Outlet, Navigate } from "react-router-dom"

const PrivateRoutes = () => {
    return (
        <>
            {localStorage.getItem('login') ?
                <Navigate to={'/'} />
                :
                <Outlet />}
        </>
    )
}

export default PrivateRoutes