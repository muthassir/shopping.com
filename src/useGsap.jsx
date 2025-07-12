import { useLayoutEffect } from "react";
import gsap from "gsap";

export const useGsap = (animationFn, deps = [])=>{
    useLayoutEffect(()=>{
        const ctx = gsap.context(()=>{
            animationFn(gsap)
        })
        return()=> ctx.revert()
    }, deps)
}