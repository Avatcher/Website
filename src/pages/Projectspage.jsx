import Layout from "../components/Layout"
import Article from "../components/Article"

import banner from "../assets/img/tile-hobbies.png"

export default function Projectspage() {
    return (
        <Layout bannerImage={banner}>
            <Article>
                Hello!
            </Article>
        </Layout>
    )
}