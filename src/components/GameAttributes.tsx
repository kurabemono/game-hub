import { SimpleGrid, Text } from "@chakra-ui/react";
import Game from "../entities/Game";
import AttributeContainer from "./AttributeContainer";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <AttributeContainer term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </AttributeContainer>
      <AttributeContainer term="Metascore">
        <CriticScore score={game.metacritic} />
      </AttributeContainer>
      <AttributeContainer term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </AttributeContainer>
      <AttributeContainer term="Publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </AttributeContainer>
    </SimpleGrid>
  );
};

export default GameAttributes;
