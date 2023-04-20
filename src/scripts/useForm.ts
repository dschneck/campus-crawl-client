import { createStore } from "solid-js/store";
import { LoginUserAsync, CCLoginRequest, User} from "./CampusCrawlWebApiClient";
import { setUser } from '../userState';

type FormFields = {
    firstName: string,
    lastName: string,
    password: string,
    email: string,
};

const loginSubmit = async (form: FormFields) => {
  // here we can:
  // filter out unneeded data, e.g. the checkbox sameAsAddress
  // map fields, if needed, e.g. shipping_address
  const userToLogin = {
    email: form.email,
    password: form.password
  };

  // should be submitting your form to some backend service
  console.log(`submitting ${JSON.stringify(userToLogin)}`);
  let userLoggedIn = await LoginUserAsync( userToLogin as CCLoginRequest);

  if (userLoggedIn.hasErr)
  {
      alert(userLoggedIn.err);
      return
  }

  console.log(`valid login: ${JSON.stringify(userLoggedIn.data)}`);
  setUser(JSON.parse(userLoggedIn.data as string));
};
const useForm = () => {
  const [form, setForm] = createStore<FormFields>({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });

  const clearField = (fieldName: string) => {
    setForm({
      [fieldName]: ""
    });
  };

  const updateFormField = (fieldName: string) => (event: Event) => {
    const inputElement = event.currentTarget as HTMLInputElement;
      setForm({
        [fieldName]: inputElement.value
      });
  };

  return { form, loginSubmit, updateFormField, clearField };
};

export { useForm };
