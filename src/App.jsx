
import { Suspense } from 'react'
import './App.css'
import DasyuiNav from './component/DasyuiNav'
import Navbar from './component/NAVBAR/Navbar'
import PriceingOption from './component/priceingOption/PriceingOption'

function App() {

  const priceingPromise = fetch('priceingData.json')
    .then(res => res.json())
  return (
    <>
      <header>
        <Navbar></Navbar>
        <DasyuiNav></DasyuiNav>
      </header>

      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <PriceingOption priceingPromise={priceingPromise}></PriceingOption>
        </Suspense>
      </main>

    </>
  )
}

export default App
