export interface NavItem {
  name: string;
  url: string;
}

export interface Image {
  src: string;
  alt: string;
}

export interface BaseSectionData {
  content: string;
}

export interface SectionDataWithImage extends BaseSectionData {
  images: Image[];
}

export interface Myth {
  text: string;
}

export interface Explorer {
  text: string;
  image: Image;
}

export interface SecurityDetail {
  text: string;
  image: Image;
}

export interface HeaderData {
  logo: string;
  nav: NavItem[];
}

export interface HistorySectionData extends SectionDataWithImage {
  jumpingImages?: Image[];
}

export interface SecuritySectionData {
  content: SecurityDetail[];
}

export interface ExplorerSectionData {
  content: Explorer[];
}
export interface MythsSectionData {
  content: Myth[];
  images: Image[];
}

export interface FortressData {
  header: HeaderData;
  aboutSection: SectionDataWithImage;
  knowMoreSection: SectionDataWithImage;
  historySection: HistorySectionData;
  mythsSection: MythsSectionData;
  explorersSection: ExplorerSectionData;
  securitySection: SecuritySectionData;
  contactsSection: BaseSectionData;
  footer: BaseSectionData;
}
