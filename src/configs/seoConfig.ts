export const siteName = import.meta.env.VITE_APP_NAME
export const titleMerge = (title: string) => `${title} | ${siteName}`
