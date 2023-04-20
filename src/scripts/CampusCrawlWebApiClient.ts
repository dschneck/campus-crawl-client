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
    universityId: string
};

export interface User extends userCredentials, userInfo
{
    id: string
}

export interface CCLoginRequest extends userCredentials
{

}

interface Response
{
    err: string,
    hasErr: boolean,
    data?: string
}

interface University
{
    id: string,
    name: string,
    address: string,
    description: string,
    numberOfStudents: number
}

interface Universities
{
    elements: Array<University>
}

export async function getUniversities()
{
    try
    {
        const response = await fetch(`${webApiBaseUrl}/universities`,
               {
                   method: 'GET',
               });

        let result = await response.json();
        let x = JSON.stringify(result);
        console.log(`received from login api ${x}`);

        return result.data;
    } catch(e)
    {
        return null;
    }
}
export async function RegisterUserAsync(user: userInfo)
{
    let ret: Response =
    {
        err: "Missing Response",
        hasErr: true,
        data: ""
    }

    try
    {
        const response = await fetch(`${webApiBaseUrl}/users/register`,
               {
                    method: 'POST',
                    headers: {
                       'accept': 'text/plain',
                       'Content-Type': 'application/json'
                   },
                   body: JSON.stringify(user)
                });


        ret = JSON.parse(await response.json());
        console.log(`received from login api ${ret}`);
    } catch(e)
    {
        console.error(e);
    }

    return ret;
}

export async function LoginUserAsync(request: CCLoginRequest): Promise<Response>
{
    let ret: Response =
    {
        err: "",
        hasErr: false
    }

    try
    {
        const response = await fetch(`${webApiBaseUrl}/users/login`,
               {
                   method: 'POST',
                   headers: {
                       'accept': 'text/plain',
                       'Content-Type': 'application/json'
                   },
                   body: JSON.stringify(request)
               });

         ret = await response.json();
        console.log(`received from login api ${JSON.stringify(ret)}`);
    } catch(e)
    {
        console.error(e);
        ret =
        {
            err: "Exception thrown",
            hasErr: true,
        }
    }

    return ret;
}
