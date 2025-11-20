import Heading from "./pages/heading";

export default function Home() {
  const user = [
    {
      id:1,
      username:"Ali",
      postion:"frontend",
      salary:"20k"
    },
    {
      id:2,
      username:"khan",
      postion:"Ai developer!",
      salary:"50k"
    },
    {
      id:2,
      username:"fawad",
      postion:"full-stack",
      salary:"60k"
    }
  ]
  return (
    <>
      <Heading />
    </>
  );
}
