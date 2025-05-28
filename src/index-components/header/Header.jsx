import './Header.css'
import felsephe from '../../assets/felsephe-icon.png'

export default function Header(){

    return(

        <header style={{
            height: window.screen.width > 1200 ? "10em" : "auto",
            backgroundColor: window.screen.width > 1200 ? "transparent" : "#701C1C",
            color: "#F0EAD6"
        }}>

            {window.screen.width > 1200 ? <img src={felsephe} /> : <h1>Felse<strong>ph</strong>e</h1>}

            <ul>

                {window.screen.width > 1200 ? <li><a href="https://tr.wikipedia.org/wiki/Felsefe" target="_blank">Wikipedia</a></li> : null}
                <li style={{fontWeight: 800}}><a href={window.location.pathname == "/etik" ? "../" : "./etik"} target="_self">{window.location.pathname == "/etik" ? "Ana Sayfa" : "Etik"}</a></li>

            </ul>

        </header>

    )

}