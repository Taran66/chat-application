import LeftSide from "../section/LeftSide"
import RightSide from "../section/RightSide"

const Container = () => {
  return (
    <div className="">
        <div className="flex gap-4">
            <div className="basis-1/3">
                <LeftSide/>
            </div>
            <div className="basis-2/3 ">
                <RightSide/>
            </div>
        </div>
    </div>
  )
}

export default Container