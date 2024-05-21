type LinkLable = "bjj" | "blog" | "tattoo" | "art" | "development" | "shop";

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
  | "blog"
  | "bjj_photos"
  | "zla_miavka"
  | "photography"
  | "gumroad"
  | "tg_chanell"
  | "youtube";

export interface SocialLink {
  route: string;
  title: string;
  label: SocialLinkLabel;
  buttonClass: string;
}

type LinkLableBjj = "photography" | "rashguards" | "merch";

export interface PhotoLinkBjj {
  imgURL: string;
  route: string;
  label: LinkLableBjj;
  linkName: string;
}
