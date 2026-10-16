import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-center mt-10">Time to learn some</h1>
      <h1 className="color italic">Design theory</h1>
        <p className="text-center mt-10">
          Design theory is the study of the principles and practices of design. It is a branch of philosophy that deals with the nature of design and the principles of design.
        </p>
        <div className="mt-8 flex justify-center gap-4">
        <Button>Get started</Button>
        <Button variant="outline">Learn more</Button>
      </div>
    </div>
  );
}
