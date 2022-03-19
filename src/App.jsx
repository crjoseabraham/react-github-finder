import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {GithubProvider} from './context/github/GithubContext'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import About from './components/pages/About'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import {AlertProvider} from './context/alert/AlertContext'
import Alert from './components/layout/Alert'
import User from './components/pages/User'

function App() {
    return (
        <GithubProvider>
            <AlertProvider>
                <Router>
                    <div className='flex flex-col justify-between h-screen'>
                        <Navbar />
                        <main className='container mx-auto px-3 pb-12'>
                            <Alert />
                            <Routes>
                                <Route path='/' element={<Home />} />
                                <Route path='/about' element={<About />} />
                                <Route path='/user/:login' element={<User />} />
                                <Route path='/*' element={<NotFound />} />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </Router>
            </AlertProvider>
        </GithubProvider>
    )
}

export default App
