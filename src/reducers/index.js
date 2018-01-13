import { reducer as formReducer  } from "redux-form";
import auth from "./auth";

export default {
    auth: auth,
    form: formReducer
};