import Link from "next/link"

export default async function NoMapSelected() {
    const response = await fetch("http://localhost:8000/maps",  { next: { revalidate: 1 } });
    const maps: {id: string}[] = await response.json();
    return (
      <>
        <div>No map selected</div>
        {maps.map(map => <><Link href={'/maps/' + map.id}>Go to Map {map.id}</Link><br/></>)}
      </>
    )
  }