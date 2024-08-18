import AnimatedGradientTextButton from "./AnimatedGradientText"
import { AnimatedShinyTextButton } from "./AnimatedShinyTextButton"
import { NeonGradientCard } from "./magicui/neon-gradient-card"
import WordPullUp from "./magicui/word-pull-up"


const Hero = () => {
    return (
        <div className="w-full flex justify-center items-center min-h-dvh gap-5 flex-wrap">
            <div className="w-96 space-y-4 p-4">
                <WordPullUp
                    className="text-4xl font-bold tracking-[-0.02em]"
                    words="Hi!👋I'm Akash Mondal, I enjoy learning new things and technology" />
                <AnimatedShinyTextButton />
                <AnimatedGradientTextButton />
            </div>
            <div className="flex-none">
                <NeonGradientCard className="w-max items-center justify-center text-center ">
                    <picture className='h-auto w-auto'>
                        <source srcSet={"/assets/app/akash.jpg"} type="image/avif" />
                        <source srcSet={"/assets/app/akash.jpg"} type="image/webp" />
                        <source srcSet={"/assets/app/akash.jpg"} type="image/jpeg" />
                        <source srcSet={"/assets/app/akash.jpg"} type="image/png" />
                        <source srcSet={"/assets/app/akash.jpg"} type="image/jpg" />
                        <img
                            draggable={false}
                            onContextMenu={event => event.preventDefault()}
                            data-src={"/assets/app/akash.jpg"}
                            width={100}
                            height={100}
                            loading="lazy"
                            decoding="async"
                            fetchPriority={"high"}
                            src="/assets/app/akash.jpg"
                            alt="photo"
                            className="rounded-full w-60 h-60 object-cover userNotSelectImg" />
                    </picture>
                </NeonGradientCard>
            </div>
        </div>
    )
}

export default Hero