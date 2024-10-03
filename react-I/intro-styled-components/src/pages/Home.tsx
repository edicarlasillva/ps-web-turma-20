import { LuApple } from "react-icons/lu";
import { Bs5Circle } from "react-icons/bs";

import { Header } from "../components/Header";

import flores from "./../assets/flores.jpg";

export function Home() {
  return (
    <>
      <Header />
      <img src={flores} alt="" width={300} />
      <LuApple />
      <Bs5Circle />
    </>
  );
}
