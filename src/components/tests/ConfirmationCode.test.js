import { ConfirmationCode } from "../..";

import { matchFormSnapshot } from "./shared-examples";

describe("ConfirmationCode", () => {
    it("matches the snapshot", () => {
        matchFormSnapshot(ConfirmationCode)
    });
});