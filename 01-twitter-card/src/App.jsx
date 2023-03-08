import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import { useState } from 'react'

export function App () {
  const [showMore, setShowMore] = useState(false)

  const objectUser = {
    initialIsFollowing: false,
    name: 'Random User',
    userName: 'randUs'
  }

  const users = [ /* testing map to render multiple components */
    {
      initialIsFollowing: true,
      userName: 'midudev',
      name: 'Miguel Ángel Durán'
    },
    {
      initialIsFollowing: false,
      userName: 'PacoHdezs',
      name: 'Pablo Hernandez'
    },
    { // Empty user to test default props
    },
    {
      initialIsFollowing: true,
      userName: 'facebook',
      name: 'Facebook Meta'
    }
  ]

  const showMoreOnClick = () => {
    setShowMore(!showMore)
  }

  return (
    <section className='App'>
      <span className='tw-articleTitle'>A quién seguir</span>
      <TwitterFollowCard initialIsFollowing={false} userName='jsalvar124'> {/* testing Children */}
        Julián Salvá Ramírez
      </TwitterFollowCard>
      <TwitterFollowCard initialIsFollowing userName='basujindal' name='Stable-difussion' />
      <TwitterFollowCard userName='lucidrains' name='DALEE-2' />
      <TwitterFollowCard {...objectUser} /> {/* testing props by object and spread operator */}
      {
                users.map((user, id) => {
                  const { userName, name, initialIsFollowing } = user

                  if (showMore) {
                    return (
                      <TwitterFollowCard userName={userName} name={name} initialIsFollowing={initialIsFollowing} key={userName + id} />
                    )
                  } else {
                    return ('')
                  }
                })
            }

      <a onClick={showMoreOnClick} className='tw-showMore'>Mostrar más</a>

    </section>
  )
}
