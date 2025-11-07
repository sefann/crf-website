import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react'

const News = () => {
  type NgoNewsItem = {
    id: string
    title: string
    publishedAt: string
    source: string
    link: string
    excerpt: string
  }

  const fallbackNgoNews: NgoNewsItem[] = [
    {
      id: 'fallback-1',
      title: 'UNICEF Nigeria Calls for Renewed Commitment to Child Protection',
      publishedAt: '2024-09-15',
      source: 'UNICEF Nigeria',
      link: 'https://www.unicef.org/nigeria/press-releases/unicef-calls-renewed-commitment-protecting-children',
      excerpt:
        'UNICEF urges government, communities, and partners to strengthen systems that keep children safe across Nigeria.',
    },
    {
      id: 'fallback-2',
      title: 'ReliefWeb: Education in Emergencies Response Scales Across North-East Nigeria',
      publishedAt: '2024-08-28',
      source: 'ReliefWeb',
      link: 'https://reliefweb.int/report/nigeria/education-emergencies-situation-report-north-east-nigeria-august-2024',
      excerpt:
        'Humanitarian partners expand safe learning spaces and psychosocial support for conflict-affected children in Borno, Adamawa, and Yobe states.',
    },
    {
      id: 'fallback-3',
      title: 'World Bank Highlights Gains in Girls Education Through Partnership Projects',
      publishedAt: '2024-07-30',
      source: 'World Bank',
      link: 'https://www.worldbank.org/en/news/feature/2024/07/30/nigeria-accelerating-education-reforms-for-girls',
      excerpt:
        'Joint programs with local NGOs improve girls’ access to classrooms, mentoring programs, and reproductive health information.',
    },
  ]

  const [ngoNews, setNgoNews] = useState<NgoNewsItem[]>(fallbackNgoNews)
  const [isLoadingNgoNews, setIsLoadingNgoNews] = useState<boolean>(false)
  const [ngoNewsError, setNgoNewsError] = useState<string | null>(null)

  const newsItems = [
    {
      id: 1,
      title: 'CRF Launches New School Construction Project in Nasarawa',
      date: '2024-01-15',
      category: 'Projects',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop',
      excerpt: 'Child Rights Foundation has announced the launch of a new school construction project in Nasarawa State, aiming to provide quality education to over 500 children in the region.',
    },
    {
      id: 2,
      title: 'Annual Women\'s Conference 2024: Empowering the Next Generation',
      date: '2024-02-20',
      category: 'Aisha Cares',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop',
      excerpt: 'The Aisha Cares Initiative hosted its annual women\'s conference, bringing together over 200 women from across Northern Nigeria for a day of empowerment and networking.',
    },
    {
      id: 3,
      title: 'Partnership with UNICEF Strengthens Child Rights Advocacy',
      date: '2024-03-10',
      category: 'Partnerships',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop',
      excerpt: 'CRF has entered into a strategic partnership with UNICEF to strengthen child rights advocacy and education programs across Africa.',
    },
    {
      id: 4,
      title: 'School Feeding Program Reaches 10,000 Children Milestone',
      date: '2024-04-05',
      category: 'Impact',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop',
      excerpt: 'Our school feeding program has reached a significant milestone, now providing nutritious meals to over 10,000 children daily across multiple schools.',
    },
    {
      id: 5,
      title: 'University Tour 2024: Inspiring Future Leaders',
      date: '2024-05-12',
      category: 'Aisha Cares',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
      excerpt: 'The Aisha Cares Initiative completed its annual university tour, visiting 5 universities and engaging with over 1,000 students on leadership and empowerment.',
    },
    {
      id: 6,
      title: 'New Reproductive Health Program Launched',
      date: '2024-06-18',
      category: 'Programs',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
      excerpt: 'CRF has launched a new comprehensive reproductive health program aimed at providing education and services to adolescents and young women.',
    },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  const stripHtml = (value: string) => value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()

  const dedupeByLink = (items: NgoNewsItem[]) => {
    const seen = new Set<string>()
    return items.filter((item) => {
      if (seen.has(item.link)) return false
      seen.add(item.link)
      return true
    })
  }

  const sortByDateDesc = (items: NgoNewsItem[]) =>
    [...items].sort((a, b) => {
      const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0
      const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0
      return dateB - dateA
    })

  const ensureIsoDate = (value?: string | null) => {
    if (!value) return ''
    const parsed = new Date(value)
    if (Number.isNaN(parsed.getTime())) return ''
    return parsed.toISOString()
  }

  const isNgoNewsItem = (item: NgoNewsItem | null | undefined): item is NgoNewsItem => {
    return Boolean(item && item.id && item.title && item.link)
  }

  const ensureAbsoluteUrl = (url: string | null | undefined, baseUrl?: string) => {
    if (!url) return ''
    const trimmed = url.trim()
    if (/^https?:\/\//i.test(trimmed)) {
      return trimmed
    }

    if (baseUrl) {
      try {
        return new URL(trimmed, baseUrl).toString()
      } catch (error) {
        console.warn('Failed to resolve absolute URL', { url: trimmed, baseUrl, error })
      }
    }

    return ''
  }

  useEffect(() => {
    const controller = new AbortController()
    const fetchNgoNews = async () => {
      setIsLoadingNgoNews(true)
      setNgoNewsError(null)

      try {
        const fetchReliefWebReports = async (): Promise<NgoNewsItem[]> => {
          const reliefWebBaseUrl =
            'https://api.reliefweb.int/v1/reports?appname=crf-website&limit=6&sort[]=date:desc&query[value]=(Nigeria%20OR%20Africa)%20AND%20(child%20OR%20education%20OR%20health%20OR%20nutrition%20OR%20protection)&fields[include][]=title&fields[include][]=url&fields[include][]=date.created&fields[include][]=headline&fields[include][]=source&fields[include][]=summary'

          const reliefWebUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(reliefWebBaseUrl)}`

          const response = await fetch(reliefWebUrl, {
            signal: controller.signal,
            headers: {
              Accept: 'application/json',
            },
          })

          if (!response.ok) {
            throw new Error(`Unable to load ReliefWeb feed (${response.status})`)
          }

          const rawJson = await response.text()
          const payload = JSON.parse(rawJson)

          return (payload?.data ?? [])
            .map((report: any, index: number) => {
              const fields = report?.fields ?? {}
              const rawSummary = fields?.summary ?? fields?.headline ?? ''
              const cleanedSummary = typeof rawSummary === 'string' ? stripHtml(rawSummary) : ''

              if (!fields?.url || !fields?.title) return null

              return {
                id: `reliefweb-${report?.id ?? index}`,
                title: fields.title,
                publishedAt: ensureIsoDate(fields?.date?.created) || '',
                source: fields?.source?.[0]?.shortname ?? fields?.source?.[0]?.name ?? 'ReliefWeb',
                link: fields.url,
                excerpt: cleanedSummary.slice(0, 200),
              }
            })
            .filter(isNgoNewsItem)
        }

        const fetchRssFeed = async (feedUrl: string, label: string, baseUrl?: string): Promise<NgoNewsItem[]> => {
          const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(feedUrl)}`, {
            signal: controller.signal,
          })

          if (!response.ok) {
            throw new Error(`Unable to load RSS feed ${label} (${response.status})`)
          }

          const xmlText = await response.text()
          const parser = new DOMParser()
          const doc = parser.parseFromString(xmlText, 'application/xml')
          const items = Array.from(doc.querySelectorAll('item')).slice(0, 5)

          return items
            .map((item, index) => {
              const title = item.querySelector('title')?.textContent?.trim()
              const rawLink = item.querySelector('link')?.textContent ?? item.querySelector('guid')?.textContent
              const link = ensureAbsoluteUrl(rawLink, baseUrl)
              const description = item.querySelector('description')?.textContent ?? ''
              const pubDateRaw =
                item.querySelector('pubDate')?.textContent ?? item.querySelector('dc\:date')?.textContent
              const publishedAt = ensureIsoDate(pubDateRaw)

              if (!title || !link) return null

              return {
                id: `${label.toLowerCase().replace(/\s+/g, '-')}-${index}`,
                title,
                link,
                source: label,
                publishedAt,
                excerpt: stripHtml(description).slice(0, 200),
              }
            })
            .filter(isNgoNewsItem)
        }

        const [reliefWebResult, unNewsResult, whoResult, unescoResult] = await Promise.allSettled([
          fetchReliefWebReports(),
          fetchRssFeed(
            'https://news.un.org/feed/subscribe/en/news/topic/children/rss.xml',
            'UN News – Children',
            'https://news.un.org/'
          ),
          fetchRssFeed('https://www.who.int/feeds/entity/news/en/rss.xml', 'WHO Newsroom', 'https://www.who.int/'),
          fetchRssFeed('https://www.unesco.org/en/rss', 'UNESCO News', 'https://www.unesco.org/'),
        ])

        const aggregated: NgoNewsItem[] = []

        const addResult = (result: PromiseSettledResult<NgoNewsItem[]>) => {
          if (result.status === 'fulfilled') {
            aggregated.push(...result.value)
          } else {
            console.warn('Feed request failed', result.reason)
          }
        }

        addResult(reliefWebResult)
        addResult(unNewsResult)
        addResult(whoResult)
        addResult(unescoResult)

        const cleaned = sortByDateDesc(dedupeByLink(aggregated)).slice(0, 8)

        if (cleaned.length === 0) {
          setNgoNews(fallbackNgoNews)
          setNgoNewsError('Showing curated highlights from UNICEF, ReliefWeb, and the World Bank while live feeds reload.')
        } else {
          setNgoNews(cleaned)
          if (
            [reliefWebResult, unNewsResult, whoResult, unescoResult].some((result) => result.status === 'rejected')
          ) {
            setNgoNewsError('Some news sources are temporarily unavailable. Displaying the freshest updates we could load.')
          }
        }
      } catch (error) {
        if (controller.signal.aborted) return
        console.error('Failed to load NGO news feed', error)
        setNgoNews(fallbackNgoNews)
        setNgoNewsError(
          'We could not refresh the live news feeds right now. Showing recent highlights from trusted partners instead.'
        )
      } finally {
        if (!controller.signal.aborted) {
          setIsLoadingNgoNews(false)
        }
      }
    }

    fetchNgoNews()

    return () => controller.abort()
  }, [])

  const hasNgoNews = useMemo(() => ngoNews.length > 0, [ngoNews])

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-blue to-secondary-blue/90 text-white section-padding">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-heading font-bold mb-4"
          >
            News & Updates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            Stay updated with our latest news, campaigns, and event recaps
          </motion.p>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-text-charcoal text-sm mb-3">
                    <Calendar size={16} className="text-primary-gold" />
                    <span>{formatDate(item.date)}</span>
                  </div>
                  <h2 className="text-xl font-heading font-bold text-secondary-blue mb-3">
                    {item.title}
                  </h2>
                  <p className="text-text-charcoal leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                  <button className="text-primary-gold font-semibold hover:underline inline-flex items-center space-x-2">
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Live NGO News Feed */}
      <section className="section-padding bg-accent-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-blue mb-4">
              Latest Updates
            </h2>
            <p className="text-text-charcoal text-lg">
              Fresh stories from trusted partners covering child rights, education, health, and sustainable development.
            </p>
          </motion.div>

          {isLoadingNgoNews && (
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center shadow-sm">
              <p className="text-text-charcoal">Loading the latest stories…</p>
            </div>
          )}

          {!isLoadingNgoNews && hasNgoNews && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ngoNews.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4"
                >
                  <div className="flex items-center gap-2 text-sm text-text-charcoal/80">
                    <span className="font-semibold text-primary-gold">{item.source}</span>
                    {item.publishedAt && <span>• {formatDate(item.publishedAt)}</span>}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-secondary-blue">{item.title}</h3>
                  {item.excerpt && (
                    <p className="text-text-charcoal leading-relaxed">
                      {item.excerpt}
                      {item.excerpt.length >= 220 && '…'}
                    </p>
                  )}
                  <div>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-gold font-semibold hover:underline"
                    >
                      Read full story
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {!isLoadingNgoNews && !hasNgoNews && !ngoNewsError && (
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center shadow-sm">
              <p className="text-text-charcoal">
                No recent NGO headlines are available right now. Please check back for the latest updates.
              </p>
            </div>
          )}

          {ngoNewsError && (
            <div className="bg-white border border-amber-200 text-amber-700 rounded-lg p-6 mt-8 shadow-sm text-left">
              <p className="font-semibold mb-2">Showing curated highlights</p>
              <p className="text-sm leading-relaxed">{ngoNewsError}</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-accent-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center bg-white p-8 rounded-lg shadow-lg"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-4">
              Stay Updated
            </h2>
            <p className="text-text-charcoal mb-6">
              Subscribe to our newsletter to receive the latest news and updates about our programs and impact.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default News

