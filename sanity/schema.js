import project from "./schemas/project-schema";
import blockContent from "./schemas/blockContent";
import page from "./schemas/page-schema";
import product from "./schemas/product-schema";
import category from "./schemas/category-schema";
import starProduct from "./schemas/starProduct-schema";
import user from "./schemas/user-schema";
import account from "./schemas/account-schema";

export const schema = {
  types: [
    project,
    blockContent,
    page,
    product,
    category,
    starProduct,
    user,
    account,
  ],
};
