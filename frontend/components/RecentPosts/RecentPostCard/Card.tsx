import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

export default function PostCard({ post }: any) {
  const {
    author,
    authorimage,
    category,
    excerpt,
    id,
    image,
    imagetitle,
    publishedAt,
    title,
    updatedAt,
  } = post;
  return (
    <Link href={`/blogs/${id}`}>
      <Card className="m-3 cursor-pointer">
        <CardHeader color="blue" className="relative h-56">
          <img
            src={`/api/image?title=${imagetitle}`}
            alt="blog image"
            className="h-full w-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography
            variant="h5"
            className="mb-2 hover:text-blue-500 line-clamp-2"
          >
            {title}
          </Typography>
          <Typography className="line-clamp-4">{excerpt}</Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Button className="p-2">
            <Typography variant="small">{category}</Typography>
          </Button>
          <Typography variant="small" color="gray" className="flex gap-1">
            <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
            {author}
          </Typography>
        </CardFooter>
      </Card>
    </Link>
  );
}
