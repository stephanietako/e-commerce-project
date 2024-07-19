import { getData } from "@/sanity/lib/client";
import { getDataMinipalms } from "@/sanity/lib/client";
import Details from "../../components/Details/Details";

export const dynamic = "force-dynamic";

const CategoryDetails = async ({ params }) => {
  const slug = params.category;
  const data = await getData(slug);
  const minipalms = await getDataMinipalms();
  console.log("Fetched data:", data);
  console.log("Fetched minipalms:", minipalms);
  return (
    <>
      <Details data={data} minipalms={minipalms} />
    </>
  );
};

export default CategoryDetails;
