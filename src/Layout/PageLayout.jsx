import { Navbar, Footer } from "../components"

const PageLayout = ({ children }) => {
    return (
        <div className='w-full'>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default PageLayout