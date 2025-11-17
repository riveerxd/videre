interface OpeningHours {
  dayOfWeek: string | string[]
  opens: string
  closes: string
}

interface LocalBusinessData {
  name: string
  description: string
  url: string
  telephone: string
  email: string
  image?: string
  address: {
    streetAddress: string
    addressLocality: string
    postalCode: string
    addressCountry: string
  }
  geo?: {
    latitude: number
    longitude: number
  }
  openingHours?: OpeningHours[]
  priceRange?: string
  medicalSpecialty?: string
}

interface ServiceData {
  name: string
  description: string
  provider: string
  serviceType: string
  areaServed?: string
  url?: string
}

interface FAQItem {
  question: string
  answer: string
}

export const useStructuredData = () => {
  const addOrganizationSchema = (data: {
    name: string
    url: string
    logo?: string
    description?: string
    sameAs?: string[]
    telephone?: string
    email?: string
    address?: {
      streetAddress: string
      addressLocality: string
      postalCode: string
      addressCountry: string
    }
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
            description: data.description,
            telephone: data.telephone,
            email: data.email,
            address: data.address ? {
              '@type': 'PostalAddress',
              ...data.address
            } : undefined,
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
    potentialAction?: boolean
  }) => {
    const schema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: data.name,
      url: data.url,
      description: data.description,
      inLanguage: 'cs-CZ'
    }

    if (data.potentialAction) {
      schema.potentialAction = {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${data.url}/search?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    }

    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(schema)
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

  const addLocalBusinessSchema = (data: LocalBusinessData) => {
    const schema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'MedicalClinic',
      '@id': data.url,
      name: data.name,
      description: data.description,
      url: data.url,
      telephone: data.telephone,
      email: data.email,
      image: data.image,
      address: {
        '@type': 'PostalAddress',
        streetAddress: data.address.streetAddress,
        addressLocality: data.address.addressLocality,
        postalCode: data.address.postalCode,
        addressCountry: data.address.addressCountry
      },
      priceRange: data.priceRange || '$$',
      medicalSpecialty: data.medicalSpecialty || 'Ophthalmology'
    }

    if (data.geo) {
      schema.geo = {
        '@type': 'GeoCoordinates',
        latitude: data.geo.latitude,
        longitude: data.geo.longitude
      }
    }

    if (data.openingHours) {
      schema.openingHoursSpecification = data.openingHours.map(hours => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: hours.dayOfWeek,
        opens: hours.opens,
        closes: hours.closes
      }))
    }

    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(schema)
        }
      ]
    })
  }

  const addServiceSchema = (data: ServiceData) => {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalProcedure',
            name: data.name,
            description: data.description,
            procedureType: data.serviceType,
            url: data.url,
            provider: {
              '@type': 'MedicalClinic',
              name: data.provider,
              url: 'https://videre.cz'
            },
            areaServed: {
              '@type': 'City',
              name: data.areaServed || 'Praha'
            }
          })
        }
      ]
    })
  }

  const addFAQSchema = (items: FAQItem[]) => {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: items.map(item => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer
              }
            }))
          })
        }
      ]
    })
  }

  const addMedicalOrganizationSchema = (data: {
    name: string
    url: string
    logo: string
    description: string
    telephone: string
    email: string
    locations: Array<{
      name: string
      address: string
      locality: string
      postalCode: string
    }>
  }) => {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalOrganization',
            '@id': data.url,
            name: data.name,
            url: data.url,
            logo: data.logo,
            description: data.description,
            telephone: data.telephone,
            email: data.email,
            medicalSpecialty: 'Ophthalmology',
            availableService: [
              {
                '@type': 'MedicalProcedure',
                name: 'Oční vyšetření',
                procedureType: 'Diagnostic'
              },
              {
                '@type': 'MedicalProcedure',
                name: 'Estetická medicína',
                procedureType: 'Cosmetic'
              },
              {
                '@type': 'MedicalProcedure',
                name: 'Předpis brýlí a kontaktních čoček',
                procedureType: 'Therapeutic'
              }
            ],
            location: data.locations.map(loc => ({
              '@type': 'MedicalClinic',
              name: loc.name,
              address: {
                '@type': 'PostalAddress',
                streetAddress: loc.address,
                addressLocality: loc.locality,
                postalCode: loc.postalCode,
                addressCountry: 'CZ'
              }
            }))
          })
        }
      ]
    })
  }

  return {
    addOrganizationSchema,
    addWebsiteSchema,
    addBreadcrumbSchema,
    addLocalBusinessSchema,
    addServiceSchema,
    addFAQSchema,
    addMedicalOrganizationSchema
  }
}
