export function maskPrice(price) {
  if (price.length === 4)
    return price
      .replace(/\D/g, "")
      .replace(/(\d{0})(\d)/, "$1R$ $2")
      .replace(/(\d{2})(\d)/, "$1,$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  else if (price.length === 5)
    return price
      .replace(/\D/g, "")
      .replace(/(\d{0})(\d)/, "$1R$ $2")
      .replace(/(\d{2})(\d)/, "$1$2,")
      .replace(/(-\d{2})\d+?$/, "$1");
  else if (price.length === 6)
    return price
      .replace(/\D/g, "")
      .replace(/(\d{0})(\d)/, "$1R$ $2")
      .replace(/(\d{4})(\d)/, "$1,$2")
      .replace(/(-\d{2})\d+?$/, "$1");
}
