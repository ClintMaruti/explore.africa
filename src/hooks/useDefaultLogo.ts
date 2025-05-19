const DEFAULT_LOGO_ID = 'YOUR_DEFAULT_IMAGE_ID_HERE'

export const setDefaultLogo = async ({ data }: { data: any }) => {
  if (!data.logo) {
    return {
      ...data,
      logo: DEFAULT_LOGO_ID,
    }
  }
  return data
}
