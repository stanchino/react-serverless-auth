import { matchSnapshot } from "./shared-examples";

import Message from "../Message";

describe("Message", () => {
    it("matches the snapshot", () => matchSnapshot(Message));
});