import "./App.css";
import { Header } from "./components/Header";
import { AboutSection } from "./components/AboutSection";
import { KnowMoreSection } from "./components/KnowMoreSection";
import { HistorySection } from "./components/HistorySection";
import { MythSection } from "./components/MythsSection";
import { ReviewSection } from "./components/ReviewsSection";
import { SecuritySection } from "./components/SecuritySection";
import { ContactsSection } from "./components/ContactsSection";
import { Footer } from "./components/Footer";
import { Background } from "./components/Background";
import { useFortressData } from "./hooks/useFortressData";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { useMemo, useRef } from "react";

function App() {
  const { data, error, loading } = useFortressData();

  const contactsRef = useRef<HTMLDivElement | null>(null);
  const securitysRef = useRef<HTMLDivElement | null>(null);
  const reviewsRef = useRef<HTMLDivElement | null>(null);
  const mythsRef = useRef<HTMLDivElement | null>(null);
  const historyRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  const refs = useMemo(
    () => ({
      contacts: contactsRef,
      security: securitysRef,
      reviews: reviewsRef,
      myths: mythsRef,
      history: historyRef,
      about: aboutRef,
    }),
    []
  );

  if (error) return <div>Error: </div>;

  if (loading || !data) return <LoadingSpinner />;

  return (
    <>
      <Header sectionRefs={refs} headerData={data.header} />
      <Background />
      <AboutSection ref={aboutRef} aboutSectionData={data.aboutSection} />
      <KnowMoreSection knowMoreSectionData={data.knowMoreSection} />
      <HistorySection
        ref={historyRef}
        historySectionData={data.historySection}
      />
      <MythSection ref={mythsRef} mythsSectionData={data.mythsSection} />
      <ReviewSection
        ref={reviewsRef}
        explorersSectionData={data.explorersSection}
      />
      <SecuritySection
        ref={securitysRef}
        securitySectionData={data.securitySection}
      />
      <ContactsSection
        ref={contactsRef}
        contactsSectionData={data.contactsSection}
      />
      <Footer footerData={data.footer} />
    </>
  );
}

export default App;
