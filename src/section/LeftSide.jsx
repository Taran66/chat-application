import ProfileBar from "../components/ProfileBar"
import Search from "../components/Search"
import Contacts from "../components/Contacts"

const LeftSide = () => {
  return (
        <div className="flex flex-col gap-2">
            <ProfileBar />
            <Search />
            <Contacts />
        </div>  
  )
}

export default LeftSide