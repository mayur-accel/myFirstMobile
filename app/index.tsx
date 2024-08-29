import LayoutComponent from "@/components/LayoutComponent";
import { Link } from "expo-router";
import { PageArray } from "./_layout";

const IndexPage = () => {
  return (
    <LayoutComponent>
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
    </LayoutComponent>
  );
};

export default IndexPage;
