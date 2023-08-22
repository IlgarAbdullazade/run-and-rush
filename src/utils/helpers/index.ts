export const Helpers = {
  splitUUID(inputString: string) {
    const parts = inputString.split('-')
    return parts[0]
  },

  roundNumber(
    value: number | string | undefined,
    precision: number = 1
  ): number {
    const multiplier = Math.pow(10, precision)
    return Math.round(Number(value) * multiplier) / multiplier
  },
}
