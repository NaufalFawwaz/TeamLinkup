import { useEffect } from 'react'
import { Route, Routes, Outlet, useLocation } from 'react-router-dom'
import './App.css'
import { Home, Login, Event, Partner, EventDetail, Profile, FindTeam, Signup, Mentor, MentorProfile } from './pages'
import ContentRoutes from './Routes/ContentRoutes'
import Teams from './pages/Teams'
import PrivateRoutes from './Routes/PrivateRoutes'
import CreateDummy from './pages/CreateDummy'

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
          <Route element={<PrivateRoutes />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route element={<ContentRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/dmy" element={<CreateDummy />} />
            <Route path="/mentor" element={<Mentor />} />
            <Route path="/event" element={<Event />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/event/:id" element={<EventDetail />} />   
            <Route path="/profile/mentor/:id" element={<MentorProfile />} />   
            <Route path="/teams" element={<Teams />} /> 
            <Route path="/find-team" element={<FindTeam />} /> 
            <Route path="/profile" element={<Profile />} /> 
            <Route path="/profile/:name" element={<Profile />} /> 
          </Route>
        </Route>
    </Routes>
  )
}

export default App
