import { FC, Suspense } from 'react'
import { atom, RecoilRoot, selector } from 'recoil'
import Main from './components/Main'

export const counterAtom = atom({
  key: 'counterAtom',
  default: 0,
})

export const counterSelector = selector<number>({
  key: 'counterSelector',
  get: ({ get }) => {
    const counter = get(counterAtom)
    return counter
  },
  set: ({ set }, newValue) => {
    set(counterAtom, newValue)
  },
})

export const asyncCounterAtom = atom({
  key: 'asyncCounterAtom',
  default: 0,
})

export const asyncCounterSelector = selector<number>({
  key: 'asyncCounterSelector',
  get: async ({ get }) => {
    const counter = get(asyncCounterAtom)

    await new Promise((resolve) => setTimeout(() => resolve(1), 1000))

    return counter
  },
  set: ({ set }, newValue) => {
    // Error!! -> recoil.js:16 Uncaught Error: Recoil: Async selector sets are not currently supported.
    // ;(async () =>
    //   await new Promise((resolve) =>
    //     setTimeout(() => resolve(set(counterAtom, newValue)), 1000)
    //   ))()
    set(asyncCounterAtom, newValue)
  },
})

const App: FC = () => {
  return (
    <div>
      <RecoilRoot>
        <Suspense fallback={<div>Loading...</div>}>
          <Main />
        </Suspense>
      </RecoilRoot>
    </div>
  )
}

export default App
