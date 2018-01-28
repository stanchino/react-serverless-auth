import { matchSnapshot } from "./shared-examples";

import { ActionButton } from "..";

describe("ActionButton", () => {
    it("matches the snapshot", () => matchSnapshot(ActionButton));
});