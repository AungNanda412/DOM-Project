import initialRender from "./inititalRender";
import listener from "./listener";
import setup from "./setup"

export const init = () => {
    

    setup();

    initialRender();

    listener();
}