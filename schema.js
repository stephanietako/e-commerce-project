import project from "./sanity/schemas/project-schema";
import blockContent from "./sanity/schemas/blockContent";
import page from "./sanity/schemas/page-schema";
import product from "./sanity/schemas/product-schema";
import category from "./sanity/schemas/category-schema";
import starProduct from "./sanity/schemas/starProduct-schema";
import plus from "./sanity/schemas/plus-schema";
import user from "./sanity/schemas/user-schema";
import account from "./sanity/schemas/account-schema";
import verificationToken from "./sanity/schemas/verificationToken-schema";
import plusProduct from "./sanity/schemas/plusProduct-schema";
import star from "./sanity/schemas/star-schema";
import order from "./sanity/schemas/order-schema";

export const schemaTypes = [
  project,
  blockContent,
  page,
  product,
  category,
  star,
  starProduct,
  plus,
  plusProduct,
  user,
  account,
  order,
  verificationToken,
];
