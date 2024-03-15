import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="w-[100%] h-full overflow-auto flex justify-center items-start">
        <div className="w-[1596px] h-[60px] px-[32px] text-[#9fadbc] flex flex-col items-start justify-start gap-[50px]">

          {/* top */}
          <div className="px-[8px] py-[12px] border-b-[1px] border-[#31383d] flex justify-start items-center gap-[10px] w-full">

            <div className="logoGradient w-[55px] h-[55px] flex justify-center items-center rounded-md ">
              <h1 className="text-[#171a1e] text-[20px]">T</h1>
            </div>

            <div className="flex flex-col justify-between items-start">
              <p className="text-[14px]">Trello Workspace</p>
              <p>Free</p>
            </div>
          </div>

          {/* mid */}

          <div className="w-full">
            <div className="w-[1266px] mx-auto flex flex-col items-start justify-start">
              <h1>Borads</h1>
              <div className="flex gap-[20px]">
                <select>
                  <option value="">Most recent</option>
                </select>
                <select>
                  <option value="">Choose something</option>
                </select>
              </div>
              <div className="flex justify-start items-center gap-[10px]">
                <div className="w-[300px] h-[85px] bg-[#282d33] rounded-md"></div>
                <div className="w-[300px] h-[85px] bg-[#282d33] rounded-md"></div>
                <div className="w-[300px] h-[85px] bg-[#282d33] rounded-md"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main >
  );
}
