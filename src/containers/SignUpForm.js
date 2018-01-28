import { connectForm } from "./connectForm";
import { signUp } from "../actions";

export default connectForm({ form: "signUp", onSubmit: signUp});