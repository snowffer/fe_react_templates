import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import { App, ConfigProvider, theme } from 'antd';
import 'tailwindcss/tailwind.css'
import router from './router'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <ConfigProvider
    theme={{
      algorithm: theme.darkAlgorithm,
      token: { colorPrimary: '#00e4c9' }
    }}
  >
    <App>
      <RouterProvider router={router}>
      </RouterProvider>
    </App>
  </ConfigProvider>
)
