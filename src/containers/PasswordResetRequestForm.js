import { connectForm } from "./connectForm";
import { passwordResetRequest } from "../actions";

export default connectForm({ form: "passwordResetRequest", onSubmit: passwordResetRequest});