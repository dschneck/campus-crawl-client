import { For, createSignal, Component } from "solid-js";
import { userInfo, userCredentials, RegisterUserAsync, LoginUserAsync, CCLoginResponse } from "./scripts/CampusCrawlWebApiClient";
import { useForm } from "./scripts/useForm"

const Login: Component = () => {
    const { form, updateFormField, loginSubmit, clearField } = useForm();

    const handleSubmit = (event: Event): void => {
        event.preventDefault();
        console.log(form);
        loginSubmit(form);
    };

    return (
    <>
    <form class=" mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="w-full max-w-xs">
            <div class="mb-4">
                <div class="md:w-1/3">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                </div>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="email"
                value={form.email}
                onChange={updateFormField("email")}
                />
            </div>

            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                value={form.password}
                onChange={updateFormField("password")}
                placeholder="******************"
                />
            </div>

            <div class="flex items-center justify-between">
                <button
                class="bg-white hover:bg-xanthous text-chestnut py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSubmit}>
                    Sign In
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
                </a>
            </div>
        </div>
    </form>
    </>
    )
};

export default Login;


