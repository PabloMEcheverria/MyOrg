import "./footer.css"

export default function Footer () {
    return  <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>
                <div className="media">
                    <a href="https://www.aluracursos.com/">
                        <img src="/img/facebook.png" alt="Facebook"></img>
                    </a>
                    <a href="https://www.aluracursos.com/">
                        <img src="/img/twitter.png" alt="Twitter"></img>
                    </a>
                    <a href="https://www.aluracursos.com/">
                        <img src="/img/instagram.png" alt="Instagram"></img>
                    </a>
                </div>
                <img src="/img/Logo.png" alt="Org"></img>
                <strong>Desarrollado por Pablo</strong>
            </footer>
}