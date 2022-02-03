import { FC } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { counterAtom, counterSelector, asyncCounterSelector } from '../App'

const Main: FC = () => {
  const countValue = useRecoilValue(counterAtom)
  const [count, setCount] = useRecoilState(counterAtom)
  const [counter, setCounter] = useRecoilState(counterSelector)
  const [asyncCount, setAsyncState] = useRecoilState(asyncCounterSelector)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Counter</h1>
      <div>
        <button onClick={() => setCount(count - 1)}>count Decrement</button>
        <button onClick={() => setCounter(counter - 1)}>
          counter Decrement
        </button>
        <span>{countValue}</span>
        <span>{count}</span>
        <span>{counter}</span>
        <button onClick={() => setCount(count + 1)}>count Increment</button>
        <button onClick={() => setCounter(counter + 1)}>
          counter Increment
        </button>
      </div>
      <div>
        <button onClick={async () => setAsyncState(asyncCount - 1)}>
          async Decrement
        </button>
        <span>{asyncCount}</span>

        <button onClick={async () => setAsyncState(asyncCount + 1)}>
          async Increment
        </button>
      </div>
    </div>
  )
}

export default Main
