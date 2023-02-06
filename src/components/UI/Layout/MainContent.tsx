import { usePageStore } from "../../../data/appState";
import { AnyShow } from "../../../data/data";
import Gallery from "../../Sections/Gallery/Gallery";
import Section from "../../Sections/Section/Section";

interface MainContentProps {
  mediaToDisplay: AnyShow[];
  defaultContent: JSX.Element;
}
const MainContent: React.FC<MainContentProps> = ({
  mediaToDisplay,
  defaultContent,
}) => {
  const { searchQuery } = usePageStore();

  const filteredContent = mediaToDisplay.filter((media) =>
    media.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return !!searchQuery ? (
    <Section
      title={`Found ${filteredContent.length} result${
        filteredContent.length > 1 ? "s" : ""
      } for '${searchQuery}'`}
      overflowX="scroll"
    >
      <Gallery mediaToDisplay={filteredContent} />
    </Section>
  ) : (
    defaultContent
  );
};

export default MainContent;
