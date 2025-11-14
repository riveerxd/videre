export const useStructuredData = () => {
  const addOrganizationSchema = (data: {
    name: string
    url: string
    logo?: string
    sameAs?: string[]
  }) => {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: data.name,
            url: data.url,
            logo: data.logo,
            sameAs: data.sameAs || []
          })
        }
      ]
    })
  }

  const addWebsiteSchema = (data: {
    name: string
    url: string
    description?: string
  }) => {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: data.name,
            url: data.url,
            description: data.description
          })
        }
      ]
    })
  }

  const addBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: items.map((item, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: item.name,
              item: item.url
            }))
          })
        }
      ]
    })
  }

  return {
    addOrganizationSchema,
    addWebsiteSchema,
    addBreadcrumbSchema
  }
}
