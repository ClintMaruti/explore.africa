import { getPayload } from 'payload'
import config from '@/payload.config'

export async function getHeaderGlobal() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const header = await payload.findGlobal({ slug: 'header' })
  return header
}
