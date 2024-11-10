import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import * as React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SignInFlow } from "../types";

export interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}
export default function SignUpCard(props: SignUpCardProps) {
  const { setState } = props;
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassWord, setConfirmPassword] = React.useState<string>("");

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="w-full h-full p-8">
        <CardTitle>Sign up to continue</CardTitle>
      </CardHeader>
      <CardDescription>
        Use your email or another service to continue
      </CardDescription>
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
          <Input
            disabled={false}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
            type="email"
            required
          ></Input>
          <Input
            disabled={false}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            type="password"
            required
          ></Input>
          <Input
            disabled={false}
            value={confirmPassWord}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            placeholder="Confirm password"
            type="password"
            required
          ></Input>
          <Button type="submit" className="w-full" size="lg" disabled={false}>
            Continue
          </Button>
        </form>
        <Separator />
        <div className="flex flex-col gap-y-2.5">
          <Button
            className=" w-full relative"
            disabled={false}
            onClick={() => {}}
            variant="outline"
            size="lg"
          >
            <FcGoogle
              size={20}
              className="absolute size-5 left-4 top-1/2 -translate-y-1/2"
            />
            Continue with Google
          </Button>
          <Button
            className="w-full relative"
            disabled={false}
            onClick={() => {}}
            variant="outline"
            size="lg"
          >
            <FaGithub
              size={20}
              className="absolute size-5 left-4 top-1/2 -translate-y-1/2"
            />
            Continue with Github
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Already have an account?&nbsp;
          <span
            className="text-sky-700 hover:underline cursor-pointer"
            onClick={() => setState("signIn")}
          >
            Sign in
          </span>
        </p>
      </CardContent>
    </Card>
  );
}
