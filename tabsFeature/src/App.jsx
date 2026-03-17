import React from 'react'

const App = () => {
  return (
    <main className='min-h-screen bg-slate-100 flex items-center justify-center p-6'>
      <section className='w-full max-w-md rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 p-6 text-center'>
        <h1 className='text-3xl font-bold text-indigo-600'>Tailwind is working</h1>
        <p className='mt-3 text-slate-600'>
          If you can see this styled card, your setup is correct.
        </p>
        <button className='mt-6 rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 transition-colors'>
          Test Button
        </button>
      </section>
    </main>
  )
}

export default App