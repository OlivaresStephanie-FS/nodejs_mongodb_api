import Artist from "./Artist";

function ArtistList({ artists }) {
  

  return (
    <>
      {artists.map((artist) => (
        <Artist key={artist._id} artist={artist} />
      ))}
    </>
  );
}

export default ArtistList;

