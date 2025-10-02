import { categoryList } from "./selecters";

export const createNewCategoryBtn = (category) => {
  const btn = document.createElement("button");
  btn.className =
    "bg-transparent border border-transparent text-sm text-end px-4 py-2 rounded-lg hover:bg-blue-100 hover:border-blue-400 duration-200 active:bg-blue-100 active:border-blue-400 text-black";
  btn.innerText = category.title;
  btn.setAttribute("category-id", category.id);
  return btn;
};

export const renderCategory = (inputCategories) => {
  categoryList.innerHTML = "";
  inputCategories.forEach((el) => {
    if (el.id === 0) {
        const btn = createNewCategoryBtn(el);
      btn.classList.replace("bg-transparent", "bg-blue-100");
      btn.classList.replace("text-black", "text-blue-600");
      btn.classList.replace("border-transparent", "border-blue-400");
      categoryList.append(btn);

    } else {
      categoryList.append(createNewCategoryBtn(el));
      
    }
  });
};
