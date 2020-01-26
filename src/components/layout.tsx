import React from 'react'
import Helmet from 'react-helmet'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <Helmet
      title="Awafi Kitchen"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <div>
      {children}
    </div>
  </>

)

export default Layout
