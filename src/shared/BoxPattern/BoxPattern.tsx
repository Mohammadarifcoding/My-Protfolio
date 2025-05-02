"use client"

import { useEffect, useRef } from "react"

const BoxPattern = () => {
    return (
        <div className="relative h-full w-full bg-[#09090B]">
        <div className="absolute left-0 top-0 bottom-0 right-0 bg-[linear-gradient(to_right,#5133C42e_1px,transparent_1px),linear-gradient(to_bottom,#5133C42e_1px,transparent_1px)] bg-[size:25px_25px] [mask-image:radial-gradient(ellipse_150%_50%_at_49%_49%,#000_55%,transparent_130%)]">
        </div>
      </div>
    );
};

export default BoxPattern;