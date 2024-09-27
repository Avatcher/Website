import './Article.css'

function ArticleNavbar(props) {
    let title = props.title ? props.title : "";
    return (
        <div className="ArticleNavbar">
            <h1>{title}</h1>
            <div className="ArticleNavbar-Buttons">
                <div className="minimize"><span className="material-symbols-outlined">remove</span></div>
                <div className="fullscreen"><span className="material-symbols-outlined">stop</span></div>
                <div className="close"><span className="material-symbols-outlined">close</span></div>
            </div>
        </div>
    )
}

function Article(props) {
    let style = props.style ? props.style : {}
    return (
        <article style={style}>
            <ArticleNavbar title={props.title} />
            <div className="Article-Content">
                {props.children}
            </div>
        </article>
    )
}

export default Article;
