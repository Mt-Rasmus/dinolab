
import useDinosaurs from "../queries/useDinosaurs"
import { Link } from 'react-router-dom';

function HomePage() {
    const { data, isLoading, error } = useDinosaurs();
    // console.log('dinoData', data, loading, error)
    return(
        <div className="w-full h-full flex flex-col justify-center items-center">
            {error?.message && <p className="text-red-500">{error?.message}</p>}
            {!isLoading && (data ?? []) &&
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