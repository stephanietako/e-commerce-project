import { getDataStar } from "@/sanity/lib/client";
import { getDataMinipalms } from "@/sanity/lib/client";
import Details from "../../components/Details/Details";

export const dynamic = "force-dynamic";

const StarDetails = async ({ params }) => {
  const slug = params.star;
  const data = await getDataStar(slug);
  const minipalms = await getDataMinipalms();

  return (
    <>
      <Details data={data} minipalms={minipalms} />
    </>
  );
};

export default StarDetails;
