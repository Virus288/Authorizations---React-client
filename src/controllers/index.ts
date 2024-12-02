export const sendToRegisterPage = (): void => {
  const client = import.meta.env.VITE_API_BACKEND_REGISTER_CLIENT as string;
  const server = import.meta.env.VITE_API_BACKEND as string;

  const queryParams = new URLSearchParams({
    client,
  }).toString();

  window.location.href = `${server}/user/register/start?${queryParams}`;
};

export const sendToLoginPage = (): void => {
  const client = import.meta.env.VITE_API_BACKEND_LOGIN_CLIENT as string;
  const server = import.meta.env.VITE_API_BACKEND as string;

  const queryParams = new URLSearchParams({
    client,
  }).toString();

  window.location.href = `${server}/user/login?${queryParams}`;
};

export const sendToLogoutPage = (): void => {
  const client = import.meta.env.VITE_API_BACKEND_LOGOUT_CLIENT as string;
  const server = import.meta.env.VITE_API_BACKEND as string;

  const queryParams = new URLSearchParams({
    client,
  }).toString();

  window.location.href = `${server}/user/logout/start?${queryParams}`;
};

export const getUserinfo = async (): Promise<string> => {
  const server = import.meta.env.VITE_API_BACKEND as string;
  const homeUrl = import.meta.env.VITE_API_HOME as string;

  const res = await fetch(`${server}/user/validate`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': homeUrl,
    },
  });

  if (res.ok) {
    return ((await res.json()) as { data: { login: string } }).data.login;
  }

  console.log('Got error', await res.json());
  return 'None. User is not logged in, or something is wrong';
};
