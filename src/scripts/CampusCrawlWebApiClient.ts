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

export interface CCLoginRequest extends userCredentials
{

}

interface IResponse
{
    err: string
}

export interface CCLoginResponse extends IResponse
{
    hasErr: boolean
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
        hasErr: true
    };

    try
    {
        const response = await fetch(`${webApiBaseUrl}/login`,
               {
                   method: 'POST',
                   body :JSON.stringify(request)
               });

        const data : CCLoginResponse = await response.json();
        console.log(data);

         ret =
         {
            err: "",
            hasErr: false
         };

    } catch(e)
    {
        console.error(e);
    }

    return ret;
}
