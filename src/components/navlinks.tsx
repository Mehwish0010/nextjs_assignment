"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
//import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Limited Edition",
    href: "/limited",
    description:
      "Experience exclusivity with our Limited Edition collection. Each piece is crafted with meticulous attention to detail, ensuring uniqueness and style."},
  {
    title: "Festive Collection",
    href: "/festive",
    description:
      " Celebrate the season with our vibrant and elegant pieces, perfect for any holiday gathering. Make unforgettable memories in style!",
  },
  {
    title: "Formal",
    href: "/formal",
    description:
      "Explore our refined selection for elegant celebrations, perfect for making a lasting impression this season."},
  {
    title: "Semi-Formal",
    href: "/semiformal",
    description: " Discover versatile styles that effortlessly blend sophistication and comfort for any occasion.",
  },
  {
    title: "Kids Collection",
    href: "/kids",
    description:" Celebrate childhood with our fun, colorful styles that keep kids looking cute and feeling great." },
  {
    title: "Accessories",
    href: "/accessories",
    description:
      "Explore our range of chic accessories that combine functionality with flair, perfect for any fashionista." },
      {
        title: "Shoes/Bag",
        href: "/bags_shoes",
        description:
          " Discover the perfect pairing of trendy shoes and elegant bags that elevate your everyday look." },
          {title:"Winter Collection",
            href:"/winters",
            description:"Wrap Yourself in Winter Luxury."

          },
    ]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className= {cn(navigationMenuTriggerStyle(), " font-semibold text-xl hover:text-myhover  duration-300")}>
            
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:text-myhover  duration-300 font-bold text-2xl">
          <NavigationMenuTrigger className="font-semibold text-xl hover:text-myhover  duration-300">Women</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-myWhite ">
              {components.map((component) => (
                 <Link key={component.title}
                  href={component.href}>
                <ListItem
                  
                  title={component.title}
                  
                >
                  {component.description}
                </ListItem></Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
          <NavigationMenuLink className= {cn(navigationMenuTriggerStyle(), " text-xl font-semibold hover:text-myhover duration-300")}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
          <NavigationMenuLink className= {cn(navigationMenuTriggerStyle(), "text-xl font-semibold hover:text-myhover  duration-300")}>
        
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        

      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({  title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            " blockselect-none space-y-1  rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          )}
          {...props}
        >
          <div className="text-sm  leading-none font-bold hover:text-myhover">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-myBlack font-semibold text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
