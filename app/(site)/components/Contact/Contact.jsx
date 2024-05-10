import Contactlinks from "../../contactlinks/[contactlink]/page";
const Contact = ({ pages }) => {
  // const contact = await getPages();
  return (
    <div className="about">
      <Contactlinks pages={pages} />
    </div>
  );
};

export default Contact;
