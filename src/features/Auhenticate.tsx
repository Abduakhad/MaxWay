import { useState } from 'react'
import Login from '../components/Login'
// import Profile from '../components/Profil'
import SignUpForm from '../components/SingUpForm'

const Auhenticate = () => {
	const [isLoggedIn, setLoggedIn] = useState(true)
 console.log(setLoggedIn)

	if (isLoggedIn) {
		return <Login />
	}

	return <SignUpForm  onLoggedIn={() => setLoggedIn(!isLoggedIn)}  />
}

export default Auhenticate
