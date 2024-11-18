import { getDataPlus } from "@/sanity/lib/client";
import { getDataMinipalms } from "@/sanity/lib/client";
import Details from "../../components/Details/Details";

export const dynamic = "force-dynamic";

const PlusDetails = async ({ params }) => {
  const slug = params.plus;
  const data = await getDataPlus(slug);
  const minipalms = await getDataMinipalms();

  return (
    <>
      <Details data={data} minipalms={minipalms} />
    </>
  );
};

export default PlusDetails;
