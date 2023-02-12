export const getAccessToken = (): string | null => localStorage.getItem('token');
export const removeAccessToken = (): void => { localStorage.removeItem('token'); };
export const setAccessToken = (token: string): void => { localStorage.setItem('token', token); };
