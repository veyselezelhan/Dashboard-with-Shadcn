/** @format */
'use client'


import React, { useState } from "react";
import { Nav } from "./ui/nav";

type Props = {}

import {
  useWindowWidth,
} from '@react-hook/window-size'

import {
  BookUser,
  ChevronLeft,
  ChevronRight,
  FileClock,
  LayoutDashboard,
  LineChart,
  Settings,
  WalletMinimal,
  Warehouse,
  Zap,
} from "lucide-react"
import { Button } from "./ui/button";



 

export default function SideNavbar({ }: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;
  

  function toogleSidebar(){
    setIsCollapsed(!isCollapsed) 
  }
  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
      {!mobileWidth && (
      <div className="absolute right-[-20px] top-7">

        <Button onClick={toogleSidebar} variant="secondary" className="rounded-full p-2">
        {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
                </Button>
      </div>
      )}
      <Nav
        isCollapsed={ mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",  // this page is important.
            href: "/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Lead Portals",
            href: "/leadportals",
            icon: Zap,
            variant: "default",
          },
          {
            title: "Customers",
            href: "/customers",
            icon: BookUser,
            variant: "default",
          },
          {
            title: "Suppliers",
            href: "/suppliers", //This page is important.
            icon: Warehouse,
            variant: "default",
          },
          {
            title: "LeadDesk Logs",
            href: "/leaddesklogs",
            icon: FileClock,
            variant: "default",
          },
          {
            title: "Accounting",
            href: "/accounting",
            icon: WalletMinimal,
            variant: "default",
          },
          {
            title: "Reports",
            href: "/reports",
            icon: LineChart,
            variant: "default",
          },
          {
            title: "Settings",
            href: "/settings",
            icon: Settings,
            variant: "default",
          },
        ]}
      />
      
    </div>
  )
}


