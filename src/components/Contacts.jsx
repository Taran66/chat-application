import { Users } from "../constants"

const Contacts = () => {
  return (
    <div className="overflow-y-auto">
        <ul className="max-h-">
            {Users.map((user) => (
                <li className="bg-black/70 my-2 rounded-lg h-16 flex items-center">
                    <img src={user.profilePicture} alt="#" className="ml-4 h-12 rounded-full" />
                    <div className="ml-6">
                        <h6 className="text-white">{user.username}</h6>
                        <p className="text-gray-400">{user.message}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Contacts