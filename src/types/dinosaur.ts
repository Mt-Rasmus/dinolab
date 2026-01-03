//   {
//     "scientific_name": "Abelisaurus",
//     "common_name": "Abelisaurus",
//     "meaning": "Abel's lizard",
//     "diet": "Carnivore",
//     "length_m": 7,
//     "weight_kg": 1500,
//     "height_m": 2.4,
//     "locomotion": "Bipedal",
//     "geological_period": "Late Cretaceous",
//     "lived_in": "Argentina",
//     "behavior_notes": "Large theropod",
//     "first_discovered": 1985,
//     "fossil_location": "Argentina",
//     "notable_features": "Short arms",
//     "intelligence_level": "Medium",
//     "source_link": "https://en.wikipedia.org/wiki/Abelisaurus",
//     "row_index": 0
//   },

export type DinosaurType =
  | "small theropod"
  | "large theropod"
  | "sauropod"
  | "ornithopod"
  | "ceratopsian"
  | "thyreophoran"
  | "pachycephalosaur"
  | "prosauropod"
  | "coelurosaur"
  | "dromaeosaurid"
  | "";

export type DinosaurDiet = "omnivorous" | "carnivorous" | "herbivorous" | "";

export type Dinosaur = {
  occurrence_no: number;
  name: string;
  diet: DinosaurDiet;
  type: DinosaurType;
  length_m: number | null;
  max_ma: number | null;
  min_ma: number | null;
  region: string;
  lng: number;
  lat: number;
  class: string;
  family: string | null;
};