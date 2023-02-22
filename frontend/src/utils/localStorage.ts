export const getAccessToken = (): string | null => localStorage.getItem('token');
export const removeAccessToken = (): void => { localStorage.removeItem('token'); };
export const setAccessToken = (token: string): void => { localStorage.setItem('token', token); };


export const getRefreshToken = (): string | null => localStorage.getItem('refreshToken');
export const removeRefreshToken = (): void => { localStorage.removeItem('refreshToken'); };
export const setRefreshToken = (refreshToken: string): void => { localStorage.setItem('refreshToken', refreshToken); };