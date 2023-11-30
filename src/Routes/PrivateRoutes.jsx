import { Outlet, Navigate } from "react-router-dom"

const PrivateRoutes = () => {
    return (
        <>
            {localStorage.getItem('uid') ?
                <Navigate to={'/'} />
                :
                <Outlet />}
        </>
    )
}

export default PrivateRoutes