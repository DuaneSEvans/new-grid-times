import React from "react"
import styled from "styled-components/macro"

import { MARKET_DATA, SPORTS_STORIES } from "../../data"

import MarketCard from "../MarketCard"
import SectionTitle from "../SectionTitle"
import MiniStory from "../MiniStory"
import { COLORS, QUERIES } from "../../constants"

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  @media (${QUERIES.desktopAndUp}) {
    grid-template-columns: repeat(auto-fill, minmax(min(500px, 100%), 1fr));
    gap: 0;
    & > :nth-of-type(2n) {
      border-left: 1px solid var(--color-gray-300);
      padding-left: 16px;
    }
    & > :nth-of-type(n) {
      padding-right: 16px;
    }
  }
`

const MarketsSection = styled.section``

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(180px, 100%), 1fr));
  gap: 24px;
`

const SportsSection = styled.section`
  display: grid;
`

const SportsStories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(180px, 100%), 1fr));
  gap: 16px;

  @media (${QUERIES.tabletAndUp}) {
    display: flex;
    padding-bottom: 16px;
    overflow: auto;
    gap: 24px;

    & > * {
      min-width: 250px;
    }
  }
`

export default SpecialtyStoryGrid
