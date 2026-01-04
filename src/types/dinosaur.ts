export type DinosaurDiet = 'Carnivore' | 'Herbivore' | 'Omnivore';
export type DinosaurLocomotion = 'Bipedal' | 'Quadrupedal';
export type DinosaurIntelligence = 'Low' | 'Medium' | 'High';
export type GeologicalPeriod =
  | 'Early Jurassic'
  | 'Middle Jurassic'
  | 'Late Jurassic'
  | 'Early Cretaceous'
  | 'Late Cretaceous'
  | 'Middle Cretaceous'
  | string; // fallback if a period is missing

export type DinosaurType =
  | 'small theropod'
  | 'large theropod'
  | 'sauropod'
  | 'ornithopod'
  | 'ceratopsian'
  | 'thyreophoran'
  | 'pachycephalosaur'
  | 'prosauropod'
  | 'coelurosaur'
  | 'dromaeosaurid'
  | '';

export type Dinosaur = {
  row_index: number;
  scientific_name: string;
  common_name: string;
  meaning: string;
  diet: DinosaurDiet;
  length_m: number;
  weight_kg: number;
  height_m: number;
  locomotion: DinosaurLocomotion;
  geological_period: GeologicalPeriod;
  lived_in: string;
  behavior_notes: string;
  first_discovered: number;
  fossil_location: string;
  notable_features: string;
  intelligence_level: DinosaurIntelligence;
  source_link: string;
  // type: DinosaurType;
};

// export type DinosaurType =
//   | "small theropod"
//   | "large theropod"
//   | "sauropod"
//   | "ornithopod"
//   | "ceratopsian"
//   | "thyreophoran"
//   | "pachycephalosaur"
//   | "prosauropod"
//   | "coelurosaur"
//   | "dromaeosaurid"
//   | "";

// export type DinosaurDiet = "omnivorous" | "carnivorous" | "herbivorous" | "";

// export type Dinosaur = {
//   occurrence_no: number;
//   name: string;
//   diet: DinosaurDiet;
//   type: DinosaurType;
//   length_m: number | null;
//   max_ma: number | null;
//   min_ma: number | null;
//   region: string;
//   lng: number;
//   lat: number;
//   class: string;
//   family: string | null;
//   row_index: number
//   common_name: string
// };
