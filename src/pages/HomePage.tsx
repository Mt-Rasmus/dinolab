
import useDinosaurs from "../hooks/useDinosaurs"
import { Link } from 'react-router-dom';

function HomePage() {
    const [ data, loading, error ] = useDinosaurs();
    // console.log('dinoData', data, loading, error)
    return(
        <div>
            { !!error && error }
            {!loading && data?.length > 0 &&
            data?.slice(0, 10)?.map(dino => (
                <li className="cursor-pointer" key={dino.row_index}>
                    <Link to={`/dinosaur/${dino.row_index}`}>
                        {dino.common_name}
                    </Link>
                </li>
            ))
            }
        </div>
    )
}

export default HomePage