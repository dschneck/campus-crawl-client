type userInfo  = {
    email: string,
    password: string,
    university: string
};

function RegisterUserAsync( user: userInfo): string {
    const first = user.university;
    return first;
}

export type { userInfo, RegisterUserAsync }
