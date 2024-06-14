import Image from "next/image"
export default function CustomCard({item}){
return(<div class="border">
    <img src={item.Picture.PictureUrl1} alt={item.Picture.PictureDescription1} height={300} width={300}/>
    <div>{item.ScenicSpotName}</div>
</div>)

}