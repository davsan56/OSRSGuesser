import seedrandom from "seedrandom";
import { LatLng } from "leaflet";

class Location {
  constructor(image, latLng) {
    this.image = image;
    this.latLng = latLng;
  }
}

const HiddenLocations = [
  new Location("lletya", new LatLng(-46.125, 61.625)),
  new Location("varrock_center", new LatLng(-33.671875, 101.984375)),
  new Location("falador_castle", new LatLng(-37.750789, 90.695791)),
  new Location("lumbridge_castle", new LatLng(-43.53125, 102.078125)),
  new Location("barbarian_village", new LatLng(-33.109375, 95.6875)),
  new Location("ferox_enclave", new LatLng(-23.96875, 98.046875)),
  new Location("grand_tree_entrance", new LatLng(-30.859375, 66.984375)),
  new Location("woodcutting_guild", new LatLng(-30.921875, 25.015625)),
  new Location("mount_karuulm", new LatLng(-15.953125, 12.859375)),
  new Location("west_ardy", new LatLng(-39.69308, 67.509671)),
  new Location("ardy_monastary", new LatLng(-43.953125, 73.562)),
  new Location("camelot_round_table", new LatLng(-30.046875, 80.84375)),
  new Location("seers_church_yews", new LatLng(-32.140625, 78.4375)),
  new Location("ungael", new LatLng(-4.59375, 57.917587)),
  new Location("emirs_arena", new LatLng(-42.859375, 109.875)),
  new Location("ardy_zoo", new LatLng(-40.890625, 74.3125)),
  new Location("wizards_guild", new LatLng(-49.703125, 73.171875)),
  new Location("wizards_tower", new LatLng(-46.21875, 97.21875)),
  new Location("draynor_village_jail", new LatLng(-42.203125, 98.015625)),
  new Location("varrock_sewers_bear", new LatLng(-30.40625, 102.75)),
  new Location("witches_house", new LatLng(-31.640625, 87.328125)),
  new Location("burthorpe_games_room", new LatLng(-27.34375, 87.28125)),
  new Location("troll_stronghold", new LatLng(-21.671875, 83.671875)),
  new Location("polar_hunter", new LatLng(-16.53125, 79.25)),
  new Location("lighthouse_basalt_agility", new LatLng(-25.203125, 69.421875)),
  new Location("kraken_cave", new LatLng(-25.15625, 57.96875)),
  new Location("falcon_hunting", new LatLng(-26.71875, 62.765625)),
  new Location("minnow_platform", new LatLng(-32.875, 73.75)),
  new Location("observatory", new LatLng(-45.5, 66.640625)),
  new Location("chompy_hunting", new LatLng(-50.890625, 60.984375)),
  new Location("feldip_hills_hunter", new LatLng(-58.515625, 73)),
  new Location("edgeville_yews", new LatLng(-31.75, 96.125)),
  new Location("catherby_beach", new LatLng(-33.59375, 84.953125)),
  new Location("waterbirth_island", new LatLng(-19.046875, 69.6875)),
  new Location("miscellania_castle", new LatLng(-13.390625, 69.21875)),
  new Location("etceteria_farm", new LatLng(-13.296875, 72.515625)),
  new Location("jatizo_entrance", new LatLng(-16.5, 64.5)),
  new Location("neitiznot_yaks", new LatLng(-16.84375, 60.203125)),
  new Location("island_of_stone", new LatLng(-6.296875, 67.171875)),
  new Location("pirates_cove", new LatLng(-15.828125, 54.671875)),
  new Location("lunar_island_flax", new LatLng(-12.65625, 50.6875)),
  new Location("canifis", new LatLng(-31.96875, 115.234375)),
  new Location("slayer_tower", new LatLng(-27.9375, 111.421875)),
  new Location("mort_myre_swamp", new LatLng(-39.828125, 111.859375)),
  new Location("burgh_de_rott", new LatLng(-43.234375, 115.453125)),
  new Location("meiyerditch", new LatLng(-43.734375, 121.109375)),
  new Location("darkmeyer", new LatLng(-38.84375, 120.4375)),
  new Location("undead_cow_pen", new LatLng(-29.328125, 120.984375)),
  new Location("port_phasmatys", new LatLng(-31.40625, 123.890625)),
  new Location("slepe", new LatLng(-39.640625, 126.6875)),
  new Location("mos_le'harmless", new LatLng(-55.0625, 126.34375)),
  new Location("harmony_island", new LatLng(-59.907989, 129.423482)),
  new Location("fossil_island_house", new Location(-13.03125, 127.484375)),
  new Location(
    "fossil_island_mushroom_forest",
    new LatLng(-13.9375, 123.78125)
  ),
  new Location("fossil_island_tar_swamp", new LatLng(-18.359375, 124.015625)),
  new Location("fossil_island_volcano", new LatLng(-16.984375, 129.46875)),
  new Location("fossil_island_volcano_2", new LatLng(-18.734375, 127.484375)),
  new Location("lithriken", new LatLng(-6.453125, 118.28125)),
  new Location("al_kharid", new LatLng(-44.78125, 106.71875)),
  new Location("mta", new LatLng(-40.046875, 108.203125)),
  new Location("giants_plateau", new LatLng(-46.703125, 110.28125)),
  new Location("nardah_oven", new LatLng(-59.1875, 112.421875)),
  new Location("pollnivneach", new LatLng(-55.125, 109.171875)),
  new Location("river_elid", new LatLng(-49.875, 109.5)),
  new Location("bedabin_camp", new LatLng(-52.453125, 99.796875)),
  new Location("ruins_of_unkah", new LatLng(-61.09375, 100.15625)),
  new Location("necropolis", new LatLng(-66.890625, 106.78125)),
  new Location("draynor_manor", new LatLng(-38, 96.25)),
  new Location("entrana", new LatLng(-37.453125, 84.453125)),
  new Location("ape_atoll", new LatLng(-65.078125, 82.890625)),
  new Location("void_knights_outpost", new LatLng(-70.34375, 75.5625)),
  new Location("musa_point", new LatLng(-45.34375, 88.515625)),
  new Location("brimhaven", new LatLng(-45.421875, 82.328125)),
  new Location("tai_bwo_wannai", new LatLng(-51.234375, 82.390625)),
  new Location("shilo_village", new LatLng(-55.015625, 84.125)),
  new Location("soul_wars", new LatLng(-61.3125, 54.96875)),
  new Location("poison_waste", new LatLng(-49.609375, 55.3125)),
  new Location("weiss", new LatLng(-9.859375, 86.671875)),
];

const editableLocations = [...HiddenLocations];

export function getDateString() {
  const date = new Date();
  const day = date.getUTCDate().toString();
  const month = (date.getUTCMonth() + 1).toString(); // Month is 0 based
  const year = date.getUTCFullYear().toString();
  return month + day + year;
}

function dateSeed() {
  const seed = seedrandom(getDateString())();
  return seed;
}

export function getRandomLocations(numberOfLocationsToGuess) {
  let randomLocations = [];
  while (randomLocations.length < numberOfLocationsToGuess) {
    for (let i = randomLocations.length; i < numberOfLocationsToGuess; i++) {
      let locationIndex = Math.floor(dateSeed() * editableLocations.length);
      randomLocations.push(editableLocations[locationIndex]);
      editableLocations.splice(locationIndex, 1);
    }
  }
  return randomLocations;
}
