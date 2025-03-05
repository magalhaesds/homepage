import { useState } from 'react'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import headerBG from '/src/assets/headerBG.jpg'
import NavBar from './components/Navbar'


import './App.css'

function App() {
	const [activePage, setActivePage] = useState('about')

  return (
	<>

	<div className='overflow-hidden'>

		<header>

			<div className='h-32 w-full relative'>

				<img src={headerBG} alt="header background" className='h-full w-full object-cover'/>

				<div className="absolute inset-0 flex items-end justify-start">

      				<h1 className="text-white text-4xl font-bold p-5">MagalhaesDS</h1>

    			</div>

			</div>
		
		</header>

		<nav className='h-12 w-6/12 mx-auto flex items-center justify-center'>

			<ul className='flex gap-8 rounded bg-white'>

				<li>
					<button className='px-4 py-2 rounded transition-all duration-300 hover:bg-[#5ebad3] hover:text-white'
					onClick={() => setActivePage("about")}>Sobre mim</button>
				</li>

				<li>
					<button className='px-4 py-2 rounded transition-all duration-300 hover:bg-[#5ebad3] hover:text-white'
					onClick={() => setActivePage("projects")}>Projetos</button>
				</li>

				<li>
					<button onClick={() => window.open('/exemplo.pdf', '_blank')}
        			className="px-4 py-2 rounded transition-all duration-300 hover:bg-[#5ebad3] hover:text-white">
        				Currículo
   					</button>
				</li>

				<li>
					<button className='px-4 py-2 rounded transition-all duration-300 hover:bg-[#5ebad3] hover:text-white'
					onClick={() => setActivePage("contact")}>Contato</button>
				</li>

			</ul>
		

      	</nav>

		<hr className='border-gray-500' />

		<main className='h-full xl:w-6/12 mx-auto top-44 left-0 right-0'>
        	{activePage === "about" && <AboutMe />}
        	{activePage === "projects" && <Projects />}
        	{activePage === "contact" && <NavBar />}
      	</main>

		<footer className='flex justify-center items-center mx-auto bg-sky-300 h-12 w-64 rounded-t-md'>

			<h1>Desenvolvido por MagalhaesDS</h1>

		</footer>

	</div>
	</>
  )
}

export default App
