import { Container } from './styles';

export default function AppIdeas(props) {

    const paths = props.props;
    
    paths.sort((a,b) => {
        if(a.post_in < b.post_in){
            return 1;
        }
        if(a.post_in > b.post_in){
            return -1
        }

        return 0
    })

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