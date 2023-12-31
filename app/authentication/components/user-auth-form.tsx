"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import { GitHubLogoIcon, ReloadIcon } from "@radix-ui/react-icons"
// import { Button } from "@/registry/new-york/ui/button"
import { Button } from "@/components/ui/button"
// import { Input } from "@/registry/new-york/ui/input"
import { Input } from "@/components/ui/input"

// import { Label } from "@/registry/new-york/ui/label"
import { Label } from "@/components/ui/label"


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

// export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
//     const [isLoading, setIsLoading] = React.useState<boolean>(false)

//     async function onSubmit(event: React.SyntheticEvent) {
//         event.preventDefault()
//         setIsLoading(true)

//         setTimeout(() => {
//             setIsLoading(false)
//         }, 3000)
//     }

//     return (
//         <div className={cn("grid gap-6", className)} {...props}>
//             <form onSubmit={onSubmit}>
//                 <div className="grid gap-2">
//                     <div className="grid gap-1">
//                         <Label className="sr-only" htmlFor="email">
//                             Email
//                         </Label>
//                         <Input
//                             id="email"
//                             placeholder="name@example.com"
//                             type="email"
//                             autoCapitalize="none"
//                             autoComplete="email"
//                             autoCorrect="off"
//                             disabled={isLoading}
//                         />
//                     </div>
//                     <Button disabled={isLoading}>
//                         {isLoading && (
//                             <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
//                         )}
//                         Sign In with Email
//                     </Button>
//                 </div>
//             </form>
//             <div className="relative">
//                 <div className="absolute inset-0 flex items-center">
//                     <span className="w-full border-t" />
//                 </div>
//                 <div className="relative flex justify-center text-xs uppercase">
//                     <span className="bg-background px-2 text-muted-foreground border-1 border-background rounded-full">
//                         Or continue with
//                     </span>
//                 </div>
//             </div>
//             <Button variant="outline" type="button" disabled={isLoading}>
//                 {isLoading ? (
//                     <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
//                 ) : (
//                     <GitHubLogoIcon className="mr-2 h-4 w-4" />
//                 )}{" "}
//                 Github
//             </Button>
//         </div>
//     )
// }


export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }

    return (
        <div className={cn("grid gap-14", className)} {...props}>
            <form onSubmit={onSubmit}>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>
                    <Button disabled={isLoading}>
                        {isLoading && (
                            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Sign In with Email
                    </Button>
                </div>
            </form>
            <div className="relative sm:w-[200px] mx-auto">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-3 text-muted-foreground border-background rounded-full">
                        Or continue with
                    </span>
                </div>
            </div>
            <Button variant="outline" type="button" disabled={isLoading}>
                {isLoading ? (
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <GitHubLogoIcon className="mr-2 h-4 w-4" />
                )}{" "}
                Github
            </Button>
        </div>
    )
}