import { Entity } from "../../core/domain/Entity";

export type ChallengeProps = {
    instructionsUrl: string,
    name: string
}

export class Challenge extends Entity<ChallengeProps> {
    private constructor(props: ChallengeProps, id?: string) {
        super(props, id);
    }

    static create(props: ChallengeProps, id?: string) {
        const challenge = new Challenge(props, id);

        return challenge;
    }
}