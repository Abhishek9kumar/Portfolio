import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Profilelink(props) {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer" className="scale-hover icon-link icon-size">
            <FontAwesomeIcon className="px-1 icon-size" icon={props.icon} />
        </a>
    );
}
