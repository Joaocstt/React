function ListItem (props) {
    return (
    <li>
        <a 
            target="_blank"
            href={props.url}
            >
            <img src={props.img}
            alt={props.alt}
            />
        </a>
    </li>
    )
}

export default ListItem