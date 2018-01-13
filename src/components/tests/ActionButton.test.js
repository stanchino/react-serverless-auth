import { matchSnapshot } from "./sharedExamples";

import { ActionButton } from "..";

describe("ActionButton", () => {
    it("matches the snapshot", () => matchSnapshot(ActionButton, { form: { submitting: false } }));
});