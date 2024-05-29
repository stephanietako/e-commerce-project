import project from "./schemas/project-schema";
import blockContent from "./schemas/blockContent";
import page from "./schemas/page-schema";
import product from "./schemas/product-schema";
import category from "./schemas/category-schema";
import starProduct from "./schemas/starProduct-schema";
import plus from "./schemas/plus-schema";
import user from "./schemas/user-schema";
import account from "./schemas/account-schema";
import verificationToken from "./schemas/verificationToken-schema";
import plusProduct from "./schemas/plusProduct-schema";
import star from "./schemas/star-schema";

export const schema = {
  types: [
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
    verificationToken,
  ],
};
