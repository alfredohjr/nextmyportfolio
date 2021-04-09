import { Container } from './styles';

export default function AppIdeas(props) {

    const paths = props.props; 

    return (
            <Container>

                <div className="main">
                    {paths.map((p) => (
                        <a href={`/appideas/${p.file}`}>
                            <div key={p.file} className="card">
                                <div>
                                    <img src={p.wallpaper} />
                                </div>
                                <div className="title">{p.title}</div>
                                <div className="description">Descrição: {p.description}</div>
                                <hr />
                                <div className="date">publicado em: {p.post_in}</div>
                            </div>
                        </a>
                    ))
                }
                </div>
            </Container>
        )
    }