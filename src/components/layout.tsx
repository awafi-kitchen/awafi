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
        { name: 'description', content: 'The Awafi Kitchen is where Arab and Jewish cuisine are one in the same. We are cousins of Iraqi Jewish diaspora, making meals as a tribute to our heritage.' },
        { name: 'keywords', content: 'awafi, iraq, iraqi, baghdad, jewish, food, kitchen, popup, kitchen, restaurant, cuisine' },
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
