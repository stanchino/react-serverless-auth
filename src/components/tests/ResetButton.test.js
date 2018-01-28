import { matchSnapshot } from "./shared-examples";

import { ResetButton } from "..";

describe("ResetButton", () => {
    it("matches the snapshot", () => matchSnapshot(ResetButton, { form: { pristine: false, submitting: false } }));
});