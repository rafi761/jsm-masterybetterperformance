import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"


interface Props {
    id: string,
    title: string,
    image: string,
    downloadNumber: number,
    slug: string
}

const ResourceCard = ({id, title, image, downloadNumber, slug}: Props) => {
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
        <Link href={`/`}>
            <CardHeader className="flex-center flex-col gap-2.5 !p-0">
                <div className="h-fit w-full">
                    <Image 
                        src={image}
                        alt={title}
                        width={384}
                        height={440}
                        className="h-full rounded-md object-cover"
                    />
                </div>
                <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">{title}</CardTitle>
            </CardHeader>
        </Link>
        <CardContent className="flex-between mt-4 p-0">
            <div className="flex-center body-medium gap-1.5 text-white">
                <Image 
                    src="/downloads.svg" alt="download" width={20} height={20}
                />
                {downloadNumber}
            </div>
            <Link href={`/`} className="flex-center text-gradient_purple-blue body-semibold gap-1.5">
                Download Now

                <Image src="/arrow-blue.svg" width={13} height={10} alt="Arrow"/>
            </Link>
        </CardContent>
    </Card>
  )
}

export default ResourceCard