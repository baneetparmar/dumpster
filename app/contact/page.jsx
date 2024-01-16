import {
  Link,
  Button,
  Input,
  Textarea,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
function submitForm() {}
export default function Contact() {
  return (
    <div className="flex flex-col items-center  h-max p-10  mt-20">
      <Card>
        <CardHeader>Contact Us</CardHeader>
        <CardBody>
          <form className="flex flex-col gap-4  justify-center">
            <div className="flex flex-row gap-4 ">
              <Input
                isRequired
                label="First Name"
                placeholder="john"
                type="text"
              />
              <Input label="Last Name" placeholder="doe" type="text" />
            </div>
            <Input
              isRequired
              isClearable
              label="Email"
              placeholder="Enter your email"
              type="email"
            />
            <Textarea label="Message" />

            <div className="flex flex-col gap-2 ">
              <Button href="#" as={Link} color="primary">
                Send Message
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
