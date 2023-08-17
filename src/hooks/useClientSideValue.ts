import { useEffect, useState } from 'react'

export const useClientSideValue = <T>(value: T, ssrValue: T): T => {
  // Needed to prevent a mismatch between the first render on the server and the client
  const [mountedValue, setMountedValue] = useState(ssrValue)
  useEffect(() => setMountedValue(value), [value])

  return mountedValue
}
