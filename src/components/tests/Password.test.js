import { Password } from "../..";

import { matchFormSnapshot } from "./shared-examples";

describe("Password", () => it("matches the snapshot", () => matchFormSnapshot(Password)));