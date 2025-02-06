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

function App() {
  const { data, error, loading } = useFortressData();

  if (error) return <div>Error: </div>;

  if (loading || !data) return <LoadingSpinner />;

  return (
    <>
      <Header headerData={data.header} />
      <Background />
      <AboutSection aboutSectionData={data.aboutSection} />
      <KnowMoreSection knowMoreSectionData={data.knowMoreSection} />
      <HistorySection historySectionData={data.historySection} />
      <MythSection mythsSectionData={data.mythsSection} />
      <ReviewSection explorersSectionData={data.explorersSection} />
      <SecuritySection securitySectionData={data.securitySection} />
      <ContactsSection contactsSectionData={data.contactsSection} />
      <Footer footerData={data.footer} />
    </>
  );
}

export default App;
