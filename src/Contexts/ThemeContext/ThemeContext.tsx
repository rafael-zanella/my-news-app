import { createContext, FC, useContext, useEffect, useState } from 'react'
import { light } from '@/design-system/themes/light'
import { dark } from '@/design-system/themes/dark'
import { ITheme } from '@/design-system/themes/types/theme.types'
import { ThemeProvider } from 'styled-components'

type IContext = {
  theme: ITheme,
  changeTheme: () => void,
}

type IProvider = {
  initialTheme: ITheme,
  children: any
}

const ThemeContext = createContext<IContext | undefined>(undefined)

const ThemeContextProvider: FC<IProvider> = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(initialTheme)

  const changeTheme = () => {
    const nextTheme = theme.title === 'light' ? dark : light
    setTheme(nextTheme)
    localStorage.setItem('theme', nextTheme?.title)
  }

  useEffect(() => {
    const userTheme = localStorage.getItem('theme')
    setTheme(userTheme === 'dark' ? dark : light)
  }, [])

  const value = {
    theme, changeTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme deve ser utilizado dentro de um ThemeContextProvider!')
  }
  return context
}

export { ThemeContextProvider, ThemeContext, useTheme }
