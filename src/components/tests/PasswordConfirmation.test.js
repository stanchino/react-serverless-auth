import { PasswordConfirmation } from "../..";

import { matchFormSnapshot } from "./shared-examples";

describe("PasswordConfirmation", () => it("matches the snapshot", () => matchFormSnapshot(PasswordConfirmation)));