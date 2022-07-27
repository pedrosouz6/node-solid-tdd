import { InMemoryChallengesRepository } from "../../../test/repositories/in-memory-challenge-repository";
import { InMemoryStudentsRepository } from "../../../test/repositories/in-memory-students-repository";
import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";
import { CreateChallengeSubmission } from "./create-challenge-submission";

describe('Create challenge submission use case', () => {
    it('should be able to create a new challenge submission', async () => {

        const studentRepository = new InMemoryStudentsRepository();
        const challengeRepository = new InMemoryChallengesRepository();

        const student = Student.create({
            name: 'Diego',
            email: 'doe@example.com'
        })

        const challenge = Challenge.create({
            name: 'Challenge',
            instructionsUrl: 'http://example.com'
        })

        studentRepository.items.push(student);
        challengeRepository.items.push(challenge);

        const sup = new CreateChallengeSubmission(
            studentRepository,
            challengeRepository
        );

        const response = await sup.execute({
            studentId: student.id,
            challengeId: challenge.id 
        })

        expect(response).toBeTruthy();
    })
})