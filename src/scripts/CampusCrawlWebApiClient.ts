type userInfo  = {
    email: string,
    password: string,
    university: string
};

interface regiserUserFunction
function RegisterUserAsync( user: userInfo): string {
    return user.email;
}

export type{ userInfo, RegisterUserAsync}
