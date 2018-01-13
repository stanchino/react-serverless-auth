import { matchSnapshot } from "./sharedExamples";

import Message from "../Message";

describe("Message", () => {
    it("matches the snapshot", () => matchSnapshot(Message));
});