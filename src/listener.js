import { handleTheme } from "./handler";
import { themeToggleBtn } from "./selecters";

const listener = () => {
    
    themeToggleBtn.addEventListener('click',handleTheme );


}

export default listener;