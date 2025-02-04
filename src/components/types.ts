export interface NavItem {
  name: string;
  url: string;
}

export interface Image {
  id_image: string;
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

export interface FortressData {
  header: HeaderData;
  aboutSection: SectionData;
  knowMoreSection: SectionData;
  historySection: SectionData & { jumpingImages?: Image[] };
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
