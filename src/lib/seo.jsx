import { Helmet } from 'react-helmet-async'
export function SEO({ title='Portfolio', description='Portfolio site', url=typeof window!=='undefined'?window.location.href:undefined, image }){
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {url && <link rel="canonical" href={url} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}