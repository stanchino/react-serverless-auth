import { connectForm } from "./connectForm";
import { confirmRegistration } from "../actions";

export default connectForm({ form: "confirmRegistration", onSubmit: confirmRegistration});