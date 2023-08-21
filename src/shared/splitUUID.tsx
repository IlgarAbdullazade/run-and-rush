export default function splitUUID(inputString: string) {
  const parts = inputString.split('-')
  return parts[0]
}
