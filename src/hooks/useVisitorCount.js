import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://ayrxwdgwgnwzyzhgrnin.supabase.co',
  'sb_publishable_DCeMoZYwmppqqMGaRSIgEw__6wajQiV'
)

export default function useVisitorCount() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    async function incrementAndFetch() {
      const { data, error } = await supabase.rpc('increment_visitors')

      if (error) {
        console.error('Supabase error:', error)
        // Fallback — just fetch current count
        const { data: fallback } = await supabase
          .from('visitors')
          .select('count')
          .eq('id', 1)
          .single()
        if (fallback) setCount(fallback.count)
        return
      }

      setCount(data)
    }

    incrementAndFetch()
  }, [])

  return count
}