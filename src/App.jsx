import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import UsersList from './components/UsersList'

function App() {
  const [usersApi, setUsersApi] = useState()
  const [updateInfo, setupdateInfo] = useState()
  const [isFormOpen, setIsFormOpen] = useState(false)

  const getUserApi = () => {
    const URL = `https://users-crud1.herokuapp.com/users/`
    axios.get(URL)
      .then(res => setUsersApi(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getUserApi()
  }, [])

  const openForm = () => {
    setIsFormOpen(true)
  }

  const closeForm = () => setIsFormOpen(false)


  return (
    <div className="App">
      <div className="users">
        <h1>Users: {usersApi?.length}</h1>
        <button onClick={openForm} className='button-form'><i class="fi fi-rr-add-document"></i> Create a new user</button>

      </div>

      <div className={isFormOpen ? "container-form" : "form-none"}>
        <Form
          getUserApi={getUserApi}
          updateInfo={updateInfo}
          setupdateInfo={setupdateInfo}
          closeForm={closeForm}
        />
      </div>
      <div className="card">
        {
          usersApi?.map(user => (
            <UsersList
              key={user.id}
              user={user}
              getUserApi={getUserApi}
              setupdateInfo={setupdateInfo}
              openForm={openForm}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App


