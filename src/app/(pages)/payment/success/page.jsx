"use client"

import { useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import axios from 'axios'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { clearCart } from '@/app/redux/cartSlice'
// const bodyParser = require('body-parser')


export default function SuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    if (!sessionId) return

    const verifyPayment = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_ENDPOINT}/checkout/verify?session_id=${sessionId}`
        )

        if (res.data.success) {
          dispatch(clearCart())
        }
      } catch (error) {
        console.error('Payment verification failed', error)
      }
    }

    verifyPayment()
  }, [sessionId, dispatch])

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center w-[90%] max-w-md">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          🎉 Payment Successful
        </h1>

        <p className="text-gray-600 mb-4">
          Your payment has been verified successfully.
        </p>

        <p className="text-xs text-gray-400 break-all mb-6">
          Session ID: {sessionId}
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/">
            <button className="bg-black text-white px-4 py-2 rounded">
              Go to Home
            </button>
          </Link>

          <Link href="/shop">
            <button className="border border-black px-4 py-2 rounded">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
