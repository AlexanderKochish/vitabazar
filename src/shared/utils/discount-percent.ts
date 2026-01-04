export const discountPercent = (regularPrice: string, salePrice: string) => {
  return Math.round(
    ((Number(regularPrice) - Number(salePrice)) / Number(regularPrice)) * 100
  )
}
