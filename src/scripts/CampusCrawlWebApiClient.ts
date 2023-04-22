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

export interface Event
{
    id: string,
    adminId: string,
    locationId: string,
    name: string,
    description: string,
    category: string,
    startTime: string,
    endTime: string
}

export interface eventArgs
{
    id: string,
    type: string
}

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

export async function getRsos(uid: string)
{
    try
    {
        const response = await fetch(`${webApiBaseUrl}/rsos`,
               {
                   method: 'POST',
                   headers: {
                       'accept': 'text/plain',
                       'Content-Type': 'application/json'
                   },
                   body: JSON.stringify(uid)
               });

        let result = await response.json();
        let x = JSON.stringify(result);
        console.log(`received from get rsos api ${x}`);

        return result.data;
    } catch(e)
    {
        return null;
    }
}

export async function getEvents(eventArgs: eventArgs)
{
    try
    {
        const response = await fetch(`${webApiBaseUrl}/events/${eventArgs.type}/${eventArgs.id}`,
               {
                   method: 'GET',
               });

        let result = await response.json();
        let x = JSON.stringify(result);
        console.log(`received from get events api ${x}`);

        return result.data;
    } catch(e)
    {
        return null;
    }
}
export async function getRsosByUser(userId: string)
{
    try
    {
        const response = await fetch(`${webApiBaseUrl}/rsos/${userId}`,
               {
                   method: 'GET',
               });

        let result = await response.json();
        let x = JSON.stringify(result);
        console.log(`get rso by user ${x}`);

        return result.data;
    } catch(e)
    {
        return null;
    }
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
        console.log(`received from get universities api ${x}`);

        return result.data;
    } catch(e)
    {
        return null;
    }
}

export interface RSO
{
    name: string,
    description: string,
    universityId: string,
    id: string,
    status: string,
    university: {}
}

export async function rsoAction(uid: string, rsoId: string, path: string)
{
    let ret: Response =
    {
        err: "",
        hasErr: false
    }

    try
    {
        const response = await fetch(`${webApiBaseUrl}/rsos/${path}/${rsoId}`,
               {
                   method: 'POST',
                   headers: {
                       'accept': 'text/plain',
                       'Content-Type': 'application/json'
                   },
                   body: JSON.stringify(uid)
               });

         ret = await response.json();
        console.log(`received from rsos/leave/ api ${JSON.stringify(ret)}`);
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
export async function LeaveRso(uid: string, rsoId: string)
{
    let ret: Response =
    {
        err: "",
        hasErr: false
    }

    try
    {
        const response = await fetch(`${webApiBaseUrl}/rsos/leave/${rsoId}`,
               {
                   method: 'POST',
                   headers: {
                       'accept': 'text/plain',
                       'Content-Type': 'application/json'
                   },
                   body: JSON.stringify(uid)
               });

         ret = await response.json();
        console.log(`received from rsos/leave/ api ${JSON.stringify(ret)}`);
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

export async function CreateRsoAsync(rso: RSO)
{
    let ret: Response =
    {
        err: "",
        hasErr: false
    }

    try
    {
        const response = await fetch(`${webApiBaseUrl}/rsos/create`,
               {
                   method: 'POST',
                   headers: {
                       'accept': 'text/plain',
                       'Content-Type': 'application/json'
                   },
                   body: JSON.stringify(rso)
               });

         ret = await response.json();
        console.log(`received from rsos/create  api ${JSON.stringify(ret)}`);
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

export async function RegisterUserAsync(user: User)
{
    let ret: Response =
    {
        err: "",
        hasErr: false
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
