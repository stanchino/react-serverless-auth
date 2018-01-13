import { matchSnapshot } from "./sharedExamples";

import { ResetButton } from "..";

describe("ResetButton", () => {
    it("matches the snapshot", () => matchSnapshot(ResetButton, { form: { pristine: false, submitting: false } }));
});