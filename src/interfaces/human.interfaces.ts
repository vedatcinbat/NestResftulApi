type Gender = 'Male' | 'Female';


export interface Human {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    gender: Gender
    isDead: boolean;
}