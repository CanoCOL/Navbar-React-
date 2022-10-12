import { NavBar } from '../NavBar.jsx'
import './Vista.css'
export function Vista() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <NavBar/>
                    </div>
                    <div className="col-10">
                        {/* Aqui va tu codigo! */}
                    </div>
                </div>
            </div>
        </>
    )
}