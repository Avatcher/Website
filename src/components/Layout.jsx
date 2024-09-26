import Banner from './Banner'
import './Layout.css'


function NavButton(props) {
    return (
        <a href={props.href}>{props.text}</a>
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
            <ul className="Navigation">
                <NavButton href="/" text="Homepage" />
                <Navigation />
            </ul>
        </footer>
    )
}

function Layout(props) {
    let bannerImage = props.bannerImage
    return (
        <>
            <Header />
            {bannerImage ? <Banner img={bannerImage} /> : <></>}
            <div className="Content">
                {props.children}
            </div>
            <Footer />
        </>
    )
}

export default Layout;
