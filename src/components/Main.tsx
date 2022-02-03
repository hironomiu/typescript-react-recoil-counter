import { FC, memo } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { counterAtom, counterSelector, asyncCounterSelector } from '../App'
import './Main.css'

const Main: FC = memo(() => {
  const countValue = useRecoilValue(counterAtom)
  const [count, setCount] = useRecoilState(counterAtom)
  const [counter, setCounter] = useRecoilState(counterSelector)
  const [asyncCount, setAsyncState] = useRecoilState(asyncCounterSelector)

  const handleClickCount = (count: number) => {
    setCount(count)
  }

  return (
    <main>
      <h1>Recoil Counter</h1>
      <div className="div">
        <h2>countValue</h2>
        <span>{countValue}</span>
      </div>
      <div className="div">
        <div>
          <h2>count</h2>
        </div>
        <div>
          <button onClick={() => handleClickCount(count - 1)}>-</button>
          <span>{count}</span>
          <button onClick={() => handleClickCount(count + 1)}>+</button>
        </div>
      </div>
      <div className="div">
        <h2>counter</h2>
        <div>
          <button onClick={() => setCounter(counter - 1)}>-</button>
          <span>{counter}</span>
          <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
      </div>
      <div className="div">
        <h2>asyncCount</h2>
        <div>
          <button onClick={async () => setAsyncState(asyncCount - 1)}>-</button>
          <span>{asyncCount}</span>
          <button onClick={async () => setAsyncState(asyncCount + 1)}>+</button>
        </div>
      </div>
    </main>
  )
})

export default Main
