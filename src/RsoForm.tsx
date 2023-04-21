import { For, createSignal, Component, createResource } from "solid-js";
import { createStore } from "solid-js/store";
import { userInfo, userCredentials, getUniversities,  RegisterUserAsync, LoginUserAsync, CCLoginResponse } from "./scripts/CampusCrawlWebApiClient";
import { useForm } from "./scripts/useForm"
import { user, setUser } from "./userState";

const RsoForm : Component = () =>
{
    const [universities] = createResource(getUniversities);

    const { form, updateFormField, createRsoSubmit} = useForm();

    const handleSubmit = (event: Event): void => {
        event.preventDefault();

        createRsoSubmit(form, user().universityId);
    };

return (
    <div class="mx-6 py-6">
        <h2 class="mx-auto text-center">Create RSO</h2>
        <form class="mx-auto bg-white shadow-md rounded px-8 pt-16 pb-8 mb-4 w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
        Name
      </label>
      <input
          class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-rsoName"
          type="text"
          placeholder="Campus CrawlerZ"
          value={form.rsoName}
          onChange={updateFormField("rsoName")}
      />
    </div>
  <div class="flex flex-wrap -mx-3 mb-6">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
        Description
      </label>
      <input
          class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-rsoDescription"
          type="text"
          placeholder="We just crawl and stuff."
          value={form.rsoDescription}
          onChange={updateFormField("rsoDescription")}
      />
    </div>
    <button
        class="text-center hover:bg-xanthous md:w-2/3 px-3 mb-6 md:mb-0 inline block bg-white rounded font-bold align-baseline"
        onClick={handleSubmit}
        >
            Submit
    </button>
</form>
    </div>
);
}

export default RsoForm;
