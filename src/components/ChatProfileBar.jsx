const ChatProfileBar = () => {
  return (
        <div className="bg-black rounded-lg h-14 flex items-center justify-between">
            <a href="/">
                <img className="h-8 ml-4 rounded-full" src="../src/assets/profile_images/profile2.png" alt="profile" />
            </a>
            <ul className="flex gap-4 mr-4">
                <li>
                    <a href="/">
                        <img className="h-6 filter invert" src="../src/assets/icons/search.png" alt="search" />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img className="h-6 filter invert" src="../src/assets/icons/dots.png" alt="dots" />
                    </a>
                </li>
            </ul>
        </div>
  )
}

export default ChatProfileBar