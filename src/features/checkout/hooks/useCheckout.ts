import { useMutation } from '@tanstack/react-query'
import { checkoutFetch } from '../actions/actions'
import { CheckoutPayload } from '../types/types'

export const useCheckout = () => {
  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationKey: ['checkout'],
    mutationFn: (payload: CheckoutPayload) => checkoutFetch(payload),
  })

  return {
    mutate,
    isPending,
    isSuccess,
    isError,
  }
}
