export type UtmParams = {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
  referrer?: string
}

export function parseUtmFromLocation(locationSearch: string, documentReferrer: string): UtmParams {
  const params = new URLSearchParams(locationSearch)
  const utm: UtmParams = {}
  const keys: (keyof UtmParams)[] = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
  keys.forEach((k) => {
    const v = params.get(k)
    if (v) utm[k] = v
  })
  if (documentReferrer) utm.referrer = documentReferrer
  return utm
}

export function saveUtmOnce(utm: UtmParams): void {
  if (typeof window === 'undefined') return
  try {
    const hasAny = Object.values(utm).some(Boolean)
    if (!hasAny) return
    const storageKey = 'lb_first_utm'
    if (!localStorage.getItem(storageKey)) {
      localStorage.setItem(storageKey, JSON.stringify({ ...utm, ts: Date.now() }))
    }
  } catch {}
}

export function getSavedUtm(): UtmParams | null {
  if (typeof window === 'undefined') return null
  try {
    const storageKey = 'lb_first_utm'
    const raw = localStorage.getItem(storageKey)
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}


