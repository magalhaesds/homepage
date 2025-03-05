import { useState } from 'react'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import headerBG from '/src/assets/headerBG.jpg'


import './App.css'

function App() {
	const [activePage, setActivePage] = useState('about')

  return (
	<>
		<header>

			<div className='h-32 w-screen relative'>

				<img src={headerBG} alt="header background" className='h-full w-full object-cover'/>

				<div className="absolute inset-0 flex items-end justify-start">

      				<h1 className="text-white text-4xl font-bold p-5">MagalhaesDS</h1>

    			</div>

			</div>

			<nav className='h-12 w-6/12 mx-auto flex items-center justify-center'>

				<ul className='flex gap-8'>

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

			<main className='h-screen xl:w-4xl w-full mx-auto fixed top-44 left-0 right-0'>
        		{activePage === "about" && <AboutMe />}
        		{activePage === "projects" && <Projects />}
        		{activePage === "contact" && <Contact />}
      		</main>

			<footer className='fixed bottom-0 left-1/2 transform -translate-x-1/2 p-4 bg-gray-200 rounded-t-md'>
				<h1>Desenvolvido por MagalhaesDS</h1>
			</footer>

		</header>
	</>
  )
}

export default App
