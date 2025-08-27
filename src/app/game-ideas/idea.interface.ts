export interface Idea {
    id: number;
    description: string;
    upvotes: number;
    downvotes: number;
    status?: VoteStatus;
}

export type VoteStatus = 'upvoted' | 'downvoted' | 'none';