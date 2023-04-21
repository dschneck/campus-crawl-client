import { For, createSignal, Component, createResource } from "solid-js";
import { createStore } from "solid-js/store";
import { userInfo, userCredentials, getRsos,  RegisterUserAsync, LoginUserAsync, CCLoginResponse } from "./scripts/CampusCrawlWebApiClient";
import { useForm } from "./scripts/useForm"

const LeaveRso : Component = () =>
{
    const [rsos] = createResource(getRsos);

    const { form, updateFormField, registerSubmit} = useForm();

    const handleSubmit = (event: Event): void => {
        event.preventDefault();

        registerSubmit(form);
    };

return (
    <>
        <form class="mx-auto bg-white shadow-md rounded px-8 pt-16 pb-8 mb-4 w-full max-w-lg">
        <h2 class="mx-auto text-center">Leave RSO</h2>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-university">
        RSOs
      </label>
      <div class="relative">
        <select
            onChange={updateFormField("universityId")}
            class="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-university">
          <For each={rsos()}>{(rso) =>
            <option value={`${rso.id}`}>{`${rso.name}`}</option>
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
            Leave
    </button>
  </div>
</form>
    </>
);
}

export default LeaveRso;
