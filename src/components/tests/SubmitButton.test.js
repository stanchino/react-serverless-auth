import { matchSnapshot } from "./sharedExamples";

import { SubmitButton } from "..";

describe("SubmitButton", () => {
    it("matches the snapshot", () => matchSnapshot(SubmitButton, { form: { pristine: false, submitting: false } }));
});