// Building Regex Engine from scratch

export const SIGNS = {
  WILDCARD: '.',
  SET_START: '[',
  SET_END: ']',
} as const

export function regexMatch(regex: string, input: string) {
  let index = 0

  if (regex[index] === SIGNS.WILDCARD) return true

  if (regex[index] === SIGNS.SET_START) {
    index++

    const set = new Set<string>()

    while (regex[index] !== SIGNS.SET_END) {
      set.add(regex[index])
      index++
    }

    return set.has(input)
  }

  return regex === input
}
