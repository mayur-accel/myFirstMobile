import LayoutComponent from "@/components/LayoutComponent";
import { Link } from "expo-router";
import { ScrollView } from "react-native";
import { PageArray } from "./_layout";

const IndexPage = () => {
  return (
    <LayoutComponent>
      <ScrollView>
        {PageArray.map((item, i) => (
          <Link
            key={i + "linkcom"}
            //@ts-ignore
            href={String(item.link || "")}
            style={{ marginTop: 20 }}
          >
            Go to {item.title} Page
          </Link>
        ))}
      </ScrollView>
    </LayoutComponent>
  );
};

export default IndexPage;
