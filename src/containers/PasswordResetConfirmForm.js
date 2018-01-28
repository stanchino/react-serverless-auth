import { connectForm } from "./connectForm";
import { passwordResetConfirm } from "../actions";

export default connectForm({ form: "passwordResetConfirmation", onSubmit: passwordResetConfirm});