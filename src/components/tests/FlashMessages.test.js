import { matchSnapshot } from "./sharedExamples";

import FlashMessages from "../FlashMessages";

describe("FlashMessages", () => {
    it("matches the snapshot", () => matchSnapshot(FlashMessages, { flash: { error: "error", notice: "notice" } }));
});