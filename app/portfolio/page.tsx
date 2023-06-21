import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardThumbnail,
  CardTitle,
} from '@/components/ui/card'
import { projects } from '@/lib/projects'

export default function PortfolioPage() {
  return (
    <>
      <h1 className="mx-auto font-k2d text-6xl tracking-wider text-teal-900">
        Portfolio
      </h1>
      <h2>Learn more about each home by clicking the card</h2>
      <div className="grid w-full grid-cols-1 gap-6 pt-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ slug, name, coverImage }) => (
          <Card key={name} href={`/portfolio/${slug}`}>
            <CardThumbnail {...coverImage} />
            <CardContent className="py-6">
              <CardTitle>{name}</CardTitle>
            </CardContent>
            <CardFooter>
              <Button asChild size="sm">
                <span>Learn more</span>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  )
}
