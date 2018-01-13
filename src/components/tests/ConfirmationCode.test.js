import { ConfirmationCode } from "../..";

import { matchFormSnapshot } from "./sharedExamples";

describe("ConfirmationCode", () => {
    it("matches the snapshot", () => {
        matchFormSnapshot(ConfirmationCode)
    });
});