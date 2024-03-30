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

type SocialLinkLabel =
  | "printshop"
  | "main_instagram"
  | "art_tattoo"
  | "photography"
  | "bjj_photos"
  | "zla_miavka"
  | "gumroad"
  | "tg_chanell"
  | "youtube";

export interface SocialLink {
  route: string;
  title: string;
  label: SocialLinkLabel;
  buttonClass: string;
}
