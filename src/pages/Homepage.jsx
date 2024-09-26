import Layout from "../components/Layout";
import Article from "../components/Article";
import Blank from "../components/Blank";

import banner from "../assets/img/tile-home.png"

export default function Homepage() {
    return (
        <Layout bannerImage={banner}>
            <Article title="Warning!" style={{ "border": "var(--color-red) solid 2px", transform: "scale(1.25)", "margin-bottom": "4em", color: "var(--color-red)" }}>
                This website is under reconstruction!
            </Article>
            <Blank size="2em" />
            <Article title="Some title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate assumenda voluptatibus unde laborum quae?
            </Article>
            <Blank size="2em" />
            <Article>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea accusantium quam, molestias minima veniam quidem blanditiis fugit expedita consectetur porro officiis recusandae nam deserunt laboriosam quos assumenda eum repellat quae nesciunt ab? Veniam architecto, exercitationem ut sapiente voluptatibus eos eaque.
            </Article>
        </Layout>
    )
}
