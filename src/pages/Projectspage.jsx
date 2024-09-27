import Layout from "../components/Layout"
import Article from "../components/Article"

import banner from "../assets/img/tile-hobbies.png"
import Storyline from "../components/Storyline";

export default function Projectspage() {
    return (
        <Layout bannerImage={banner}>
            <Storyline>
                <Article>
                    Hello!
                </Article>
            </Storyline>
        </Layout>
    )
}