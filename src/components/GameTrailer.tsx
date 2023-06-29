import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const firstvid = data?.results[0];

  return firstvid ? (
    <video src={firstvid.data[480]} poster={firstvid.preview} controls />
  ) : null;
};

export default GameTrailer;
