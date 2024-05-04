
import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './contexts/theme'

function App() {
  const [themeMode,setThemeMode] = useState('light')

  const darkTheme = () => setThemeMode('dark')
  const lightTheme = () => setThemeMode('light')

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark',"light");
    document.querySelector('html').classList.add(themeMode);
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
     <div className='w-full h-screen flex flex-col items-center justify-center dark:bg-gray-900'>
          <div className='max-w-md'>
            <div className='flex justify-end py-5'>
              <ThemeBtn/>
            </div>
            <Card/>

          </div>
     </div>
      
    </ThemeProvider>
  )
}

export default App
