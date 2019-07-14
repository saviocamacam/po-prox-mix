import { InMemoryDbService } from "angular-in-memory-web-api";

import { POFakeDb } from "app/fake-db/po";

export class FakeDbService implements InMemoryDbService {
    createDb(): any {
        return {
            "entering-steps": POFakeDb.entering,
            "transport-steps": POFakeDb.entering,
            "designation-steps": POFakeDb.entering
        };
    }
}
