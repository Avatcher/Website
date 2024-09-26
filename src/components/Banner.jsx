import './Banner.css'

function Banner(props) {
    let styles = {
        "background-image": `url(${props.img})`
    }
    return (
        <>
            <div className="Banner" style={styles}></div>
        </>
    )
}

export default Banner;
