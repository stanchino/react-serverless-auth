import { connectForm } from "./connectForm";
import { signIn } from "../actions";

export default connectForm({ form: "signIn", onSubmit: signIn});