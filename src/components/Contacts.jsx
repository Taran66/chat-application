import { Users } from "../constants"

const Contacts = () => {
  return (
    <div className="">
        <ul className="flex flex-col gap-2">
            {Users.map((user) => (
                <li className="bg-black/70 rounded-lg h-16 flex items-center">
                    <img src={user.profilePicture} alt="#" className="ml-4 h-10 rounded-full" key={user.id} />
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