import Contact from "../../components/Contact/Contact";
import { getPages } from "@/sanity/lib/client";
export const dynamic = "force-dynamic";

const NavContactAboutLink = async () => {
  const contact = await getPages();
  return (
    <div>
      <div>
        <Contact contact={contact} />
      </div>
    </div>
  );
};

export default NavContactAboutLink;
