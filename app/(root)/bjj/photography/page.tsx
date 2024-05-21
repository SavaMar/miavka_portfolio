import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const page = () => {
  return (
    <div className="my-10 flex w-full justify-end gap-6 p-5 text-slate-300 sm:flex-row sm:items-center">
      <div className="grid grid-cols-1 gap-12 px-12 sm:grid-cols-2 sm:p-2 md:grid-cols-2 lg:mr-36 lg:grid-cols-3">
        {/* AJP Yverdron */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="mt-5 w-80 cursor-pointer rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-black transition delay-75 ease-in-out hover:text-white">
              <div className="monserrat-a flex w-full flex-col place-content-center items-center rounded-t-lg bg-pink-900 py-2 text-xl font-extrabold tracking-wide ">
                <h2 className="block">AJP YVERDON-LES-BAINS</h2>
                <h3 className="block">31.03.2024</h3>
              </div>
              <Image
                src="/assets/img/links/ajp_y.jpg"
                alt="ajp"
                width={500}
                height={100}
                className="rounded-b-md transition delay-75 ease-in-out hover:opacity-50"
              />
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>AJP Yverdron</DialogTitle>
              <DialogDescription>
                If you love my photos, you can support me. Now I`&apos;`m
                working for an amazing project that should help gain more people
                to your clubs. Also I do custom designs of rashguards for womans
                first of all try to inspire share with me love to bjj. I love
                what I do and ANY support for me mean a lot
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="link" className="sr-only">
                  Link
                </Label>
              </div>
              <Button type="submit" size="sm" className="px-3">
                <a
                  href="https://marimiavka.smugmug.com/AJP/n-bCXB4w"
                  target="_blank"
                >
                  Fightes
                </a>
              </Button>
              <Button type="submit" size="sm" className="px-3">
                <a
                  href="https://u.pcloud.link/publink/show?code=kZfsdz0ZOvnXWXlFBqSqSY8oz4bXPmx4hnXy"
                  target="_blank"
                >
                  Coaches & People
                </a>
              </Button>
              <Button type="submit" size="sm" className="px-3">
                <a href="https://www.buymeacoffee.com/miavka" target="_blank">
                  Support me
                </a>
              </Button>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Grappling Industry */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="mt-5 w-80 cursor-pointer rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-black transition delay-75 ease-in-out hover:text-white">
              <div className="monserrat-a flex w-full flex-col place-content-center items-center rounded-t-lg bg-pink-900 py-2 text-xl font-extrabold tracking-wide ">
                <h2 className="block">Grappling Industries</h2>
                <h3 className="block">21.04.2024</h3>
              </div>
              <Image
                src="/assets/img/links/graplingIndst_1.jpg"
                alt="ajp"
                width={500}
                height={100}
                className="rounded-b-md transition delay-75 ease-in-out hover:opacity-50"
              />
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Grappling Industries</DialogTitle>
              <DialogDescription>
                If you love my photos, you can support me. Now I`&apos;`m
                working for an amazing project that should help gain more people
                to your clubs. Also I do custom designs of rashguards for womans
                first of all try to inspire share with me love to bjj. I love
                what I do and ANY support for me mean a lot
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="link" className="sr-only">
                  Link
                </Label>
              </div>
              <Button type="submit" size="sm" className="px-3">
                <a
                  href="https://marimiavka.smugmug.com/Grappling-Industries/n-ncKLHW"
                  target="_blank"
                >
                  Fightes
                </a>
              </Button>
              <Button type="submit" size="sm" className="px-3">
                <a
                  href="https://u.pcloud.link/publink/show?code=kZn5Lb0ZIPaP5GOKwW4lw6O5kXkRtRS67ahy"
                  target="_blank"
                >
                  Coaches & People
                </a>
              </Button>
              <Button type="submit" size="sm" className="px-3">
                <a href="https://www.buymeacoffee.com/miavka" target="_blank">
                  Support me
                </a>
              </Button>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* AJP Zurich */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="mt-5 w-80 cursor-pointer rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-black transition delay-75 ease-in-out hover:text-white">
              <div className="monserrat-a flex w-full flex-col place-content-center items-center rounded-t-lg bg-pink-900 py-2 text-xl font-extrabold tracking-wide ">
                <h2 className="block">AJP ZURICh</h2>
                <h3 className="block">18.05.2024</h3>
              </div>
              <Image
                src="/assets/img/links/ajp_z.jpg"
                alt="ajp"
                width={500}
                height={100}
                className="rounded-b-md transition delay-75 ease-in-out hover:opacity-50"
              />
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>AJP Zurich</DialogTitle>
              <DialogDescription>
                If you love my photos, you can support me. Now I`&apos;`m
                working for an amazing project that should help gain more people
                to your clubs. Also I do custom designs of rashguards for womans
                first of all try to inspire share with me love to bjj. I love
                what I do and ANY support for me mean a lot
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="link" className="sr-only">
                  Link
                </Label>
              </div>
              <Button type="submit" size="sm" className="px-3">
                <a
                  href="https://marimiavka.smugmug.com/AJP-Zurich/n-CcGr92"
                  target="_blank"
                >
                  Fightes
                </a>
              </Button>
              <Button type="submit" size="sm" className="px-3">
                <a
                  href="https://u.pcloud.link/publink/show?code=kZNGBu0ZwG4mvw0BfUh1y1S6nbtnqfR3OAFk"
                  target="_blank"
                >
                  Coaches & People
                </a>
              </Button>
              <Button type="submit" size="sm" className="px-3">
                <a href="https://www.buymeacoffee.com/miavka" target="_blank">
                  Support me
                </a>
              </Button>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default page;
