"use client";
import * as React from "react";
import { SignInFlow } from "../types";
import { cn } from "@/lib/utils";
import SignInCard from "./sign-in-card";
import SignUpCard from "./sign-up-card";

export default function AuthScreen() {
  const [state, setState] = React.useState<SignInFlow>("signIn");

  return (
    <div className={cn("h-full flex items-center justify-center bg-[#5C3B58]")}>
      <div className={cn("md:h-auto md:w-[420px] text-center ")}>
        {state === "signIn" ? (
          <SignInCard setState={setState} />
        ) : (
          <SignUpCard setState={setState} />
        )}
      </div>
    </div>
  );
}
