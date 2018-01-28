import { matchSnapshot } from "./shared-examples";

import FlashMessages from "../FlashMessages";

describe("FlashMessages", () => {
    it("matches the snapshot", () => matchSnapshot(FlashMessages, { flash: { error: "error", notice: "notice" } }));
});