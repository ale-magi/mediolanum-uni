import { User2 } from "lucide-react";
import Image from "next/image";

export default function Page() {

  const visitedPlaces = [
    {
      img: "/place-1.webp",
      title: "Per Jupiter! Hai visto l'Arco?"
    },
    {
      img: "/place-2.webp",
      title: "Proh Deum! Hai scoperto l'Anfiteatro"
    },
    {
      img: "/place-3.webp",
      title: "Macte! Hai trovato le colonne di San Lorenzo"
    },
    {
      img: "/place-4.webp",
      title: "Quid novi? Hai trovato la cartolina?"
    },
  ]

  return (
    <div className="flex flex-col p-5 pb-32 gap-12">
      <div className="flex gap-5 items-center">
        <div className="border-2 rounded-2xl">
          <User2 size={150} />
        </div>
        <div className="space-y-2 divide-slate-200 divide-y-2 size-full p-2 bg-slate-200/20 rounded-xl">
          <h2 className="text-xl text-primary">Giacomo Poretti</h2>
          <p className="text-xl text-primary">Studente</p>
          <h2 className="text-xl text-primary">23 anni</h2>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl">I tuoi traguardi: </h1>
        {visitedPlaces.map((place, index) => (
          <div key={index} className="flex gap-3 rounded-2xl border items-center border-black/30 shadow-xl p-2">
            <div className="min-h-16 min-w-1/4 ">
              <Image
                alt=""
                src={place.img}
                width={120}
                height={120}
                className="rounded-2xl border border-black/30 aspect-square"
              />
            </div>
            <p>
              <strong>Obiettivo sbloccato!</strong>
              <br />
              {place.title}
            </p>
          </div>
        ))}
      </div>
    </div >
  )
}