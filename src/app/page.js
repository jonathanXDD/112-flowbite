
/*
 *@author jonathan chen <gmail> 
*/
'use client';
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Footer, FooterCopyright, FooterLink, FooterLinkGroup ,DarkThemeToggle} from "flowbite-react";
import { Carousel } from "flowbite-react";
import { Card } from "flowbite-react";
import CustomCard from "./Card";
import { useState,useEffect } from "react";
import Image from "next/image";



export default function Home() {
  const[items,setItems]=useState([]);
  useEffect(()=>{
    async function fetchData(){
      const response=await fetch('api/items');
      //console.log(response);
      const data=await response.json();
      //console.log(data);
      setItems(data);
    }
    fetchData();
  },[]);
  return (
    <>
    <div className="bg-[#93C5FD]">
    <div className="container mx-auto">
    <Navbar fluid rounded className="bg-white">
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <img src="https://play-lh.googleusercontent.com/Fro4e_osoDhhrjgiZ_Y2C5FNXBMWvrb4rGpmkM1PDAcUPXeiAlPCq7NeaT4Q6NRUxRqo" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          <span className="px4 py-2 hover:text-yellow-500 hover:border-yello-500 hover:border-b-2">
          Home
          </span>
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          About
        </NavbarLink>
        <NavbarLink href="#">景點</NavbarLink>
        <NavbarLink href="#">資訊</NavbarLink>
        <NavbarLink href="#">不要聯絡我</NavbarLink>
      </NavbarCollapse>
      <DarkThemeToggle/>
    </Navbar>
    </div>
    <div className="h-55 sm:h-screen xl:h-screen 2xl:h-screen">
      <Carousel>
        <img src="https://vhx.imgix.net/criterionchannelchartersu/assets/ad353e5c-c570-482c-ab2b-9b7a13215602.jpg?auto=format%2Ccompress&fit=crop&h=720&q=75&w=1280" alt="https://www.bam.org/film/2024/uncharted-baldwin-step" />
        <img src="https://www.shutterstock.com/zh-Hant/blog/wp-content/uploads/sites/11/2021/07/0726cover.png?w=1250&h=960&crop=1" alt="https://www.shutterstock.com/zh-Hant/blog/inches-to-pixels-resize-image-quality" />
        <img src="https://steam.oxxostudio.tw/webp/gimp/example/simple-keyer-mask-16.webp" alt="https://steam.oxxostudio.tw/category/gimp/example/simple-keyer-mask.html" />
        <img src="https://img.ltn.com.tw/Upload/news/600/2018/11/23/phpYwQS3L.jpg" alt="https://news.ltn.com.tw/news/world/breakingnews/2621986"/>
        <img src="https://cdn.pixabay.com/photo/2023/12/08/23/46/cat-8438334_1280.jpg" alt="https://pixabay.com/zh/photos/cat-feline-asleep-cute-8438334/" />
      </Carousel>
    </div>
<div class="container mx- auto">
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
    {
      items.map((items,index)=><CustomCard item={items} key={index}/>)
    }
  </div>
</div>
  

    <Footer container>
    <FooterCopyright href="#" by="Flowbite™" year={2022} />
    <FooterLinkGroup>
      <FooterLink href="#">About</FooterLink>
      <FooterLink href="#">Privacy Policy</FooterLink>
      <FooterLink href="#">Licensing</FooterLink>
      <FooterLink href="#">Contact</FooterLink>
    </FooterLinkGroup>
  </Footer>
  
</div>
  </>
  );
}
