import ListItem from "./ListItem"

function Section (props) {
    console.log(props)
    return (
        <section>
            <div>
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
                <ul class={props.classname}>{props.children}</ul>
            </div>
        </section>
    )
}



export default Section