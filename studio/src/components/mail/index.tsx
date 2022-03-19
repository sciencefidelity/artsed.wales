import React, { FC } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import sanityClient from 'part:@sanity/base/client'
import Preheader from './components/Preheader'
import Header from './components/Header'
import Headline from './components/Headline'
import Body from './components/Body'
import Events from './components/Events'
import Footer from './components/Footer'
import s from './styles/Mail.module.css'

interface Props {
  document: any
}

const client = sanityClient.withConfig({ apiVersion: `2021-05-19` })
const queryClient = new QueryClient()
const queryCy = `{
  "newsletter": *[
    _type == "newsletter" && __i18n_lang == "cy"
  ] | order(_createdAt desc)[0]{
    _type,
    "accent": accent.hex,
    body,
    "background": background.hex,
    events[]->{
      _id, _type, dateStart, mainImage, title, summary, britelink
    },
    headline, "logo": logo.asset->.url, mainImage, "slug": slug.current,
    social[]{
      _key, "icon": icon.asset->.url, name, url
    },
    title
  },
  "company": *[_type == "company"][0]{
    "address": address.cy, "title": title.cy
  },
  "labels": {
    "browser": *[_type == "labelGroup"][1]
      .labels[key == "email.browser"][0].text.cy,
    "change": *[_type == "labelGroup"][1]
      .labels[key == "email.change"][0].text.cy,
    "unsubscribe": *[_type == "labelGroup"][1]
      .labels[key == "email.unsubscribe"][0].text.cy,
    "register": *[_type == "labelGroup"][1]
      .labels[key == "email.register"][0].text.cy
  },
  "settings": *[_type == "settings"][1]{
    "url": url.cy
  }
}`

const queryEn = `{
  "newsletter": *[
    _type == "newsletter" && __i18n_lang == "en"
  ] | order(_createdAt desc)[0]{
    _type,
    "accent": accent.hex,
    body,
    "background": background.hex,
    events[]->{
      _id, _type, dateStart, mainImage, title, summary, britelink
    },
    headline, "logo": logo.asset->.url, mainImage, "slug": slug.current,
    social[]{
      _key, "icon": icon.asset->.url, name, url
    },
    title
  },
  "company": *[_type == "company"][0]{
    "address": address.en, "title": title.en
  },
  "labels": {
    "browser": *[_type == "labelGroup"][1]
      .labels[key == "email.browser"][0].text.en,
    "change": *[_type == "labelGroup"][1]
      .labels[key == "email.change"][0].text.en,
    "unsubscribe": *[_type == "labelGroup"][1]
      .labels[key == "email.unsubscribe"][0].text.en,
    "register": *[_type == "labelGroup"][1]
      .labels[key == "email.register"][0].text.en
  },
  "settings": *[_type == "settings"][1]{
    "url": url.en
  }
}`

export default function Mail({ document }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Preview document={document} />
    </QueryClientProvider>
  )
}

const Preview: FC<Props> = ({ document }) => {
  const locale = document.displayed.__i18n_lang
  const { isLoading, error, data } = useQuery('useDocuments', () =>
    client.fetch(locale === 'cy' ? queryCy : queryEn)
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className={s.outer}>
      <table
        className={s.container}
        // border="0"
        cellPadding="0"
        cellSpacing="0"
      >
        <tr>
          <td valign="top">
            <Preheader data={data} document={document} />
            <Header data={data} document={document} />
            <Headline document={document} />
            <Body document={document} />
            <Events data={data} document={document} />
            <Footer data={data} document={document} />
          </td>
        </tr>
      </table>
    </div>
  )
}

{
  /* const loadData = async () => {
    const res = await client.fetch(groq`*[_type == "newsletter"]`)
    if (!res.ok) throw new Error(res.statusText)
    const data = res.json()
    return "data: " + data
  } */
}
