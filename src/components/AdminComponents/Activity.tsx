
//Import Needed Icons
import { Import, Profile2User, Send2, MoneyTick } from "iconsax-react";

type activityProps = {
    usersLength : number;
    depositAmount : number;
    transferAmount : number;
    bonusAmount : number;
}

const Activity = ({usersLength, depositAmount, transferAmount, bonusAmount}: activityProps) => {
  return (
    <main className="border border-[#7676801F] px-2 md:px-4 py-6 rounded-xl">
        <p className="text-[#06121B] font-bold text-xs md:text-sm xl:text-base">Activity</p>
        <p className="text-xs xl:text-sm text-secondary mt-2">This shows a general overview of the activities.</p>
      <div className="mt-4 flex gap-x-3 md:gap-x-5 overflow-x-auto special pb-4">
        <div className="flex flex-col gap-y-1 p-4 min-w-[15rem] h-36 w-72 border border-[#7676801F] rounded-lg">
            <div className="size-10 rounded-[50%] bg-[#00000033] flex items-center justify-center">
                <Import size="20" className="text-secondary"/>
            </div>
            <p className="text-[#020100] text-xs xl:text-sm mt-4">Total Sent Coins</p>
            <p className="text-secondary text-base xl:text-lg font-semibold">{depositAmount}</p>
        </div>
        <div className="flex flex-col gap-y-1 p-4 min-w-[15rem] h-36 w-72 border border-[#7676801F] rounded-lg">
            <div className="size-10 rounded-[50%] bg-[#00000033] flex items-center justify-center">
                <Send2 size="20" className="text-secondary"/>
            </div>
            <p className="text-[#020100] text-xs xl:text-sm mt-4">Total Received Coins</p>
            <p className="text-secondary text-base xl:text-lg font-semibold">{transferAmount}</p>
        </div>
        <div className="flex flex-col gap-y-1 p-4 min-w-[15rem] h-36 w-72 border border-[#7676801F] rounded-lg">
            <div className="size-10 rounded-[50%] bg-[#00000033] flex items-center justify-center">
                <MoneyTick size="20" className="text-secondary"/>
            </div>
            <p className="text-[#020100] text-xs xl:text-sm mt-4">Total Bonus Coins Sent</p>
            <p className="text-secondary text-base xl:text-lg font-semibold">{bonusAmount}</p>
        </div>
        <div className="flex flex-col gap-y-1 p-4 min-w-[15rem] h-36 w-72 border border-[#7676801F] rounded-lg">
            <div className="size-10 rounded-[50%] bg-[#00000033] flex items-center justify-center">
                <Profile2User size="20" className="text-secondary"/>
            </div>
            <p className="text-[#020100] text-xs xl:text-sm mt-4">Total users</p>
            <p className="text-secondary text-base xl:text-lg font-semibold">{usersLength}</p>
        </div>
      </div>
    </main>
  );
};

export default Activity;
