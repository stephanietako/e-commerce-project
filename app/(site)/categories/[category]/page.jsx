import { getData } from "@/sanity/lib/client";
import { getDataAccessoires } from "@/sanity/lib/client";
import Details from "../../components/Details/Details";

export const dynamic = "force-dynamic";

const CategoryDetails = async ({ params }) => {
  const slug = params.category;
  const data = await getData(slug);
  const accessoires = await getDataAccessoires();

  return (
    <>
      <Details data={data} accessoires={accessoires} />
    </>
  );
};

export default CategoryDetails;
