import Image from "next/image";
import { Card } from "flowbite-react";
import { useState } from "react";

export default function CustomCard({ item }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border max-w-sm h-auto p-4">
      <Card>
        <Image
          src={item.Picture.PictureUrl1}
          alt={item.Picture.PictureDescription1}
          width={300}
          height={300}
        />
        <div className="mt-4">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.ScenicSpotName}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
            {item.Picture.PictureDescription1}
          </p>
        </div>
        <div className="mt-4 overflow-hidden relative">
          <p className={`font-normal text-gray-700 dark:text-gray-400 transition-all duration-300 ${isExpanded ? "max-h-full" : "max-h-32 overflow-hidden"}`}>
            {item.DescriptionDetail}
          </p>
          {!isExpanded && <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent dark:from-gray-800 dark:to-transparent"></div>}
        </div>
        <button 
          onClick={toggleDescription}
          className="mt-2 text-blue-500 hover:text-blue-700"
        >
          {isExpanded ? "收起" : "更多"}
        </button>
      </Card>
    </div>
  );
}


/*{import Image from "next/image"
import { Card } from "flowbite-react";
export default function CustomCard({item}){
return(<div class="border">
    <Card className="max-w-sm" imgSrc={item.Picture.PictureUrl1} alt={item.Picture.PictureDescription1} height={300} width={300}>
    
    <div>{item.ScenicSpotName}</div>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {item.Picture.PictureDescription1}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      {item.DescriptionDetail}
      </p>
      </Card>
</div>)

}*/