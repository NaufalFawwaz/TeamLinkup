import { BiBell } from "react-icons/bi";
import ContentLayout from "../Layout/ContentLayout";

const Teams = () => {
  return (
    <ContentLayout>
      <div className="flex items-center justify-center">
        <div className="w-[80%] bg-primary3 py-10 px-[52px] rounded-lg">
            <div className="bg-white px-11 py-4 rounded-lg">
                <div className="flex flex-row items-center gap-6 text-3xl font-semibold mb-5">
                    <BiBell className="text-6xl"/>
                    Notification
                </div>
                <div className="bg-primary2">
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <div className="flex flex-row items-end">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default Teams;
