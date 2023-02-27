import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { makeGetUsers } from './factories'
import { TUser } from '@/domain/entities/TUsers'

function App() {
  const [users, setUsers] = useState<TUser[]>([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    try {
      const users: TUser[] = (await makeGetUsers().execute('123')) as TUser[]
      setUsers(users)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>{import.meta.env.REACT_APP_TITLE}</p>
      </div>
      <div className='card'>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            )
          })}
        </table>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
