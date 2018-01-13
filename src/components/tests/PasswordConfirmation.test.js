import { PasswordConfirmation } from "../..";

import { matchFormSnapshot } from "./sharedExamples";

describe("PasswordConfirmation", () => it("matches the snapshot", () => matchFormSnapshot(PasswordConfirmation)));