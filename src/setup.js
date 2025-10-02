import { BellRing, createIcons, Menu, Minus, Moon, Plus, RefreshCcw, Search, Sun, Tag, User, X } from "lucide";
import { themeToggleDarkIcon, themeToggleLightIcon } from "./selecters";

const setup = () => {
    iconSetup();
    themeModeSetup();
};

const iconSetup = () => {
    createIcons({
    icons: {
        Menu,
        Sun,
        Moon,
        RefreshCcw,
        BellRing,
        User,
        Search,
        Plus,
        Tag,
        Minus,
        X
    },
    });
};

const themeModeSetup = () => {
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }
  // Change the icons inside the button based on previous settings
    if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
    themeToggleLightIcon.classList.remove("hidden");
    } else {
    themeToggleDarkIcon.classList.remove("hidden");
    }
};

export default setup;
