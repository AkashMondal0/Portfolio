import AnimatedGradientTextButton from "./AnimatedGradientText"
import { AnimatedShinyTextButton } from "./AnimatedShinyTextButton"
import { NeonGradientCard } from "./magicui/neon-gradient-card"
import WordPullUp from "./magicui/word-pull-up"


const Hero = () => {
    return (
        <div className="w-full flex justify-center items-center min-h-dvh gap-5 flex-wrap">
            <div className="w-96 lg:w-[32rem] space-y-4">
                <WordPullUp
                    className="text-4xl font-bold tracking-[-0.02em]"
                    words="Hi!👋I'm Akash Mondal, I enjoy learning new things and technology" />
                <AnimatedShinyTextButton />
                <AnimatedGradientTextButton />
            </div>
            <div className="flex-none">
                <NeonGradientCard className="w-max items-center justify-center text-center ">
                    <img src="/assets/app/akash.jpeg" alt="photo"
                        className="rounded-full w-60 h-60 object-cover userNotSelectImg" />
                </NeonGradientCard>
            </div>
        </div>
    )
}

export default Hero