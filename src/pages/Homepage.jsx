import Layout from "../components/Layout";
import Article from "../components/Article";
import Blank from "../components/Blank";

import banner from "../assets/img/tile-home.png"
import Storyline from "../components/Storyline";

export default function Homepage() {
    return (
        <Layout bannerImage={banner}>
            <Storyline>
                <Article title="Warning!" style={{ "border": "var(--color-red) solid 2px", transform: "scale(1.25)", "margin-bottom": "4em", color: "var(--color-red)" }}>
                    This website is under reconstruction!
                </Article>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur doloribus non omnis sint unde voluptatibus.
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet aperiam consequatur distinctio doloribus fuga illum ipsam laboriosam, minus necessitatibus non nostrum placeat provident quibusdam quidem quisquam suscipit ullam voluptatibus.</span><span>Asperiores aut, consequuntur culpa dolor eligendi, ex iure labore laboriosam laudantium molestiae nisi numquam obcaecati officiis pariatur perferendis placeat quae quis rem sint soluta, ullam ut vitae? Architecto, recusandae, voluptatibus!</span><span>Amet animi consequuntur dignissimos dolorum facere, iste libero non! Accusamus amet aut autem cupiditate dolorem dolorum et, exercitationem impedit iste itaque maxime molestiae, natus nihil odit quisquam rerum, sed temporibus.</span><span>Adipisci alias aliquid aperiam assumenda atque autem cum cumque deleniti dignissimos, distinctio earum eligendi error et ex illum laboriosam maxime nisi nulla placeat quae, quisquam quos repudiandae ullam velit voluptatum?</span>
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est maxime nemo, perspiciatis quisquam rerum veniam? Adipisci dolorem, earum labore maiores molestiae nemo. Assumenda autem dolor exercitationem maiores mollitia nam, odio. A dicta hic libero magni odit, quidem? Deserunt ea impedit, magni minus optio tenetur ullam vitae. Architecto commodi molestiae suscipit. Aperiam cum dolor dolorem dolores ex ipsam modi natus nisi, placeat praesentium rem tempora ullam. Exercitationem expedita hic impedit incidunt inventore, itaque magnam minima, perferendis quia sapiente velit veniam! Accusantium asperiores aspernatur aut commodi, doloribus ex expedita illo inventore, laborum molestiae, mollitia nemo omnis optio quisquam quo recusandae sapiente totam vel velit voluptatibus. Ad alias consequuntur enim error excepturi, modi nihil nobis nostrum odio optio, quis sapiente, tempora tenetur veniam?
                </p>
                <Article title="Some title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate assumenda voluptatibus unde laborum quae?
                </Article>
                <Article>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea accusantium quam, molestias minima veniam quidem blanditiis fugit expedita consectetur porro officiis recusandae nam deserunt laboriosam quos assumenda eum repellat quae nesciunt ab? Veniam architecto, exercitationem ut sapiente voluptatibus eos eaque.
                </Article>
            </Storyline>
        </Layout>
    )
}
