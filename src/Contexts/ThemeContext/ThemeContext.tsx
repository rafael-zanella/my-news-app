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
  initialTheme?: 'light' | 'dark',
  children: any
}

const ThemeContext = createContext<IContext | undefined>(undefined)

const ThemeContextProvider: FC<IProvider> = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(light)

  const changeTheme = () => {
    const nextTheme = theme.title === 'light' ? dark : light
    setTheme(nextTheme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', nextTheme.colors.backgroundColor)
    localStorage.setItem('theme', nextTheme?.title)
  }

  useEffect(() => {
    if (initialTheme) {
      setTheme(initialTheme === 'dark' ? dark : light)
    } else {
      const userTheme = localStorage.getItem('theme')

      if (userTheme) {
        const currentTheme = (userTheme === 'dark' ? dark : light)
        setTheme(currentTheme)
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', currentTheme.colors.backgroundColor)
      }
    }
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
