import { useEffect } from 'react'

export function StripeButton() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://js.stripe.com/v3/buy-button.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <stripe-buy-button
      buy-button-id="buy_btn_1SACSkFxNzl4s0Pq8RYJ242v"
      publishable-key="pk_live_51PAyvwFxNzl4s0PqjqzJypaxvKdMEaYePMGfUMppCnkqR6ZfHJ4KkWNPIzhbAukRRhiEHNjGcHwoNKevn2ay79V100Q2xNXwPl"
    />
  )
}
