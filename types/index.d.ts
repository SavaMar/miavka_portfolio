type LinkLable =
  | "bjj"
  | "photography"
  | "tattoo"
  | "art"
  | "development"
  | "shop";

export interface PhotoLink {
  imgURL: string;
  route: string;
  label: LinkLable;
  linkName: string;
}
