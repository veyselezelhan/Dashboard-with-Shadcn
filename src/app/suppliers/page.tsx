/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import PageTitle from "@/components/PageTitle";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CircleX, Ellipsis } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"




type Props = {};
type Users = {
  name: string;
  email: string;
  Tag: string;
  status: string;

};

const columns: ColumnDef<Users>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
              "name"
            )}`}
            alt="user-image"
          />
          <p>{row.getValue("name")} </p>
        </div>

      );
    }
  },
  {
    accessorKey: "email",
    header: "Email"
  },
  {
    accessorKey: "Tag",
    header: "Tag",
    cell: ({ row }) => {
      return (
        <div
          className={cn("font-medium w-fit px-4 py-2 rounded-lg bg-primary")}
        >
          {row.getValue("Tag")}
        </div>
      );
    }
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div
          className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
            "bg-red-200": row.getValue("status") === "Inactive",
            "bg-green-200": row.getValue("status") === "Active"
          })}
        >
          {row.getValue("status")}
        </div>
      );
    }
  },
  {
    accessorKey: "edit",
    header: "Edit",
    cell: ({ row }) => {
      return (
        <div

        >
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white bg-primary rounded-md" > <Ellipsis /></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Edit Supplier</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Dialog>
                <DialogTrigger  className="text-primary">Edit</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Supplier</DialogTitle>
                    <h6>Name</h6>
                    <Input />
                    <h6>Email</h6>
                    <Input />
                    <h6>Tag</h6>
                    <Input placeholder="#" />
                    <h6>Status</h6>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Active</SelectItem>
                        <SelectItem value="dark">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="">Save</Button>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <div></div>
              <Dialog>
                <DialogTrigger className="text-primary">Delete</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Delete Supplier</DialogTitle>
                    <div className="flex justify-center">
                      <PageTitle className="text-primary" title="Are You Sure ?" />
                    </div>
                    <div className="flex justify-center">
                      <h4>
                        Do you really want to delete this supplier ?
                      </h4>
                    </div>
                    <Button className="bg-red-600 hover:bg-red-600 text-white">Delete</Button>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </DropdownMenuContent>
          </DropdownMenu>

          {row.getValue("edit")}
        </div>
      );
    }
  }


];

const data: Users[] = [
  {
    name: "Ezelhan Evcil",
    email: "ezelhan@example.com",
    Tag: "#ezel",
    status: "Active"
  },
  {
    name: "Mert Erdoğdu",
    email: "mert@example.com",
    Tag: "#mert",
    status: "Active"
  },
  {
    name: "Pati 1",
    email: "pati1@example.com",
    Tag: "#pati1",
    status: "Inactive"
  }
];

export default function SuppliersPage({ }: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Suppliers" />
      <div className="flex justify-end">
      <Dialog>
  <DialogTrigger>
  <Button className="">Add Suplier</Button>
  </DialogTrigger>
  <DialogContent  className="w-full max-w-4xl h-auto">
    <DialogHeader>
      <DialogTitle>Add Supplier</DialogTitle>
      <h6>Name</h6>
                    <Input />
                    <h6>Email</h6>
                    <Input />
                    <h6>Tag</h6>
                    <Input placeholder="#" />
                    <h6>Status</h6>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Active</SelectItem>
                        <SelectItem value="dark">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="">Add</Button>
    </DialogHeader>
  </DialogContent>
</Dialog>

      </div>

      <DataTable columns={columns} data={data} />
    </div>
  );
}
