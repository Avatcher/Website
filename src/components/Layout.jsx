import Banner from './Banner'
import './Layout.css'


function NavButton(props) {
    return (
        <li><a href={props.href}>{props.text}</a></li>
    )
}


function Navigation() {
    return (
        <>
            <NavButton href="/about-me" text="About me" />
            <NavButton href="/projects" text="Projects" />
            <NavButton href="/contact" text="Contact" />
        </>
    )
}

function HeaderLogotype() {
    return (
        <h1 className="Header-Logotype">
            <NavButton href="/" text="avatcher.dev"/>
        </h1>
    )
}

function Header() {
    return (
        <header>
            <div className="Navigation">
                <HeaderLogotype/>
                <Navigation />
            </div>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <div className="Footer-Sections">
                <ul className="Navigation">
                    <h1>Pages</h1>
                    <NavButton href="/" text="Homepage"/>
                    <Navigation/>
                </ul>
                <ul className="Navigation">
                    <h1>Other</h1>
                    <NavButton href="https://github.com/Avatcher/Avatcher.github.io"
                               text="Website source"/>
                </ul>
            </div>
            <div className="Footer-Copyright">Copyright (c) 2024 Dmytro Pravdin</div>
        </footer>
    )
}

function Layout(props) {
    let bannerImage = props.bannerImage
    return (
        <>
            <Header/>
            {bannerImage ? <Banner img={bannerImage}/> : <></>}
            {props.children}
            <Footer/>
        </>
    )
}

export default Layout;
