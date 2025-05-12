import './Header.css'
import felsephe from '../../assets/felsephe-icon.png'

export default function Header(){

    return(

        <header>

            <img src={felsephe} />

            <ul>

                <li><a href="https://tr.wikipedia.org/wiki/Felsefe" target="_blank">Wikipedia</a></li>
                {window.screen.width > 1200 ? <li>Animasyonlu Sayfa</li> : null}

            </ul>

        </header>

    )

}