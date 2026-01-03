
import { useEffect, useState } from 'react';
import { type Dinosaur } from '../types/dinosaur'

export default function useDinosaurs(): [Dinosaur[], boolean, string | null] {
    const [data, setData] = useState<Dinosaur[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    useEffect(() => {
        const load = async () => {
            try {
                setLoading(true)
                const res = await fetch('/dinos2.json')
                const json = await res.json();
                console.log('dinosaurData', json);
                setData(json)
            } catch(e) {
                setError('Failed to load Dinosaurs')
                console.error(e)
            } finally {
                setLoading(false)
            }

        }
        load();
    }, [])
    return [ data, loading, error ];
}