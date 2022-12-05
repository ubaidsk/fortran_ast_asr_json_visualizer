function Navbar() {
    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className="flex-1">
                <button className="btn btn-ghost normal-case text-xl">LFortran</button>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><a href="https://github.com/lfortran/lfortran" className="text-3xl p-1"><i className="ri-github-fill"></i></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
