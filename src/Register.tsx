import { For, createSignal, Component, createResource } from "solid-js";
import { createStore } from "solid-js/store";
import { userInfo, userCredentials, getUniversities,  RegisterUserAsync, LoginUserAsync, CCLoginResponse } from "./scripts/CampusCrawlWebApiClient";
import { useForm } from "./scripts/useForm"

const Register : Component = () =>
{
    const [universities] = createResource(getUniversities);

    const { form, updateFormField, registerSubmit} = useForm();

    const handleSubmit = (event: Event): void => {
        event.preventDefault();

        registerSubmit(form);
    };

return (
    <>
        <form class="mx-auto bg-white shadow-md rounded px-8 pt-16 pb-8 mb-4 w-full max-w-lg">
  <div class="bg-white flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="grid-first-name"
          type="text"
          placeholder="Jane"
          value={form.firstName}
          onChange={updateFormField("firstName")}
      />
    </div>

    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="grid-last-name"
          type="text"
          placeholder="Doe"
          value={form.lastName}
          onChange={updateFormField("lastName")}
      />
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
        Email
      </label>
      <input
          class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-email"
          type="text"
          placeholder="email"
          value={form.email}
          onChange={updateFormField("email")}
      />
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input
          class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-password"
          type="password"
          placeholder="*********"
          value={form.password}
          onChange={updateFormField("password")}
      />
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-university">
        University
      </label>
      <div class="relative">
        <select
            onChange={updateFormField("universityId")}
            class="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-university">
          <For each={universities()}>{(university) =>
            <option value={`${university.id}`}>{`${university.name}`}</option>
          }
          </For>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <button
        class="hover:bg-xanthous md:w-2/3 px-3 mb-6 md:mb-0 inline block bg-white rounded font-bold align-baseline"
        onClick={handleSubmit}
        >
            Submit
    </button>
  </div>
</form>
    </>
);
}

export default Register;
