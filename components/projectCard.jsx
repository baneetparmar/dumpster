import {
  Link,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
} from "@nextui-org/react";

function projectCard(
  { project_title, project_description, project_link, lang_used },
  index
) {
  return (
    <Card key={index} className="dark w-[400px] h-[250px] p-2">
      <CardHeader>{project_title}</CardHeader>
      <CardBody>{project_description}</CardBody>
      <CardFooter variant="flat" className="justify-end">
        <Link href={project_link}>
          <Button>View</Button>
        </Link>
      </CardFooter>
      <div>
        {lang_used.map((lang, index) => (
          <Chip key={index} variant="flat">
            {lang}
          </Chip>
        ))}
      </div>
    </Card>
  );
}
export default projectCard;
