import { Input } from "@chakra-ui/react"

type SearchbarProps = {
  value: string
  onChange: (value: string) => void
}

function Searchbar({ value, onChange }: SearchbarProps) {
  return (
    <Input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="max-w-[400px] mb-4"
      placeholder="Search for a dinosaur..."
    />
  )
}

export default Searchbar;
