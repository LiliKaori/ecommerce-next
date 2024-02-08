import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import Link from "next/link";

export default function Navbar (){
    // const useStore = useCartStore()

    return(
        <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300">
          <Link href="/" className="uppercase font-bold text-md h-12 flex items-center">Next Store</Link>
          <div className="flex items-center gap-8">
            <div className="flex items-center cursor-pointer relative">
                <svg className="svg-icon" style={{width: "1.0830078125em", height: "1em",verticalAlign: "middle",fill: "currentColor",overflow: "hidden"}} viewBox="0 0 1109 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M1012.920568 469.559268c-15.332419 43.758169-43.523597 85.298574-85.298574 85.298574L294.493327 554.857842 309.207331 661.48106c3.326644 23.542406 19.085556 42.649287 42.649287 42.649287l618.414663 0 0 42.649287L330.531975 746.779634c-35.334934 0-57.960381-27.956608-63.973931-63.973931L181.25947 43.066397 10.662322 43.066397 10.662322 0.41711c0 0 131.317155-0.938284 170.597148 0 27.977932 0.661064 42.649287 42.649287 42.649287 42.649287l11.771203 85.298574L1012.920568 128.364971c59.090587 0 86.620702 24.864534 85.298574 85.298574L1012.920568 469.559268zM1012.920568 171.014258 351.856618 171.014258l-85.298574 0-24.992482 0 47.042164 341.194297L309.207331 512.208555l0 0 597.090019 0c36.550439 0 51.904182-10.79027 63.973931-42.649287l85.298574-234.571079C1063.438649 190.270411 1043.308185 171.014258 1012.920568 171.014258zM426.492871 789.428921c64.784267 0 117.285539 52.501272 117.285539 117.285539S491.277138 1024 426.492871 1024 309.207331 971.498728 309.207331 906.714461 361.708604 789.428921 426.492871 789.428921zM426.492871 981.350713c41.220536 0 74.636252-33.394392 74.636252-74.636252S467.713407 832.078208 426.492871 832.078208 351.856618 865.4726 351.856618 906.714461 385.272335 981.350713 426.492871 981.350713zM874.310385 789.428921c64.784267 0 117.285539 52.501272 117.285539 117.285539S939.094652 1024 874.310385 1024 757.024846 971.498728 757.024846 906.714461 809.526118 789.428921 874.310385 789.428921zM874.310385 981.350713c41.241861 0 74.636252-33.394392 74.636252-74.636252S915.552246 832.078208 874.310385 832.078208 799.674133 865.4726 799.674133 906.714461 833.068525 981.350713 874.310385 981.350713z"  /></svg>
                <span className="bg-teal-600 text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center absolute left-3 bottom-3">2</span>
            </div>
            <div>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <SignInButton mode="modal">
                        <button className="border border-gray-400 rounded-md px-3 py-2">
                            Fazer Login
                        </button>
                    </SignInButton>
                </SignedOut>
            </div>
          </div>
        </nav>
    )
}