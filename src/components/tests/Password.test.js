import { Password } from "../..";

import { matchFormSnapshot } from "./sharedExamples";

describe("Password", () => it("matches the snapshot", () => matchFormSnapshot(Password)));