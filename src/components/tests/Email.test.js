import { Email } from "../..";

import { matchFormSnapshot } from "./sharedExamples";

describe("Email", () => it("matches the snapshot", () => matchFormSnapshot(Email)));