import { Email } from "../..";

import { matchFormSnapshot } from "./shared-examples";

describe("Email", () => it("matches the snapshot", () => matchFormSnapshot(Email)));