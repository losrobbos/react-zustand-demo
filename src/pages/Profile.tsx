import { useStore } from "../stores/data.store"

export const Profile = () => {

  const user = useStore(state => state.user)

  return (
    <div>
      <h2>Profile</h2>
      { user?.username }
    </div>
  )
}