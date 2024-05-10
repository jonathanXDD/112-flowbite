
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";
import { Carousel } from "flowbite-react";
import { Card } from "flowbite-react";



export default function Home() {
  return (
    <>
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <img src="/next.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          About
        </NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
    <div className="h-70 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="https://vhx.imgix.net/criterionchannelchartersu/assets/ad353e5c-c570-482c-ab2b-9b7a13215602.jpg?auto=format%2Ccompress&fit=crop&h=720&q=75&w=1280" alt="..." />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWq7qI0XyVN41egIS9AydJJ7YeckX5nBBaoqfqZnl-Cg&s" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
    <Card href="#" className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
    <Footer container>
    <FooterCopyright href="#" by="Flowbite™" year={2022} />
    <FooterLinkGroup>
      <FooterLink href="#">About</FooterLink>
      <FooterLink href="#">Privacy Policy</FooterLink>
      <FooterLink href="#">Licensing</FooterLink>
      <FooterLink href="#">Contact</FooterLink>
    </FooterLinkGroup>
  </Footer>
  </>
  );
}
