export interface NavItem {
  name: string;
  url: string;
}

export interface Image {
  src: string;
  alt: string;
}

export interface SectionData {
  content: string;
  images?: Image[];
}

export interface Myth {
  text: string;
}

export interface Explorer {
  text: string;
}

export interface SecurityDetail {
  text: string;
}

export interface HeaderData {
  logo: string;
  nav: NavItem[];
}

export interface HistorySectionData extends SectionData {
  jumpingImages?: Image[];
}

export interface FortressData {
  header: HeaderData;
  aboutSection: SectionData;
  knowMoreSection: SectionData;
  historySection: HistorySectionData;
  mythsSection: {
    content: Myth[];
    images: Image[];
  };
  explorersSection: {
    content: Explorer[];
    images: Image[];
  };
  securitySection: {
    content: SecurityDetail[];
    images: Image[];
  };
  contactsSection: {
    content: string;
  };
  footer: {
    content: string;
  };
}
