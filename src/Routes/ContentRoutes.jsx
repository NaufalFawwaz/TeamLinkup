import { Outlet } from "react-router-dom"
import { Navbar, Footer } from "../components"

const ContentRoutes = () => {
    return (
        <div className="w-full">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default ContentRoutes