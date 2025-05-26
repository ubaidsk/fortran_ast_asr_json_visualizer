import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl">LFortran</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 items-center">
                    <li>
                        <Link to="/" className="text-2xl p-2">
                            <i className="ri-home-4-line"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/jsonexplorer" className="p-2 font-semibold hover:text-primary-content">
                            Explorer
                        </Link>
                    </li>
                    <li>
                        <a 
                            href="https://github.com/ubaidsk/fortran_ast_asr_json_visualizer" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-2xl p-2"
                        >
                            <i className="ri-github-fill"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
