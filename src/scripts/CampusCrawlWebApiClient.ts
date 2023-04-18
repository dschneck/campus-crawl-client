const webApiBaseUrl = "https://campus-crawl-web-api-server-32wswsezka-uc.a.run.app";

export interface userCredentials
{
    email: string,
    password: string,
}

export interface userInfo
{
    firstName: string,
    lastName: string,
    university: string
};

export interface User extends userCredentials, userInfo
{
}

export interface CCLoginRequest extends userCredentials
{

}

interface IResponse
{
    err: string
    hasErr: boolean
}

export interface CCLoginResponse extends IResponse
{
    data: string
}

export async function RegisterUserAsync(user: userInfo)
{
    const first = user.university;
    return first;
}

export async function LoginUserAsync(request: CCLoginRequest): Promise<CCLoginResponse>
{
    let ret : CCLoginResponse =
    {
        err: "Missing Response",
        hasErr: true,
        data: ""
    };

    try
    {
        const response = await fetch(`${webApiBaseUrl}/login`,
               {
                   method: 'POST',
                   body :JSON.stringify(request)
               });

        ret = JSON.parse(await response.json());
        console.log(`received this from api ${ret}`);

    } catch(e)
    {
        console.error(e);
    }

    return ret;
}
