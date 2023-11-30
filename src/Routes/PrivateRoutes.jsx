import { Outlet, Navigate } from "react-router-dom"

const PrivateRoutes = () => {
    return (
        <>
            {sessionStorage.getItem('uid') ?
                <Navigate to={'/'} />
                :
                <Outlet />}
        </>
    )
}

export default PrivateRoutes