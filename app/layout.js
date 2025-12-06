import StyledComponentsRegistry from './lib/registry'
import Providers from './lib/providers'
import '@/styles/globals.css'

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div id="__next">
          <StyledComponentsRegistry>
            <Providers>{children}</Providers>
          </StyledComponentsRegistry>
        </div>
      </body>
    </html>
  )
}

export const metadata = {
  title: {
    default: 'Hahow Hero',
  },
  description: {
    default: 'Hahow Hero',
  },
}
export default RootLayout
