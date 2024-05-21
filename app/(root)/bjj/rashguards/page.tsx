import React from "react";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="my-10 flex w-full gap-6 p-5 text-slate-300 sm:flex-row sm:items-center">
      <p className="text-white">
        {" "}
        Web site in development mode. I will add all needed info soon
      </p>
      <Button variant="destructive">
        <a href="https://www.instagram.com/zla_miavka_bjj"> Rashguards insta</a>
      </Button>
      <Button variant="destructive">
        <a href="https://u.pcloud.link/publink/show?code=PIHotalK">
          Implemented designs
        </a>
      </Button>
    </div>
  );
};

export default page;
