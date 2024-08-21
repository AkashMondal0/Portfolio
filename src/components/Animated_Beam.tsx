"use client";
import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import SkyIcon from "@/lib/skyicon";


const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className,
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

export function AnimatedBeamComponent() {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const div7Ref = useRef<HTMLDivElement>(null);

    return (
        <div>
            <div className="relative flex mb-36 w-full items-center justify-center overflow-hidden rounded-lg bg-background p-10"
                ref={containerRef}>
                <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
                    <div className="flex flex-row items-center justify-between">
                        <Circle ref={div1Ref}>
                            <Icons.aws />
                        </Circle>
                        <Circle ref={div5Ref}>
                            <Icons.VsCode />
                        </Circle>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <Circle ref={div2Ref}>
                            <Icons.Github />
                        </Circle>
                        <Circle ref={div4Ref} className="size-16">
                            <Icons.user />
                        </Circle>
                        <Circle ref={div6Ref}>
                            <Icons.Git />
                        </Circle>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <Circle ref={div3Ref}>
                            <Icons.postman />
                        </Circle>
                        <Circle ref={div7Ref}>
                            <Icons.grafana />
                        </Circle>
                    </div>
                </div>

                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div1Ref}
                    toRef={div4Ref}
                    curvature={-75}
                    endYOffset={-10}
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div2Ref}
                    toRef={div4Ref}
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div3Ref}
                    toRef={div4Ref}
                    curvature={75}
                    endYOffset={10}
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div5Ref}
                    toRef={div4Ref}
                    curvature={-75}
                    endYOffset={-10}
                    reverse
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div6Ref}
                    toRef={div4Ref}
                    reverse
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div7Ref}
                    toRef={div4Ref}
                    curvature={75}
                    endYOffset={10}
                    reverse
                />
            </div>
        </div>
    );
}

export default AnimatedBeamComponent;
const Icons = {
    VsCode: () => (
        <SkyIcon iconName="vscode-color.svg" className="w-full h-full" />
    ),
    Github: () => (
        <SkyIcon iconName="github-color.svg" className="w-full h-full" />
    ),
    aws: () => (
        <SkyIcon iconName="amazonwebservices-color.svg" className="w-full h-full" />
    ),
    grafana: () => (
        <SkyIcon iconName="grafana-color.svg" className="w-full h-full" />
    ),
    postman: () => (
        <SkyIcon iconName="postman-color.svg" className="w-full h-full" />
    ),
    Git: () => (
        <SkyIcon iconName="git-color.svg" className="w-full h-full" />
    ),
    docker: () => (
        <SkyIcon iconName="docker-color.svg" className="w-full h-full" />
    ),
    user: () => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    ),
};
