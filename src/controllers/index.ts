export const sendToRegisterPage = (): void => {
  const client = import.meta.env.VITE_API_BACKEND_CLIENT as string;
  const server = import.meta.env.VITE_API_BACKEND as string;

  const queryParams = new URLSearchParams({
    client,
  }).toString();

  window.location.href = `${server}/user/register/start?${queryParams}`;
};

export const sendToLoginPage = (): void => {
  const client = import.meta.env.VITE_API_BACKEND_CLIENT as string;
  const server = import.meta.env.VITE_API_BACKEND as string;

  const queryParams = new URLSearchParams({
    client,
  }).toString();

  window.location.href = `${server}/user/login?${queryParams}`;
};
