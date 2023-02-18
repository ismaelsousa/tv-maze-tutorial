import React, { useMemo, useState } from "react";
import { View } from "react-native";
import { useTheme } from "styled-components/native";
import { removeHtmlFromString } from "../../utils/html";
import { noSummaryString } from "../../utils/message";
import EpisodeCover from "../EpisodeCover";
import Icon from "../Icon";
import Spacer from "../Spacer";
import Text from "../Text";

import {
  Container,
  ContainerTitleEpisode,
  RowEpisode,
  TitleEpisode,
} from "./styles";
import { EpisodeCardProps } from "./types";

const EpisodeCard = ({ episode, onPress }: EpisodeCardProps) => {
  const { colors, spacing } = useTheme();

  const [shouldShowDetails, setShouldShowDetails] = useState(false);

  const summaryWithoutHtml = useMemo(() => {
    if (!episode?.summary) return noSummaryString;
    return removeHtmlFromString(episode?.summary);
  }, [episode]);

  return (
    <Container>
      <RowEpisode
        key={episode.id}
        onPress={() => {
          setShouldShowDetails((old) => !old);
          onPress?.();
        }}
      >
        <EpisodeCover url={episode.image?.medium} name={episode.name} />
        <Spacer width={spacing.sm} />
        <ContainerTitleEpisode>
          <TitleEpisode numberOfLines={1}>
            {episode?.number ? `${episode.number}. ` : `Special: `}
            {episode?.name}
          </TitleEpisode>
          <Text size={12} color="caption">
            {episode.runtime <= 60 ? `${episode.runtime} min` : `+1h`}
          </Text>
        </ContainerTitleEpisode>
        <Icon
          icon={shouldShowDetails ? "menuUp" : "menuDown"}
          color={colors.brand}
        />
      </RowEpisode>
      {shouldShowDetails && (
        <View>
          <Spacer height={spacing.sm} />
          <Text color="caption">{summaryWithoutHtml}</Text>
        </View>
      )}
    </Container>
  );
};

export default EpisodeCard;
