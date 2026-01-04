import { useMutation, useQuery } from '@tanstack/react-query'
import { addToCart, getCartCount } from '../actions/actions'

interface AddToCartArgs {
  id: number
  quantity: number
}

export const useCart = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['cart'],
    mutationFn: async ({ id, quantity }: AddToCartArgs) =>
      await addToCart(id, quantity),
  })

  const { data: cartCount } = useQuery({
    queryKey: ['cart'],
    queryFn: getCartCount,
  })

  return {
    mutate,
    isPending,
    cartCount,
  }
}
