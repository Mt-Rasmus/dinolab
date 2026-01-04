import { useParams } from 'react-router-dom';
import useDinosaurs from '../queries/useDinosaurs';
import type { Dinosaur } from '../types/dinosaur';

function DinosaurPage() {
  const { id } = useParams<{ id: string }>();
  const { data } = useDinosaurs();
  const dinosaur: Dinosaur | undefined = data?.find((d) => d.row_index === Number(id));
  return (
    <div>
      {dinosaur && (
        <div className="flex flex-col">
          <div className="text-2xl mb-2">{dinosaur.common_name}</div>
          <div>{dinosaur.geological_period}</div>
        </div>
      )}
    </div>
  );
}

export default DinosaurPage;
