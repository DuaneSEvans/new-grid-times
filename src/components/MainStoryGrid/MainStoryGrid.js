import React from "react"
import styled from "styled-components/macro"

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data"

import SectionTitle from "../SectionTitle"
import MainStory from "../MainStory"
import SecondaryStory from "../SecondaryStory"
import OpinionStory from "../OpinionStory"
import Advertisement from "../Advertisement"
import { COLORS, QUERIES } from "../../constants"

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px;
  margin-bottom: 48px;

  @media (${QUERIES.tabletAndUp}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "main-story main-story secondary-stories"
      "advertisement advertisement advertisement"
      "opinion-stories opinion-stories opinion-stories";
    gap: 48px 0;
  }

  @media (${QUERIES.laptopAndUp}) {
    grid-template-columns: 4fr 3fr 2fr;
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
    gap: 0;
  }
`

const MainStorySection = styled.section`
  grid-area: main-story;

  @media (${QUERIES.tabletAndUp}) {
    padding-right: 16px;
    border-right: solid 1px ${COLORS.gray[300]};
  }

  @media (${QUERIES.laptopAndUp}) {
    padding-right: 16px;
    border-right: solid 1px ${COLORS.gray[300]};
  }
`

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  @media (${QUERIES.tabletAndUp}) {
    padding-left: 16px;
  }
  @media (${QUERIES.laptopAndUp}) {
    padding-left: 16px;
    padding-bottom: 16px;
  }
`

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:first-child) {
    border-top: 1px solid var(--color-gray-300);
    padding-top: 16px;
  }
  & > *:not(:last-child) {
    padding-bottom: 16px;
  }

  @media (${QUERIES.tabletOnly}) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(240px, 100%), 1fr));
    gap: 16px;

    & > *:not(:first-child) {
      border-top: 0;
      padding: 0;
    }
    & > *:not(:last-child) {
      padding: 0;
    }
  }

  @media (${QUERIES.laptopAndUp}) {
    &:nth-of-type(2n - 1) {
      padding-right: 16px;
      border-right: 1px solid ${COLORS.gray[300]};
    }
  }
`

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  @media (${QUERIES.laptopAndUp}) {
    padding-left: 16px;
    padding-bottom: 16px;

    /** For optical alignment */
    margin-top: -8px;
  }
`

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  @media (${QUERIES.laptopAndUp}) {
    padding-left: 16px;
  }
`

export default MainStoryGrid
