export function IconCard(props) {
    return(
        <li className="four columns icon-card">
            <img className="image-icon" src={props.src} title="Your fantastic Title Tag" alt="Your fantastic Alt Tag"/>
            <h4>{props.h4}</h4> 
            <p>{props.p}</p>
        </li>
    );
}

export function GalleryCard(props) {
    return(
        <a className="zoom-cursor" href={props.href} title="What's That Click? 1">
            <img className="image-gallery" src={props.src}/>
        </a>
    );
}

export function CustomersCard(props) {
    return(
        <blockquote className="four columns">
            <q>{props.q}</q>
            <footer>
              <img className="customers-image" src={props.src} alt="John Doe"/>
              <p1>{props.p1}</p1>
              <p2>{props.p2}</p2>
            </footer>
          </blockquote>
    );
}