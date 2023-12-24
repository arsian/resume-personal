import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedSvgComponent } from "@/components/ui/animated-circles"
import { cn } from "@/lib/utils"
import { UserAuthForm } from "./components/user-auth-form"


export const metadata: Metadata = {
    title: "Authentication",
    description: "Authentication forms built using the components.",
}

export default function AuthenticationPage() {
    return (
        <>
            <div className="rounded-lg">
                <AnimatedSvgComponent />
                {/* <Image
                    src="/examples/authentication-light.png"
                    width={1280}
                    height={843}
                    alt="Authentication"
                    className="block dark:hidden"
                /> */}

                {/* <Image
                    src="/examples/authentication-dark.png"
                    width={1280}
                    height={843}
                    alt="Authentication"
                    className="hidden dark:block"
                /> */}
            </div >
            <div className="bg-stone-800 z-99 container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0 w-[100%] px-8 md:w-full">
                <Link
                    href="/examples/authentication"
                    className="absolute right-4 top-4 md:right-8 md:top-8"
                >
                    <Button variant="default">Login</Button>
                </Link>
                <div className="relative hidden h-full flex-col bg-stone-900 text-white lg:flex dark:border-r">
                    <span className="hidden sm:block">
                        <AnimatedSvgComponent />
                    </span>
                    {/* <div className="absolute inset-0 bg-zinc-400" /> */}
                    <div className="flex flex-col h-full p-20 gap-16">
                        <div className="relative z-20 flex items-center text-lg font-mediumn ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2 h-6 w-6"
                            >
                                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                            </svg>
                            {`Arsia's Resume`}
                        </div>
                        <div className="relative z-20 mt-auto ">
                            <blockquote className="space-y-2">
                                <p className="text-lg">
                                    &ldquo;I think of products just to find out a few months later that my idea was built and it was indeed a good one. 🤦‍♂️ &rdquo;
                                </p>
                                {/* <p className="text-lg">
                                    &ldquo;This library has saved me countless hours of work and
                                    helped me deliver stunning designs to my clients faster than
                                    ever before.&rdquo;
                                </p> */}
                                <footer className="text-sm">Arsia Ardalan</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className="lg:p-2 rounded-lg text-slate-400">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-10 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight ">
                                Create an account
                            </h1>
                            <p className="text-sm ">
                                Enter your email below to create your account
                            </p>
                        </div>
                        <UserAuthForm />
                        <p className="px-8 text-center text-sm text-muted-foreground w-[250px] mx-auto lg:w-[350px]">
                            By clicking continue, you agree to our{" "}
                            <Link
                                href="/terms"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link
                                href="/privacy"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}