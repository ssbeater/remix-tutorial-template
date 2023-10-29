import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const babyLegs = await fetch("https://rickandmortyapi.com/api/character/29");
  const data = await babyLegs.json();
  // console.log(data)

  if (!babyLegs) {
    throw new Response("Not Found", { status: 404 });
  }

  return json({ babyLegs: data });
};


export default function Index() {
  const { babyLegs } = useLoaderData<typeof loader>();
  
  return (
    <p id="index-page">
      This is a demo for Remix.
      <br />
      Check out{" "}
      <a href="https://remix.run">the docs at remix.run</a>.
      <br />
      {babyLegs.name}
      <img src={babyLegs.image} alt="baby-legs" />
    </p>
  );
}
