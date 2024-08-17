import { FC } from 'react';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import WordPullUp from './magicui/word-pull-up';



const Contact: FC = () => {
    return (
        <>
            <div className='h-10 z-50' id='contact'></div>
            <div className='p-4 w-full my-10'>
                <WordPullUp
                    className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
                    words=" Take a coffee with me" />
                <p className="text-neutral-500 my-5 max-w-lg mx-auto text-sm text-center relative z-10">
                    If you have any questions or just want to say hi,
                    feel free to drop me a message.
                </p>
                <Card className="rounded-2xl md:max-w-[600px] shadow-xl dark:border-gray-100/10 border-gray-900/10 w-full mx-auto">
                    <CardHeader>
                        <CardTitle>Contact</CardTitle>
                        <CardDescription>
                            Please fill in the form below to send me an email.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="Your Name" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="Email">Email</Label>
                                    <Input id="Email" placeholder="Your Email" />
                                </div>
                                <div className="grid w-full gap-1.5">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea placeholder="Type your message here." id="message" style={
                                        {
                                            height: '10rem'
                                        }
                                    } />
                                </div>

                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                        <Button>Send Message</Button>
                    </CardFooter>
                </Card>
            </div>
            <div className='h-10'></div>
        </>
    );
};

export default Contact;