const Text = () => {
  return (
    <div className="bg-black h-14 flex justify-between items-center rounded-lg">
        <a href="/" className="ml-4">
            <img src="../src/assets/icons/emoji.png" alt="emoji" className="h-6 filter invert" />
        </a>
        <a href="/">
            <img src="../src/assets/icons/plus.png" alt="emoji" className="h-6 filter invert" />
        </a>
        <input type="text" placeholder="Type a message" className="bg-slate-900 text-white w-10/12 h-4/6 outline-none rounded-lg pl-4"/>
        <a href="/" className="mr-4">
            <img src="../src/assets/icons/voice.png" alt="emoji" className="h-6 filter invert" />
        </a>
    </div>
  )
}

export default Text