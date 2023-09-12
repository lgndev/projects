export interface item {
  type?:
    | "default"
    | "longGun"
    | "handGun"
    | "amulet"
    | "ring"
    | "relic"
    | "archetype";
  name?: string;
  BD?: number;
  BDX?: number;
  CHD?: number;
  WPD?: number;
  CHC?: number;
  CHX?: number;
  WPX?: number;
  RPS?: number;
  RPSX?: number;
  magSize?: number;
  reload?: number;
  reloadX?: number;
}
