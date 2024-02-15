import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [billAmount, setBillAmount] = useState(0)
  const [tipPercent, setTipPercent] = useState(0)
  const [numberOfPeople, setNumberOfPeople] = useState(1)
  const [tipPerPerson, setTipPerPerson] = useState(0)
  const [totalPerPerson, setTotalPerPerson] = useState(0)

  const calculateTipPerPerson = () => {
    const tipPerPerson = (billAmount * (tipPercent / 100)) / numberOfPeople
    setTipPerPerson(tipPerPerson)
  }

  const calculateTotalPerPerson = () => {
    const totalTip = billAmount * (tipPercent / 100)
    const totalPerPerson = (billAmount + totalTip) / numberOfPeople
    setTotalPerPerson(totalPerPerson)
  }

  useEffect(() => {
    calculateTipPerPerson()
    calculateTotalPerPerson()
  }, [billAmount, tipPercent, numberOfPeople])

  return (
    <>
      <h1>Tip Calculator</h1>

      <div className='tip-container'>
        <form className='tip-form'>
          <label>Bill Amount</label>
          <input type='number' value={billAmount} onChange={(e) => setBillAmount(Number(e.target.value))} />

          <label>Tip Percent</label>
          <input type='number' value={tipPercent} onChange={(e) => setTipPercent(Number(e.target.value))} />

          <label>Number of People</label>
          <input type='number' value={numberOfPeople} onChange={(e) => setNumberOfPeople(Number(e.target.value))} />
        </form>

        <div className='total-container'>

          <div className='tip-per-person-container'>
            <h2>Tip: ${tipPerPerson.toFixed(2)}</h2>
            <span>per person</span>
          </div>

          <div className='total-per-person-container'>
            <h2>Total: ${totalPerPerson.toFixed(2)}</h2>
            <span>per person</span>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
