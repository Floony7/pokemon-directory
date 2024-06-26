interface NamedAPIResourceList {
    /** The total number of resources available from this API. */
    count: number;
    /** The URL for the next page in the list. */
    next: string;
    /** The URL for the previous page in the list. */
    previous: string;
    /** A list of named API resources. */
    results: NamedAPIResource[];
}
interface Language {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** Whether or not the games are published in this language. */
    official: boolean;
    /** The two-letter code of the country where this language is spoken. Note that it is not unique. */
    ios639: string;
    /** The two-letter code of the language. Note that it is not unique. */
    iso3166: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
}
interface APIResource {
    /** The URL of the referenced resource. */
    url: string;
}
interface Description {
    /** The localized description for an API resource in a specific language. */
    description: string;
    /** (Language) The language this name is in. */
    language: NamedAPIResource;
}
interface Effect {
    /** The localized effect text for an API resource in a specific language. */
    effect: string;
    /** (Language) The language this effect is in. */
    language: NamedAPIResource;
}
interface Encounter {
    /** The lowest level the Pokémon could be encountered at. */
    min_level: number;
    /** The highest level the Pokémon could be encountered at. */
    max_level: number;
    /** (EncounterConditionValue[]) A list of condition values that must be in effect for this encounter to occur. */
    condition_values: NamedAPIResource[];
    /** Percent chance that this encounter will occur. */
    chance: number;
    /** (EncounterMethod) The method by which this encounter happens. */
    method: NamedAPIResource;
}
interface FlavorText {
    /** The localized flavor text for an API resource in a specific language. */
    flavor_text: string;
    /** (Language) The language this name is in. */
    language: NamedAPIResource;
    /** (Version) The game version this flavor text is extracted from. */
    version: NamedAPIResource;
}
interface GenerationGameIndex {
    /** The internal id of an API resource within game data. */
    game_index: number;
    /** (Generation) The generation relevant to this game index. */
    generation: NamedAPIResource;
}
interface MachineVersionDetail {
    /** (Machine) The machine that teaches a move from an item. */
    machine: APIResource;
    /** (VersionGroup) The version group of this specific machine. */
    version_group: NamedAPIResource;
}
interface Name {
    /** The localized name for an API resource in a specific language. */
    name: string;
    /** (Language) The language this name is in. */
    language: NamedAPIResource;
}
interface NamedAPIResource {
    /** The name of the referenced resource. */
    name: string;
    /** The URL of the referenced resource. */
    url: string;
}
interface VerboseEffect {
    /** The localized effect text for an API resource in a specific language. */
    effect: string;
    /** The localized effect text in brief. */
    short_effect: string;
    /** (Language) The language this effect is in. */
    language: NamedAPIResource;
}
interface VersionEncounterDetail {
    /** (Version) The game version this encounter happens in. */
    version: NamedAPIResource;
    /** The total percentage of all encounter potential. */
    max_chance: number;
    /** A list of encounters and their specifics. */
    encounter_details: Encounter[];
}
interface VersionGameIndex {
    /** The internal id of an API resource within game data. */
    game_index: number;
    /** (Version) The version relevant to this game index. */
    version: NamedAPIResource;
}
interface VersionGroupFlavorText {
    /** The localized name for an API resource in a specific language. */
    text: string;
    /** (Language) The language this name is in. */
    language: NamedAPIResource;
    /** (VersionGroup) The version group which uses this flavor text. */
    version_group: NamedAPIResource;
}

interface Berry {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** Time it takes the tree to grow one stage, in hours. Berry trees go through four of these growth stages before they can be picked. */
    growth_time: number;
    /** The maximum number of these berries that can grow on one tree in Generation IV. */
    max_harvest: number;
    /** The power of the move "Natural Gift" when used with this Berry. */
    natural_gift_power: number;
    /** The size of this Berry, in millimeters. */
    size: number;
    /** The smoothness of this Berry, used in making Pokéblocks or Poffins. */
    smoothness: number;
    /** The speed at which this Berry dries out the soil as it grows. A higher rate means the soil dries more quickly. */
    soil_dryness: number;
    /** (BerryFirmness) The firmness of this berry, used in making Pokéblocks or Poffins. */
    firmness: NamedAPIResource;
    /** A list of references to each flavor a berry can have and the potency of each of those flavors in regard to this berry. */
    flavors: BerryFlavorMap[];
    /** (Item) Berries are actually items. This is a reference to the item specific data for this berry. */
    item: NamedAPIResource;
    /** (Type) The type inherited by "Natural Gift" when used with this Berry. */
    natural_gift_type: NamedAPIResource;
}
interface BerryFlavorMap {
    /** How powerful the referenced flavor is for this berry. */
    potency: number;
    /** (BerryFlavor) The referenced berry flavor. */
    flavor: NamedAPIResource;
}
interface BerryFirmness {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** (Berry[]) A list of the berries with this firmness. */
    berries: NamedAPIResource[];
    /** The name of this resource listed in different languages. */
    names: Name[];
}
interface BerryFlavor {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** A list of the berries with this flavor. */
    berries: FlavorBerryMap[];
    /** (ContestType) The contest type that correlates with this berry flavor. */
    contest_type: NamedAPIResource;
    /** The name of this resource listed in different languages. */
    names: Name[];
}
interface FlavorBerryMap {
    /** How powerful the referenced flavor is for this berry. */
    potency: number;
    /** (Berry) The berry with the referenced flavor. */
    berry: NamedAPIResource;
}

interface ContestType {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** (BerryFlavor) The berry flavor that correlates with this contest type. */
    berry_flavor: NamedAPIResource;
    /** The name of this contest type listed in different languages. */
    names: ContestName[];
}
interface ContestName {
    /** The name for this contest. */
    name: string;
    /** The color associated with this contest's name. */
    color: string;
    /** (Language) The language that this name is in. */
    language: NamedAPIResource;
}
interface ContestEffect {
    /** The identifier for this resource. */
    id: number;
    /** The base number of hearts the user of this move gets. */
    appeal: number;
    /** The base number of hearts the user's opponent loses. */
    jam: number;
    /** The result of this contest effect listed in different languages. */
    effect_entries: Effect[];
    /** The flavor text of this contest effect listed in different languages. */
    flavor_text_entries: FlavorText[];
}
interface SuperContestEffect {
    /** The identifier for this resource. */
    id: number;
    /** The level of appeal this super contest effect has. */
    appeal: number;
    /** The flavor text of this super contest effect listed in different languages. */
    flavor_text_entries: FlavorText[];
    /** (Move[]) A list of moves that have the effect when used in super contests. */
    moves: NamedAPIResource[];
}

interface EncounterMethod {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** A good value for sorting. */
    order: number;
    /** The name of this resource listed in different languages. */
    names: Name[];
}
interface EncounterCondition {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** (EncounterConditionValue[]) A list of possible values for this encounter condition. */
    values: NamedAPIResource[];
}
interface EncounterConditionValue {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** (EncounterCondition) The condition this encounter condition value pertains to. */
    condition: NamedAPIResource;
    /** The name of this resource listed in different languages. */
    names: Name[];
}

interface EvolutionChain {
    /** The identifier for this resource. */
    id: number;
    /** (Item) The item that a Pokémon would be holding when mating that would trigger the egg hatching a baby Pokémon rather than a basic Pokémon. */
    baby_trigger_item: NamedAPIResource;
    /** The base chain link object. Each link contains evolution details for a Pokémon in the chain. Each link references the next Pokémon in the natural evolution order. */
    chain: ChainLink;
}
interface ChainLink {
    /** Whether or not this link is for a baby Pokémon. This would only ever be true on the base link. */
    is_baby: boolean;
    /** (PokemonSpecies) The Pokémon species at this point in the evolution chain. */
    species: NamedAPIResource;
    /** All details regarding the specific details of the referenced Pokémon species evolution. */
    evolution_details: EvolutionDetail[];
    /** A List of chain objects. */
    evolves_to: ChainLink[];
}
interface EvolutionDetail {
    /** (Item) The item required to cause evolution this into Pokémon species. */
    item: NamedAPIResource;
    /** (EvolutionTrigger) The type of event that triggers evolution into this Pokémon species. */
    trigger: NamedAPIResource;
    /** The id of the gender of the evolving Pokémon species must be in order to evolve into this Pokémon species. */
    gender: number;
    /** (Item) The item the evolving Pokémon species must be holding during the evolution trigger event to evolve into this Pokémon species. */
    held_item: NamedAPIResource;
    /** (Move) The move that must be known by the evolving Pokémon species during the evolution trigger event in order to evolve into this Pokémon species. */
    known_move: NamedAPIResource;
    /** (Type) The evolving Pokémon species must know a move with this type during the evolution trigger event in order to evolve into this Pokémon species. */
    known_move_type: NamedAPIResource;
    /** (Location) The location the evolution must be triggered at. */
    location: NamedAPIResource;
    /** The minimum required level of the evolving Pokémon species to evolve into this Pokémon species. */
    min_level: number;
    /** The minimum required level of happiness the evolving Pokémon species to evolve into this Pokémon species. */
    min_happiness: number;
    /** The minimum required level of beauty the evolving Pokémon species to evolve into this Pokémon species. */
    min_beauty: number;
    /** The minimum required level of affection the evolving Pokémon species to evolve into this Pokémon species. */
    min_affection: number;
    /** Whether or not it must be raining in the overworld to cause evolution this Pokémon species. */
    needs_overworld_rain: boolean;
    /** (PokemonSpecies) The Pokémon species that must be in the players party in order for the evolving Pokémon species to evolve into this Pokémon species. */
    party_species: NamedAPIResource;
    /** (Type) The player must have a Pokémon of this type in their party during the evolution trigger event in order for the evolving Pokémon species to evolve into this Pokémon species. */
    party_type: NamedAPIResource;
    /** The required relation between the Pokémon's Attack and Defense stats. 1 means Attack \> Defense. 0 means Attack = Defense. -1 means Attack \< Defense. */
    relative_physical_stats: number;
    /** The required time of day. Day or night. */
    time_of_day: string;
    /** (PokemonSpecies) Pokémon species for which this one must be traded. */
    trade_species: NamedAPIResource;
    /** Whether or not the 3DS needs to be turned upside-down as this Pokémon levels up. */
    turn_upside_down: boolean;
}
interface EvolutionTriggers {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** (PokemonSpecies[]) A list of pokemon species that result from this evolution trigger. */
    pokemon_species: NamedAPIResource[];
}

interface Generation {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** (Ability[]) A list of abilities that were introduced in this generation. */
    abilities: NamedAPIResource[];
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** (Region) The main region travelled in this generation. */
    main_region: NamedAPIResource;
    /** (Move[]) A list of moves that were introduced in this generation. */
    moves: NamedAPIResource[];
    /** (PokemonSpecies[]) A list of Pokémon species that were introduced in this generation. */
    pokemon_species: NamedAPIResource[];
    /** (Type[]) A list of types that were introduced in this generation. */
    types: NamedAPIResource[];
    /** (VersionGroup[]) A list of version groups that were introduced in this generation. */
    version_groups: NamedAPIResource[];
}
interface Pokedex {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** Whether or not this Pokédex originated in the main series of the video games. */
    is_main_series: boolean;
    /** The description of this resource listed in different languages. */
    descriptions: Description[];
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A list of Pokémon catalogued in this Pokédex and their indexes. */
    pokemon_entries: PokemonEntry[];
    /** (Region) The region this Pokédex catalogues Pokémon for. */
    region: NamedAPIResource;
    /** (VersionGroup[]) A list of version groups this Pokédex is relevant to. */
    version_groups: NamedAPIResource[];
}
interface PokemonEntry {
    /** The index of this Pokémon species entry within the Pokédex. */
    entry_number: number;
    /** (PokemonSpecies) The Pokémon species being encountered. */
    pokemon_species: NamedAPIResource;
}
interface Version {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** (VersionGroup) The version group this version belongs to. */
    version_group: NamedAPIResource;
}
interface VersionGroup {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** Order for sorting. Almost by date of release, except similar versions are grouped together. */
    order: number;
    /** (Generation) The generation this version was introduced in. */
    generation: NamedAPIResource;
    /** (MoveLearnMethod[]) A list of methods in which Pokémon can learn moves in this version group. */
    move_learn_methods: NamedAPIResource[];
    /** (Pokedex[]) A list of Pokédexes introduces in this version group. */
    pokedexes: NamedAPIResource[];
    /** (Region[]) A list of regions that can be visited in this version group. */
    regions: NamedAPIResource[];
    /** (Version[]) The versions this version group owns. */
    versions: NamedAPIResource[];
}

interface Item {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The price of this item in stores. */
    cost: number;
    /** The power of the move Fling when used with this item. */
    fling_power: number;
    /** (ItemFlingEffect) The effect of the move Fling when used with this item. */
    fling_effect: NamedAPIResource;
    /** (ItemAttribute[]) A list of attributes this item has. */
    attributes: NamedAPIResource[];
    /** (ItemCategory) The category of items this item falls into. */
    category: NamedAPIResource;
    /** The effect of this ability listed in different languages. */
    effect_entries: VerboseEffect[];
    /** The flavor text of this ability listed in different languages. */
    flavor_text_entries: VersionGroupFlavorText[];
    /** A list of game indices relevant to this item by generation. */
    game_indices: GenerationGameIndex[];
    /** The name of this item listed in different languages. */
    names: Name[];
    /** A set of sprites used to depict this item in the game. */
    sprites: ItemSprites;
    /** A list of Pokémon that might be found in the wild holding this item. */
    held_by_pokemon: ItemHolderPokemon[];
    /** (EvolutionChain) An evolution chain this item requires to produce a bay during mating. */
    baby_trigger_for: APIResource;
    /** A list of the machines related to this item. */
    machines: MachineVersionDetail[];
}
interface ItemSprites {
    /** The default depiction of this item. */
    default: string;
}
interface ItemHolderPokemon {
    /** (Pokemon) The Pokémon that holds this item. */
    pokemon: NamedAPIResource;
    /** The details for the version that this item is held in by the Pokémon. */
    version_details: ItemHolderPokemonVersionDetail[];
}
interface ItemHolderPokemonVersionDetail {
    /** How often this Pokémon holds this item in this version. */
    rarity: number;
    /** (Version) The version that this item is held in by the Pokémon. */
    version: NamedAPIResource;
}
interface ItemAttribute {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** (Item[]) A list of items that have this attribute. */
    items: NamedAPIResource[];
    /** The name of this item attribute listed in different languages. */
    names: Name[];
    /** The description of this item attribute listed in different languages. */
    descriptions: Description[];
}
interface ItemCategory {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** (Item[]) A list of items that are a part of this category. */
    items: NamedAPIResource[];
    /** The name of this item category listed in different languages. */
    names: Name[];
    /** (ItemPocket) The pocket items in this category would be put in. */
    pocket: NamedAPIResource;
}
interface ItemFlingEffect {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The result of this fling effect listed in different languages. */
    effect_entries: Effect[];
    /** (Item[]) A list of items that have this fling effect. */
    items: NamedAPIResource[];
}
interface ItemPocket {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** (ItemCategory[]) A list of item categories that are relevant to this item pocket. */
    categories: NamedAPIResource[];
    /** The name of this resource listed in different languages. */
    names: Name[];
}

interface Location {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** (Region) The region this location can be found in. */
    region: NamedAPIResource;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A list of game indices relevant to this location by generation. */
    game_indices: GenerationGameIndex[];
    /** (LocationArea[]) Areas that can be found within this location. */
    areas: NamedAPIResource[];
}
interface LocationArea {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The internal id of an API resource within game data. */
    game_index: number;
    /** A list of methods in which Pokémon may be encountered in this area and how likely the method will occur depending on the version of the game. */
    encounter_method_rates: EncounterMethodRate[];
    /** (Location) The region this location area can be found in. */
    location: NamedAPIResource;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A list of Pokémon that can be encountered in this area along with version specific details about the encounter. */
    pokemon_encounters: PokemonEncounter[];
}
interface EncounterMethodRate {
    /** (EncounterMethod) The method in which Pokémon may be encountered in an area.. */
    encounter_method: NamedAPIResource;
    /** The chance of the encounter to occur on a version of the game. */
    version_details: EncounterVersionDetails[];
}
interface EncounterVersionDetails {
    /** The chance of an encounter to occur. */
    rate: number;
    /** (Version) The version of the game in which the encounter can occur with the given chance. */
    version: NamedAPIResource;
}
interface PokemonEncounter {
    /** (Pokemon) The Pokémon being encountered. */
    pokemon: NamedAPIResource;
    /** A list of versions and encounters with Pokémon that might happen in the referenced location area. */
    version_details: VersionEncounterDetail[];
}
interface PalParkArea {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A list of Pokémon encountered in thi pal park area along with details. */
    pokemon_encounters: PalParkEncounterSpecies[];
}
interface PalParkEncounterSpecies {
    /** The base score given to the player when this Pokémon is caught during a pal park run. */
    base_score: number;
    /** The base rate for encountering this Pokémon in this pal park area. */
    rate: number;
    /** (PokemonSpecies) The Pokémon species being encountered. */
    pokemon_species: NamedAPIResource;
}
interface Region {
    /** The identifier for this resource. */
    id: number;
    /** (Location[]) A list of locations that can be found in this region. */
    locations: NamedAPIResource[];
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** (Generation) The generation this region was introduced in. */
    main_generation: NamedAPIResource;
    /** (Pokedex[]) A list of pokédexes that catalogue Pokémon in this region. */
    pokedexes: NamedAPIResource[];
    /** (VersionGroup[]) A list of version groups where this region can be visited. */
    version_groups: NamedAPIResource[];
}

interface Machine {
    /** The identifier for this resource. */
    id: number;
    /** (Item) The TM or HM item that corresponds to this machine. */
    item: NamedAPIResource;
    /** (Move) The move that is taught by this machine. */
    move: NamedAPIResource;
    /** (VersionGroup) The version group that this machine applies to. */
    version_group: NamedAPIResource;
}

interface Ability {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** Whether or not this ability originated in the main series of the video games. */
    is_main_series: boolean;
    /** (Generation) The generation this ability originated in. */
    generation: NamedAPIResource;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** The effect of this ability listed in different languages. */
    effect_entries: VerboseEffect[];
    /** The list of previous effects this ability has had across version groups. */
    effect_changes: AbilityEffectChange[];
    /** The flavor text of this ability listed in different languages. */
    flavor_text_entries: AbilityFlavorText[];
    /** A list of Pokémon that could potentially have this ability. */
    pokemon: AbilityPokemon[];
}
interface AbilityEffectChange {
    /** The previous effect of this ability listed in different languages. */
    effect_entries: Effect[];
    /** (VersionGroup) The version group in which the previous effect of this ability originated. */
    version_group: NamedAPIResource;
}
interface AbilityFlavorText {
    /** The localized name for an API resource in a specific language. */
    flavor_text: string;
    /** (Language) The language this text resource is in. */
    language: NamedAPIResource;
    /** (VersionGroup) The version group that uses this flavor text. */
    version_group: NamedAPIResource;
}
interface AbilityPokemon {
    /** Whether or not this a hidden ability for the referenced Pokémon. */
    is_hidden: boolean;
    /** Pokémon have 3 ability 'slots' which hold references to possible abilities they could have. This is the slot of this ability for the referenced pokemon. */
    slot: number;
    /** (Pokemon) The Pokémon this ability could belong to. */
    pokemon: NamedAPIResource;
}
interface Characteristic {
    /** The identifier for this resource. */
    id: number;
    /** The remainder of the highest stat/IV divided by 5. */
    gene_modulo: number;
    /** The possible values of the highest stat that would result in a Pokémon receiving this characteristic when divided by 5. */
    possible_values: number[];
}
interface EggGroup {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** (PokemonSpecies[]) A list of all Pokémon species that are members of this egg group. */
    pokemon_species: NamedAPIResource[];
}
interface Gender {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** A list of Pokémon species that can be this gender and how likely it is that they will be. */
    pokemon_species_details: PokemonSpeciesGender[];
    /** (PokemonSpecies[]) A list of Pokémon species that required this gender in order for a Pokémon to evolve into them. */
    required_for_evolution: NamedAPIResource[];
}
interface PokemonSpeciesGender {
    /** The chance of this Pokémon being female, in eighths; or -1 for genderless. */
    rate: number;
    /** (PokemonSpecies) A Pokémon species that can be the referenced gender. */
    pokemon_species: NamedAPIResource;
}
interface GrowthRate {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The formula used to calculate the rate at which the Pokémon species gains level. */
    formula: string;
    /** The descriptions of this characteristic listed in different languages. */
    descriptions: Description[];
    /** A list of levels and the amount of experienced needed to atain them based on this growth rate. */
    levels: GrowthRateExperienceLevel[];
    /** (PokemonSpecies[]) A list of Pokémon species that gain levels at this growth rate. */
    pokemon_species: NamedAPIResource[];
}
interface GrowthRateExperienceLevel {
    /** The level gained. */
    level: number;
    /** The amount of experience required to reach the referenced level. */
    experience: number;
}
interface Nature {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** (Stat) The stat decreased by 10% in Pokémon with this nature. */
    decreased_stat: NamedAPIResource;
    /** (Stat) The stat increased by 10% in Pokémon with this nature. */
    increased_stat: NamedAPIResource;
    /** (BerryFlavor) The flavor hated by Pokémon with this nature. */
    hates_flavor: NamedAPIResource;
    /** (BerryFlavor) The flavor liked by Pokémon with this nature. */
    likes_flavor: NamedAPIResource;
    /** A list of Pokéathlon stats this nature effects and how much it effects them. */
    pokeathlon_stat_changes: NatureStatChange[];
    /** A list of battle styles and how likely a Pokémon with this nature is to use them in the Battle Palace or Battle Tent. */
    move_battle_style_preferences: MoveBattleStylePreference[];
    /** The name of this resource listed in different languages. */
    names: Name[];
}
interface NatureStatChange {
    /** The amount of change. */
    max_change: number;
    /** (PokeathlonStat) The stat being affected. */
    pokeathlon_stat: NamedAPIResource;
}
interface MoveBattleStylePreference {
    /** Chance of using the move, in percent, if HP is under one half. */
    low_hp_preference: number;
    /** Chance of using the move, in percent, if HP is over one half. */
    high_hp_preference: number;
    /** (MoveBattleStyle) The move battle style. */
    move_battle_style: NamedAPIResource;
}
interface PokeathlonStat {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A detail of natures which affect this Pokéathlon stat positively or negatively. */
    affecting_natures: NaturePokeathlonStatAffectSets;
}
interface NaturePokeathlonStatAffectSets {
    /** A list of natures and how they change the referenced Pokéathlon stat. */
    increase: NaturePokeathlonStatAffect[];
    /** A list of natures and how they change the referenced Pokéathlon stat. */
    decrease: NaturePokeathlonStatAffect[];
}
interface NaturePokeathlonStatAffect {
    /** The maximum amount of change to the referenced Pokéathlon stat. */
    max_change: number;
    /** (Nature) The nature causing the change. */
    nature: NamedAPIResource;
}
export interface Pokemon {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The base experience gained for defeating this Pokémon. */
    base_experience: number;
    /** The height of this Pokémon in decimetres. */
    height: number;
    /** Set for exactly one Pokémon used as the default for each species. */
    is_default: boolean;
    /** Order for sorting. Almost national order, except families are grouped together. */
    order: number;
    /** The weight of this Pokémon in hectograms. */
    weight: number;
    /** A list of abilities this Pokémon could potentially have. */
    abilities: PokemonAbility[];
    /** (PokemonForm[]) A list of forms this Pokémon can take on. */
    forms: NamedAPIResource[];
    /** A list of game indices relevant to Pokémon item by generation. */
    game_indices: VersionGameIndex[];
    /** A list of items this Pokémon may be holding when encountered. */
    held_items: PokemonHeldItem[];
    /** A link to a list of location areas, as well as encounter details pertaining to specific versions. */
    location_area_encounters: string;
    /** A list of moves along with learn methods and level details pertaining to specific version groups. */
    moves: PokemonMove[];
    /** A set of sprites used to depict this Pokémon in the game. A visual representation of the various sprites can be found at PokeAPI/sprites */
    sprites: PokemonSprites;
    /** (PokemonSpecies) The species this Pokémon belongs to. */
    species: NamedAPIResource;
    /** A list of base stat values for this Pokémon. */
    stats: PokemonStat[];
    /** A list of details showing types this Pokémon has. */
    types: PokemonType[];
}
interface PokemonAbility {
    /** Whether or not this is a hidden ability. */
    is_hidden: boolean;
    /** The slot this ability occupies in this Pokémon species. */
    slot: number;
    /** (Ability) The ability the Pokémon may have. */
    ability: NamedAPIResource;
}
interface PokemonType {
    /** The order the Pokémon's types are listed in. */
    slot: number;
    /** (Type) The type the referenced Pokémon has. */
    type: NamedAPIResource;
}
interface PokemonHeldItem {
    /** (Item) The item the referenced Pokémon holds. */
    item: NamedAPIResource;
    /** The details of the different versions in which the item is held. */
    version_details: PokemonHeldItemVersion[];
}
interface PokemonHeldItemVersion {
    /** (Version) The version in which the item is held. */
    version: NamedAPIResource;
    /** How often the item is held. */
    rarity: number;
}
interface PokemonMove {
    /** (Move) The move the Pokémon can learn. */
    move: NamedAPIResource;
    /** The details of the version in which the Pokémon can learn the move. */
    version_group_details: PokemonMoveVersion[];
}
interface PokemonMoveVersion {
    /** (MoveLearnMethod) The method by which the move is learned. */
    move_learn_method: NamedAPIResource;
    /** (VersionGroup) The version group in which the move is learned. */
    version_group: NamedAPIResource;
    /** The minimum level to learn the move. */
    level_learned_at: number;
}
export interface PokemonStat {
    /** (Stat) The stat the Pokémon has. */
    stat: NamedAPIResource;
    /** The effort points (EV) the Pokémon has in the stat. */
    effort: number;
    /** The base value of the stat. */
    base_stat: number;
}
interface PokemonSprites {
    /** The default depiction of this Pokémon from the front in battle. */
    front_default: string;
    /** The shiny depiction of this Pokémon from the front in battle. */
    front_shiny: string;
    /** The female depiction of this Pokémon from the front in battle. */
    front_female: string;
    /** The shiny female depiction of this Pokémon from the front in battle. */
    front_shiny_female: string;
    /** The default depiction of this Pokémon from the back in battle. */
    back_default: string;
    /** The shiny depiction of this Pokémon from the back in battle. */
    back_shiny: string;
    /** The female depiction of this Pokémon from the back in battle. */
    back_female: string;
    /** The shiny female depiction of this Pokémon from the back in battle. */
    back_shiny_female: string;
    /** Undocumented property. Might contain keys = "dream_world", "home", "official-artwork". */
    other: {
        [key in string]: {
            [spriteName in string]: string;
        };
    };
    /** Undocumented property. Might contain keys = "generation-i", "generation-ii", ... */
    versions?: {
        [version in string]?: {
            [gameTitle in string]?: {
                [spriteName in string]?: string;
            };
        };
    };
}
interface LocationAreaEncounter {
    /** (LocationArea) The location area the referenced Pokémon can be encountered in. */
    location_area: NamedAPIResource;
    /** A list of versions and encounters with the referenced Pokémon that might happen. */
    version_details: VersionEncounterDetail[];
}
interface PokemonColor {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** (PokemonSpecies[]) A list of the Pokémon species that have this color. */
    pokemon_species: NamedAPIResource[];
}
interface PokemonForm {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The order in which forms should be sorted within all forms. Multiple forms may have equal order, in which case they should fall back on sorting by name. */
    order: number;
    /** The order in which forms should be sorted within a species' forms. */
    form_order: number;
    /** True for exactly one form used as the default for each Pokémon. */
    is_default: boolean;
    /** Whether or not this form can only happen during battle. */
    is_battle_only: boolean;
    /** Whether or not this form requires mega evolution. */
    is_mega: boolean;
    /** The name of this form. */
    form_name: string;
    /** (Pokemon) The Pokémon that can take on this form. */
    pokemon: NamedAPIResource;
    /** A set of sprites used to depict this Pokémon form in the game. */
    sprites: PokemonFormSprites;
    /** (VersionGroup) The version group this Pokémon form was introduced in. */
    version_group: NamedAPIResource;
    /** The form specific full name of this Pokémon form, or empty if the form does not have a specific name. */
    names: Name[];
    /** The form specific form name of this Pokémon form, or empty if the form does not have a specific name. */
    form_names: Name[];
}
interface PokemonFormSprites {
    /** The default depiction of this Pokémon form from the front in battle. */
    front_default: string;
    /** The shiny depiction of this Pokémon form from the front in battle. */
    front_shiny: string;
    /** The default depiction of this Pokémon form from the back in battle. */
    back_default: string;
    /** The shiny depiction of this Pokémon form from the back in battle. */
    back_shiny: string;
}
interface PokemonHabitat {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** (PokemonSpecies[]) A list of the Pokémon species that can be found in this habitat. */
    pokemon_species: NamedAPIResource[];
}
interface PokemonShape {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The "scientific" name of this Pokémon shape listed in different languages. */
    awesome_names: AwesomeName[];
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** (PokemonSpecies[]) A list of the Pokémon species that have this shape. */
    pokemon_species: NamedAPIResource[];
}
interface AwesomeName {
    /** The localized "scientific" name for an API resource in a specific language. */
    awesome_name: string;
    /** (Language) The language this "scientific" name is in. */
    language: NamedAPIResource;
}
interface PokemonSpecies {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The order in which species should be sorted. Based on National Dex order, except families are grouped together and sorted by stage. */
    order: number;
    /** The chance of this Pokémon being female, in eighths; or -1 for genderless. */
    gender_rate: number;
    /** The base capture rate; up to 255. The higher the number, the easier the catch. */
    capture_rate: number;
    /** The happiness when caught by a normal Pokéball; up to 255. The higher the number, the happier the Pokémon. */
    base_happiness: number;
    /** Whether or not this is a baby Pokémon. */
    is_baby: boolean;
    /** Whether or not this is a legendary Pokémon. */
    is_legendary: boolean;
    /** Whether or not this is a mythical Pokémon. */
    is_mythical: boolean;
    /** Initial hatch counter: one must walk 255 × (hatch_counter + 1) steps before this Pokémon's egg hatches, unless utilizing bonuses like Flame Body's. */
    hatch_counter: number;
    /** Whether or not this Pokémon has visual gender differences. */
    has_gender_differences: boolean;
    /** Whether or not this Pokémon has multiple forms and can switch between them. */
    forms_switchable: boolean;
    /** (GrowthRate) The rate at which this Pokémon species gains levels. */
    growth_rate: NamedAPIResource;
    /** A list of Pokedexes and the indexes reserved within them for this Pokémon species. */
    pokedex_numbers: PokemonSpeciesDexEntry[];
    /** (EggGroup[]) A list of egg groups this Pokémon species is a member of. */
    egg_groups: NamedAPIResource[];
    /** (PokemonColor) The color of this Pokémon for Pokédex search. */
    color: NamedAPIResource;
    /** (PokemonShape) The shape of this Pokémon for Pokédex search. */
    shape: NamedAPIResource;
    /** (PokemonSpecies) The Pokémon species that evolves into this Pokemon_species. */
    evolves_from_species: NamedAPIResource;
    /** (EvolutionChain) The evolution chain this Pokémon species is a member of. */
    evolution_chain: APIResource;
    /** (PokemonHabitat) The habitat this Pokémon species can be encountered in. */
    habitat: NamedAPIResource;
    /** (Generation) The generation this Pokémon species was introduced in. */
    generation: NamedAPIResource;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A list of encounters that can be had with this Pokémon species in pal park. */
    pal_park_encounters: PalParkEncounterArea[];
    /** A list of flavor text entries for this Pokémon species. */
    flavor_text_entries: FlavorText[];
    /** Descriptions of different forms Pokémon take on within the Pokémon species. */
    form_descriptions: Description[];
    /** The genus of this Pokémon species listed in multiple languages. */
    genera: Genus[];
    /** A list of the Pokémon that exist within this Pokémon species. */
    varieties: PokemonSpeciesVariety[];
}
interface Genus {
    /** The localized genus for the referenced Pokémon species */
    genus: string;
    /** (Language) The language this genus is in. */
    language: NamedAPIResource;
}
interface PokemonSpeciesDexEntry {
    /** The index number within the Pokédex. */
    entry_number: number;
    /** (Pokedex) The Pokédex the referenced Pokémon species can be found in. */
    pokedex: NamedAPIResource;
}
interface PalParkEncounterArea {
    /** The base score given to the player when the referenced Pokémon is caught during a pal park run. */
    base_score: number;
    /** The base rate for encountering the referenced Pokémon in this pal park area. */
    rate: number;
    /** (PalParkArea) The pal park area where this encounter happens. */
    area: NamedAPIResource;
}
interface PokemonSpeciesVariety {
    /** Whether this variety is the default variety. */
    is_default: boolean;
    /** (Pokemon) The Pokémon variety. */
    pokemon: NamedAPIResource;
}

interface Move {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The percent value of how likely this move is to be successful. */
    accuracy: number;
    /** The percent value of how likely it is this moves effect will happen. */
    effect_chance: number;
    /** Power points. The number of times this move can be used. */
    pp: number;
    /** A value between -8 and 8. Sets the order in which moves are executed during battle. See Bulbapedia for greater detail. */
    priority: number;
    /** The base power of this move with a value of 0 if it does not have a base power. */
    power: number;
    /** A detail of normal and super contest combos that require this move. */
    contest_combos: ContestComboSets;
    /** (ContestType) The type of appeal this move gives a Pokémon when used in a contest. */
    contest_type: NamedAPIResource;
    /** (ContestEffect) The effect the move has when used in a contest. */
    contest_effect: APIResource;
    /** (MoveDamageClass) The type of damage the move inflicts on the target, e.g. physical. */
    damage_class: NamedAPIResource;
    /** The effect of this move listed in different languages. */
    effect_entries: VerboseEffect[];
    /** The list of previous effects this move has had across version groups of the games. */
    effect_changes: AbilityEffectChange[];
    /** The flavor text of this move listed in different languages. */
    flavor_text_entries: MoveFlavorText[];
    /** (Generation) The generation in which this move was introduced. */
    generation: NamedAPIResource;
    /** A list of the machines that teach this move. */
    machines: MachineVersionDetail[];
    /** Metadata about this move */
    meta: MoveMetaData;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A list of move resource value changes across version groups of the game. */
    past_values: PastMoveStatValues[];
    /** A list of stats this moves effects and how much it effects them. */
    stat_changes: MoveStatChange[];
    /** (SuperContestEffect) The effect the move has when used in a super contest. */
    super_contest_effect: APIResource;
    /** (MoveTarget) The type of target that will receive the effects of the attack. */
    target: NamedAPIResource;
    /** (Type) The elemental type of this move. */
    type: NamedAPIResource;
}
interface ContestComboSets {
    /** A detail of moves this move can be used before or after, granting additional appeal points in contests. */
    normal: ContestComboDetail;
    /** A detail of moves this move can be used before or after, granting additional appeal points in super contests. */
    super: ContestComboDetail;
}
interface ContestComboDetail {
    /** (Move[]) A list of moves to use before this move. */
    use_before: NamedAPIResource[];
    /** (Move[]) A list of moves to use after this move. */
    use_after: NamedAPIResource[];
}
interface MoveFlavorText {
    /** The localized flavor text for an api resource in a specific language. */
    flavor_text: string;
    /** (Language) The language this name is in. */
    language: NamedAPIResource;
    /** (VersionGroup) The version group that uses this flavor text. */
    version_group: NamedAPIResource;
}
interface MoveMetaData {
    /** (MoveAilment) The status ailment this move inflicts on its target. */
    ailment: NamedAPIResource;
    /** (MoveCategory) The category of move this move falls under, e.g. damage or ailment. */
    category: NamedAPIResource;
    /** The minimum number of times this move hits. Null if it always only hits once. */
    min_hits: number;
    /** The maximum number of times this move hits. Null if it always only hits once. */
    max_hits: number;
    /** The minimum number of turns this move continues to take effect. Null if it always only lasts one turn. */
    min_turns: number;
    /** The maximum number of turns this move continues to take effect. Null if it always only lasts one turn. */
    max_turns: number;
    /** HP drain (if positive) or Recoil damage (if negative), in percent of damage done. */
    drain: number;
    /** The amount of hp gained by the attacking Pokemon, in percent of it's maximum HP. */
    healing: number;
    /** Critical hit rate bonus. */
    crit_rate: number;
    /** The likelihood this attack will cause an ailment. */
    ailment_chance: number;
    /** The likelihood this attack will cause the target Pokémon to flinch. */
    flinch_chance: number;
    /** The likelihood this attack will cause a stat change in the target Pokémon. */
    stat_chance: number;
}
interface MoveStatChange {
    /** The amount of change. */
    change: number;
    /** (Stat) The stat being affected. */
    stat: NamedAPIResource;
}
interface PastMoveStatValues {
    /** The percent value of how likely this move is to be successful. */
    accuracy: number;
    /** The percent value of how likely it is this moves effect will take effect. */
    effect_chance: number;
    /** The base power of this move with a value of 0 if it does not have a base power. */
    power: number;
    /** Power points. The number of times this move can be used. */
    pp: number;
    /** The effect of this move listed in different languages. */
    effect_entries: VerboseEffect[];
    /** (Type) The elemental type of this move. */
    type: NamedAPIResource;
    /** (VersionGroup) The version group in which these move stat values were in effect. */
    version_group: NamedAPIResource;
}
interface MoveAliment {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** (Move[]) A list of moves that cause this ailment. */
    moves: NamedAPIResource[];
    /** The name of this resource listed in different languages. */
    names: Name[];
}
interface MoveBattleStyle {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
}
interface MoveCategory {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** (Move[]) A list of moves that fall into this category. */
    moves: NamedAPIResource[];
    /** The description of this resource listed in different languages. */
    descriptions: Description[];
}
interface MoveDamageClass {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The description of this resource listed in different languages. */
    descriptions: Description[];
    /** (Move[]) A list of moves that fall into this damage class. */
    moves: NamedAPIResource[];
    /** The name of this resource listed in different languages. */
    names: Name[];
}
interface MoveLearnMethod {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The description of this resource listed in different languages. */
    descriptions: Description[];
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** (VersionGroup[]) A list of version groups where moves can be learned through this method. */
    version_groups: NamedAPIResource[];
}
interface MoveTarget {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The description of this resource listed in different languages. */
    descriptions: Description[];
    /** (Move[]) A list of moves that that are directed at this target. */
    moves: NamedAPIResource[];
    /** The name of this resource listed in different languages. */
    names: Name[];
}

interface Stat {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** ID the games use for this stat. */
    game_index: number;
    /** Whether this stat only exists within a battle. */
    is_battle_only: boolean;
    /** A detail of moves which affect this stat positively or negatively. */
    affecting_moves: MoveStatAffectSets;
    /** A detail of natures which affect this stat positively or negatively. */
    affecting_natures: NatureStatAffectSets;
    /** (Characteristic[]) A list of characteristics that are set on a Pokémon when its highest base stat is this stat. */
    characteristics: APIResource[];
    /** (MoveDamageClass) The class of damage this stat is directly related to. */
    move_damage_class: NamedAPIResource;
    /** The name of this resource listed in different languages. */
    names: Name[];
}
interface MoveStatAffectSets {
    /** A list of moves and how they change the referenced stat. */
    increase: MoveStatAffect[];
    /** A list of moves and how they change the referenced stat. */
    decrease: MoveStatAffect[];
}
interface MoveStatAffect {
    /** The maximum amount of change to the referenced stat. */
    change: number;
    /** (Move) The move causing the change. */
    move: NamedAPIResource;
}
interface NatureStatAffectSets {
    /** (Nature[]) A list of natures and how they change the referenced stat. */
    increase: NamedAPIResource[];
    /** (Nature[]) A list of nature sand how they change the referenced stat. */
    decrease: NamedAPIResource[];
}

interface Type {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** A detail of how effective this type is toward others and vice versa. */
    damage_relations: TypeRelations;
    /** A list of game indices relevant to this item by generation. */
    game_indices: GenerationGameIndex[];
    /** (Generation) The generation this type was introduced in. */
    generation: NamedAPIResource;
    /** (MoveDamageClass) The class of damage inflicted by this type. */
    move_damage_class: NamedAPIResource;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A list of details of Pokémon that have this type. */
    pokemon: TypePokemon[];
    /** (Move[]) A list of moves that have this type. */
    moves: NamedAPIResource[];
}
interface TypePokemon {
    /** The order the Pokémon's types are listed in. */
    slot: number;
    /** (Pokemon) The Pokémon that has the referenced type. */
    pokemon: NamedAPIResource;
}
interface TypeRelations {
    /** (Type[]) A list of types this type has no effect on. */
    no_damage_to: NamedAPIResource[];
    /** (Type[]) A list of types this type is not very effect against. */
    half_damage_to: NamedAPIResource[];
    /** (Type[]) A list of types this type is very effect against. */
    double_damage_to: NamedAPIResource[];
    /** (Type[]) A list of types that have no effect on this type. */
    no_damage_from: NamedAPIResource[];
    /** (Type[]) A list of types that are not very effective against this type. */
    half_damage_from: NamedAPIResource[];
    /** (Type[]) A list of types that are very effective against this type. */
    double_damage_from: NamedAPIResource[];
}

type PokeAPI_APIResource = APIResource;
type PokeAPI_Ability = Ability;
type PokeAPI_AbilityEffectChange = AbilityEffectChange;
type PokeAPI_AbilityFlavorText = AbilityFlavorText;
type PokeAPI_AbilityPokemon = AbilityPokemon;
type PokeAPI_AwesomeName = AwesomeName;
type PokeAPI_Berry = Berry;
type PokeAPI_BerryFirmness = BerryFirmness;
type PokeAPI_BerryFlavor = BerryFlavor;
type PokeAPI_BerryFlavorMap = BerryFlavorMap;
type PokeAPI_ChainLink = ChainLink;
type PokeAPI_Characteristic = Characteristic;
type PokeAPI_ContestComboDetail = ContestComboDetail;
type PokeAPI_ContestComboSets = ContestComboSets;
type PokeAPI_ContestEffect = ContestEffect;
type PokeAPI_ContestName = ContestName;
type PokeAPI_ContestType = ContestType;
type PokeAPI_Description = Description;
type PokeAPI_Effect = Effect;
type PokeAPI_EggGroup = EggGroup;
type PokeAPI_Encounter = Encounter;
type PokeAPI_EncounterCondition = EncounterCondition;
type PokeAPI_EncounterConditionValue = EncounterConditionValue;
type PokeAPI_EncounterMethod = EncounterMethod;
type PokeAPI_EncounterMethodRate = EncounterMethodRate;
type PokeAPI_EncounterVersionDetails = EncounterVersionDetails;
type PokeAPI_EvolutionChain = EvolutionChain;
type PokeAPI_EvolutionDetail = EvolutionDetail;
type PokeAPI_EvolutionTriggers = EvolutionTriggers;
type PokeAPI_FlavorBerryMap = FlavorBerryMap;
type PokeAPI_FlavorText = FlavorText;
type PokeAPI_Gender = Gender;
type PokeAPI_Generation = Generation;
type PokeAPI_GenerationGameIndex = GenerationGameIndex;
type PokeAPI_Genus = Genus;
type PokeAPI_GrowthRate = GrowthRate;
type PokeAPI_GrowthRateExperienceLevel = GrowthRateExperienceLevel;
type PokeAPI_Item = Item;
type PokeAPI_ItemAttribute = ItemAttribute;
type PokeAPI_ItemCategory = ItemCategory;
type PokeAPI_ItemFlingEffect = ItemFlingEffect;
type PokeAPI_ItemHolderPokemon = ItemHolderPokemon;
type PokeAPI_ItemHolderPokemonVersionDetail = ItemHolderPokemonVersionDetail;
type PokeAPI_ItemPocket = ItemPocket;
type PokeAPI_ItemSprites = ItemSprites;
type PokeAPI_Language = Language;
type PokeAPI_Location = Location;
type PokeAPI_LocationArea = LocationArea;
type PokeAPI_LocationAreaEncounter = LocationAreaEncounter;
type PokeAPI_Machine = Machine;
type PokeAPI_MachineVersionDetail = MachineVersionDetail;
type PokeAPI_Move = Move;
type PokeAPI_MoveAliment = MoveAliment;
type PokeAPI_MoveBattleStyle = MoveBattleStyle;
type PokeAPI_MoveBattleStylePreference = MoveBattleStylePreference;
type PokeAPI_MoveCategory = MoveCategory;
type PokeAPI_MoveDamageClass = MoveDamageClass;
type PokeAPI_MoveFlavorText = MoveFlavorText;
type PokeAPI_MoveLearnMethod = MoveLearnMethod;
type PokeAPI_MoveMetaData = MoveMetaData;
type PokeAPI_MoveStatAffect = MoveStatAffect;
type PokeAPI_MoveStatAffectSets = MoveStatAffectSets;
type PokeAPI_MoveStatChange = MoveStatChange;
type PokeAPI_MoveTarget = MoveTarget;
type PokeAPI_Name = Name;
type PokeAPI_NamedAPIResource = NamedAPIResource;
type PokeAPI_NamedAPIResourceList = NamedAPIResourceList;
type PokeAPI_Nature = Nature;
type PokeAPI_NaturePokeathlonStatAffect = NaturePokeathlonStatAffect;
type PokeAPI_NaturePokeathlonStatAffectSets = NaturePokeathlonStatAffectSets;
type PokeAPI_NatureStatAffectSets = NatureStatAffectSets;
type PokeAPI_NatureStatChange = NatureStatChange;
type PokeAPI_PalParkArea = PalParkArea;
type PokeAPI_PalParkEncounterArea = PalParkEncounterArea;
type PokeAPI_PalParkEncounterSpecies = PalParkEncounterSpecies;
type PokeAPI_PastMoveStatValues = PastMoveStatValues;
type PokeAPI_PokeathlonStat = PokeathlonStat;
type PokeAPI_Pokedex = Pokedex;
type PokeAPI_Pokemon = Pokemon;
type PokeAPI_PokemonAbility = PokemonAbility;
type PokeAPI_PokemonColor = PokemonColor;
type PokeAPI_PokemonEncounter = PokemonEncounter;
type PokeAPI_PokemonEntry = PokemonEntry;
type PokeAPI_PokemonForm = PokemonForm;
type PokeAPI_PokemonFormSprites = PokemonFormSprites;
type PokeAPI_PokemonHabitat = PokemonHabitat;
type PokeAPI_PokemonHeldItem = PokemonHeldItem;
type PokeAPI_PokemonHeldItemVersion = PokemonHeldItemVersion;
type PokeAPI_PokemonMove = PokemonMove;
type PokeAPI_PokemonMoveVersion = PokemonMoveVersion;
type PokeAPI_PokemonShape = PokemonShape;
type PokeAPI_PokemonSpecies = PokemonSpecies;
type PokeAPI_PokemonSpeciesDexEntry = PokemonSpeciesDexEntry;
type PokeAPI_PokemonSpeciesGender = PokemonSpeciesGender;
type PokeAPI_PokemonSpeciesVariety = PokemonSpeciesVariety;
type PokeAPI_PokemonSprites = PokemonSprites;
type PokeAPI_PokemonStat = PokemonStat;
type PokeAPI_PokemonType = PokemonType;
type PokeAPI_Region = Region;
type PokeAPI_Stat = Stat;
type PokeAPI_SuperContestEffect = SuperContestEffect;
type PokeAPI_Type = Type;
type PokeAPI_TypePokemon = TypePokemon;
type PokeAPI_TypeRelations = TypeRelations;
type PokeAPI_VerboseEffect = VerboseEffect;
type PokeAPI_Version = Version;
type PokeAPI_VersionEncounterDetail = VersionEncounterDetail;
type PokeAPI_VersionGameIndex = VersionGameIndex;
type PokeAPI_VersionGroup = VersionGroup;
type PokeAPI_VersionGroupFlavorText = VersionGroupFlavorText;
declare namespace PokeAPI {
  export {
    PokeAPI_APIResource as APIResource,
    PokeAPI_Ability as Ability,
    PokeAPI_AbilityEffectChange as AbilityEffectChange,
    PokeAPI_AbilityFlavorText as AbilityFlavorText,
    PokeAPI_AbilityPokemon as AbilityPokemon,
    PokeAPI_AwesomeName as AwesomeName,
    PokeAPI_Berry as Berry,
    PokeAPI_BerryFirmness as BerryFirmness,
    PokeAPI_BerryFlavor as BerryFlavor,
    PokeAPI_BerryFlavorMap as BerryFlavorMap,
    PokeAPI_ChainLink as ChainLink,
    PokeAPI_Characteristic as Characteristic,
    PokeAPI_ContestComboDetail as ContestComboDetail,
    PokeAPI_ContestComboSets as ContestComboSets,
    PokeAPI_ContestEffect as ContestEffect,
    PokeAPI_ContestName as ContestName,
    PokeAPI_ContestType as ContestType,
    PokeAPI_Description as Description,
    PokeAPI_Effect as Effect,
    PokeAPI_EggGroup as EggGroup,
    PokeAPI_Encounter as Encounter,
    PokeAPI_EncounterCondition as EncounterCondition,
    PokeAPI_EncounterConditionValue as EncounterConditionValue,
    PokeAPI_EncounterMethod as EncounterMethod,
    PokeAPI_EncounterMethodRate as EncounterMethodRate,
    PokeAPI_EncounterVersionDetails as EncounterVersionDetails,
    PokeAPI_EvolutionChain as EvolutionChain,
    PokeAPI_EvolutionDetail as EvolutionDetail,
    PokeAPI_EvolutionTriggers as EvolutionTriggers,
    PokeAPI_FlavorBerryMap as FlavorBerryMap,
    PokeAPI_FlavorText as FlavorText,
    PokeAPI_Gender as Gender,
    PokeAPI_Generation as Generation,
    PokeAPI_GenerationGameIndex as GenerationGameIndex,
    PokeAPI_Genus as Genus,
    PokeAPI_GrowthRate as GrowthRate,
    PokeAPI_GrowthRateExperienceLevel as GrowthRateExperienceLevel,
    PokeAPI_Item as Item,
    PokeAPI_ItemAttribute as ItemAttribute,
    PokeAPI_ItemCategory as ItemCategory,
    PokeAPI_ItemFlingEffect as ItemFlingEffect,
    PokeAPI_ItemHolderPokemon as ItemHolderPokemon,
    PokeAPI_ItemHolderPokemonVersionDetail as ItemHolderPokemonVersionDetail,
    PokeAPI_ItemPocket as ItemPocket,
    PokeAPI_ItemSprites as ItemSprites,
    PokeAPI_Language as Language,
    PokeAPI_Location as Location,
    PokeAPI_LocationArea as LocationArea,
    PokeAPI_LocationAreaEncounter as LocationAreaEncounter,
    PokeAPI_Machine as Machine,
    PokeAPI_MachineVersionDetail as MachineVersionDetail,
    PokeAPI_Move as Move,
    PokeAPI_MoveAliment as MoveAliment,
    PokeAPI_MoveBattleStyle as MoveBattleStyle,
    PokeAPI_MoveBattleStylePreference as MoveBattleStylePreference,
    PokeAPI_MoveCategory as MoveCategory,
    PokeAPI_MoveDamageClass as MoveDamageClass,
    PokeAPI_MoveFlavorText as MoveFlavorText,
    PokeAPI_MoveLearnMethod as MoveLearnMethod,
    PokeAPI_MoveMetaData as MoveMetaData,
    PokeAPI_MoveStatAffect as MoveStatAffect,
    PokeAPI_MoveStatAffectSets as MoveStatAffectSets,
    PokeAPI_MoveStatChange as MoveStatChange,
    PokeAPI_MoveTarget as MoveTarget,
    PokeAPI_Name as Name,
    PokeAPI_NamedAPIResource as NamedAPIResource,
    PokeAPI_NamedAPIResourceList as NamedAPIResourceList,
    PokeAPI_Nature as Nature,
    PokeAPI_NaturePokeathlonStatAffect as NaturePokeathlonStatAffect,
    PokeAPI_NaturePokeathlonStatAffectSets as NaturePokeathlonStatAffectSets,
    PokeAPI_NatureStatAffectSets as NatureStatAffectSets,
    PokeAPI_NatureStatChange as NatureStatChange,
    PokeAPI_PalParkArea as PalParkArea,
    PokeAPI_PalParkEncounterArea as PalParkEncounterArea,
    PokeAPI_PalParkEncounterSpecies as PalParkEncounterSpecies,
    PokeAPI_PastMoveStatValues as PastMoveStatValues,
    PokeAPI_PokeathlonStat as PokeathlonStat,
    PokeAPI_Pokedex as Pokedex,
    PokeAPI_Pokemon as Pokemon,
    PokeAPI_PokemonAbility as PokemonAbility,
    PokeAPI_PokemonColor as PokemonColor,
    PokeAPI_PokemonEncounter as PokemonEncounter,
    PokeAPI_PokemonEntry as PokemonEntry,
    PokeAPI_PokemonForm as PokemonForm,
    PokeAPI_PokemonFormSprites as PokemonFormSprites,
    PokeAPI_PokemonHabitat as PokemonHabitat,
    PokeAPI_PokemonHeldItem as PokemonHeldItem,
    PokeAPI_PokemonHeldItemVersion as PokemonHeldItemVersion,
    PokeAPI_PokemonMove as PokemonMove,
    PokeAPI_PokemonMoveVersion as PokemonMoveVersion,
    PokeAPI_PokemonShape as PokemonShape,
    PokeAPI_PokemonSpecies as PokemonSpecies,
    PokeAPI_PokemonSpeciesDexEntry as PokemonSpeciesDexEntry,
    PokeAPI_PokemonSpeciesGender as PokemonSpeciesGender,
    PokeAPI_PokemonSpeciesVariety as PokemonSpeciesVariety,
    PokeAPI_PokemonSprites as PokemonSprites,
    PokeAPI_PokemonStat as PokemonStat,
    PokeAPI_PokemonType as PokemonType,
    PokeAPI_Region as Region,
    PokeAPI_Stat as Stat,
    PokeAPI_SuperContestEffect as SuperContestEffect,
    PokeAPI_Type as Type,
    PokeAPI_TypePokemon as TypePokemon,
    PokeAPI_TypeRelations as TypeRelations,
    PokeAPI_VerboseEffect as VerboseEffect,
    PokeAPI_Version as Version,
    PokeAPI_VersionEncounterDetail as VersionEncounterDetail,
    PokeAPI_VersionGameIndex as VersionGameIndex,
    PokeAPI_VersionGroup as VersionGroup,
    PokeAPI_VersionGroupFlavorText as VersionGroupFlavorText,
  };
}

export { PokeAPI };
