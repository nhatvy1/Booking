import { useTranslation } from "../i18n"

export default async function Home({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng, 'header')
  
  return <p>{t('header.1')}</p>
}
