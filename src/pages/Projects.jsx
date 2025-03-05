import React, { useEffect, useState } from "react";
import { FaGithub } from 'react-icons/fa';

function Projects() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/magalhaesds/repos")
            .then(response => response.json())
            .then(data => setRepos(data));
    }, []);

    return (
        <div className="min-h-screen flex justify-center p-5">
            <div className="bg-sky-200 h-auto max-w-4xl w-11/12 p-5 flex flex-col rounded-lg shadow-lg">
                <h1 className="text-xl font-bold mb-4">Meus Projetos</h1>
                
                <div className="flex flex-col items-start space-y-5">
                    {repos.map(repo => (
                        <div key={repo.id} className="flex w-full bg-white rounded-lg shadow p-4 relative">
                            <div className="w-3/4">
                                <h2 className="text-lg font-bold">{repo.name}</h2>
                                <p className="text-sm text-gray-600">{repo.description || "Sem descrição"}</p>
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 flex items-center mt-2">
                                    <FaGithub className="mr-2" /> Ver no GitHub
                                </a>
                            </div>
                            
                            <div className="w-1/4 flex justify-center items-center">
                                <div className="w-24 h-24 bg-gray-300 rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
                                    <img src="/src/assets/projeto-placeholder.jpg" alt="Projeto" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
