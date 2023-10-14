import { useEffect } from 'react'
import { Route, Routes, Outlet, useLocation } from 'react-router-dom'
import './App.css'
import { Home, Login, Event, Partner, EventDetail } from './pages'
import ContentRoutes from './Routes/ContentRoutes'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Outlet />;
}

function App() {
  return (
    <Routes>
        <Route element={<ScrollToTop />}>
          <Route path="/login" element={<Login />} />
          <Route element={<ContentRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/event" element={<Event />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/event/:id" element={<EventDetail />} />
          </Route>
        </Route>
    </Routes>
  )
}

export default App
