/** @format */

import { cn } from "@/lib/utils";
import { DashboardIcon } from "@radix-ui/react-icons";
import { Layers } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

type Props = {
  title: string;
  className?: string;
};


export default function PageTitle({ title, className }: Props) {
  return <h1 className={cn("text-2xl font-semibold", className)}>{title}</h1>;
}