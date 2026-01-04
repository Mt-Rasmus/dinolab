import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import type { Dinosaur } from '../types/dinosaur';

export default function useDinosaurs(): UseQueryResult<Dinosaur[], Error> {
  return useQuery({
    queryKey: ['dinosaurs'],
    queryFn: async (): Promise<Dinosaur[]> => {
      const res = await fetch('/dinos2.json');
      if (!res.ok) throw new Error('Network error');
      return res.json();
    },
    staleTime: Infinity, // 🔑 loaded once
  });
}
