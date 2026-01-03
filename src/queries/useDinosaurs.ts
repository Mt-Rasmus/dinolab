// import { useQuery } from '@tanstack/react-query'
// import type { Dinosaur } from '../types/dinosaur'

// export function useDinosaurs() {
//   return useQuery({
//     queryKey: ['dinosaurs'],
//     queryFn: async (): Promise<Dinosaur[]> => {
//       const res = await fetch('/dinos2.json')
//       if (!res.ok) throw new Error('Network error')
//       return res.json()
//     },
//     staleTime: Infinity, // 🔑 loaded once
//   })
// }

// use like this:
// function DinosaurList() {
//   const { data, isLoading, error } = useDinosaurs()

//   if (isLoading) return <p>Loading…</p>
//   if (error) return <p>Error</p>

//   return <ul>{data.map(d => <li key={d.scientific_name}>{d.common_name}</li>)}</ul>
// }

