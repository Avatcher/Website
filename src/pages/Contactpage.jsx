import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Layout from "../components/Layout";
import Storyline from "../components/Storyline";

import banner from "../assets/img/tile-contact.png"
import {
    faDiscord, faGithub, faYoutube, faSteam
} from "@fortawesome/free-brands-svg-icons"

import "./Contactpage.css"
import Article from "../components/Article";

function OptionalAnchor(props) {
    return props.href
        ? (
            <a {...props}>
                {props.children}
            </a>
        ) : (
            <div {...props}>
                {props.children}
            </div>
        )
}

function Contact(props) {
    const name = props.name;
    const icon = props.icon;
    const href = props.href;
    const className = "Contact " + (props.className || "");
    return (
        <OptionalAnchor className={className} href={href} target="_blank" rel="noreferrer">
            <span>
                <FontAwesomeIcon icon={icon}/> {name}
            </span>
        </OptionalAnchor>
    )
}

export default function Contactpage() {
    return (
        <Layout bannerImage={banner}>
            <Storyline style={{"max-width": "60vw", wrap: "nowrap"}}>
                <Article title="Contacts">
                    Here you can find ways to contact me or just get
                    my profile in different social media.
                </Article>
                <div className="centered">
                    <Contact name="Github"
                             icon={faGithub}
                             href="https://github.com/Avatcher"/>
                    <Contact name="YouTube"
                             icon={faYoutube}
                             href="https://www.youtube.com/@Avatcherr"/>
                    <Contact name="Steam"
                             icon={faSteam}
                             href="https://steamcommunity.com/id/avatch"/>
                    <Contact name="Discord"
                             icon={faDiscord}
                             href="https://discordapp.com/users/354297822691983371"/>
                </div>
            </Storyline>
        </Layout>
    )
}
