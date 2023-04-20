import { createStore } from "solid-js/store";
import { LoginUserAsync, RegisterUserAsync, CCLoginRequest, User} from "./CampusCrawlWebApiClient";
import { setUser } from '../userState';

type FormFields = {
    firstName: string,
    lastName: string,
    password: string,
    email: string,
    universityId: string
};

const registerSubmit = async (form: FormFields) => {
    const userToRegister = {
        firstName: form.firstName,
        lastName: form.lastName,
        password: form.password,
        email: form.email,
        universityId: form.universityId,
        id: ""
    }

    console.log(`registering ${JSON.stringify(userToRegister)}`);
    let registerdUser = await RegisterUserAsync( userToRegister as User);

    if (registerdUser.hasErr)
    {
      alert(registerdUser.err);
      return;
    }

    console.log(`registerd user: ${JSON.stringify(registerdUser.data)}`);
      setUser(JSON.parse(JSON.stringify(registerdUser.data)));
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
      return;
  }

  console.log(`valid login: ${JSON.stringify(userLoggedIn.data)}`);
  setUser(JSON.parse(JSON.stringify(userLoggedIn.data)));
};

const useForm = () => {
  const [form, setForm] = createStore<FormFields>({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    universityId: ""
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

  return { form, loginSubmit, registerSubmit, updateFormField, clearField };
};

export { useForm };
