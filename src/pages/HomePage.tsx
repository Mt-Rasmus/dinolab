import useDinosaurs from '../queries/useDinosaurs';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import Searchbar from '../components/Searchbar';

// ------------------------------------------------
// | DinoLab logo        [Search input]           |
// ------------------------------------------------
// | Filters                                     |
// | [Era ▼] [Diet ▼] [Size ▼]                    |
// ------------------------------------------------
// | 🦖 Card  🦕 Card  🦖 Card  🦕 Card            |
// | Card   Card   Card   Card                    |
// | Card   Card   Card   Card                    |
// ------------------------------------------------

function HomePage() {
  const { data = [], isLoading, error } = useDinosaurs();

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p>Loading dinosaurs…</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col mt-2 items-center">
      <Searchbar />
      <Button color="black" bg="#82828282">
        Dino Button
      </Button>

      {error?.message && <p className="text-red-500 mt-2">{error.message}</p>}

      <ul className="mt-4 space-y-1">
        {data.slice(0, 10).map((dino) => (
          <li key={dino.row_index} className="cursor-pointer hover:underline">
            <Link to={`/dinosaur/${dino.row_index}`}>{dino.common_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
