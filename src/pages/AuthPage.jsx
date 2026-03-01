import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AuthPage() {
  const [mode, setMode] = useState('login')

  return (
  <>
    <Navbar />
    <section className="section container auth-page">
      <h1>Login / Register</h1>
      <div className="auth-toggle">
       </div>
      <p className="note">UI only. No backend authentication is connected.</p>
    </section>
    <Footer />
    </>
  )
}
