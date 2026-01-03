
import useDinosaurs from "../hooks/useDinosaurs"

function HomePage() {
    const [ data, loading, error ] = useDinosaurs();
    // console.log('dinoData', data, loading, error)
    return(
        <div>
            Home Page
        </div>
    )
}

export default HomePage