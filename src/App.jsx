import './App.css'
import Add from './components/Add'
import View from './components/View'


function App() {

  return (
    <>
      <div style={{height:'100vh'}} className='shadow-lg rounded border w-full  p-3 '>
        <h1 className='font-bold text-4xl mt-8 mb-4'>MY TODO LIST</h1>
        <Add />
        <View />
      </div>

    </>
  )
}

export default App
