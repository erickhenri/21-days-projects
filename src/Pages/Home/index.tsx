import { Link } from 'react-router-dom';
import HelloWordPrint from "../../assets/HelloWordPrintPage.png"

import './styles.css'

export function Home() {
    return (
        <div className="Home">
            <header>
                <h1>Projetos em 21 dias</h1>
            </header>

            <div className="projects">
            <Link to={'/HelloWord'}>
                <img src={HelloWordPrint} alt="" />
            </Link>
        </div>
        </div>

    )
}