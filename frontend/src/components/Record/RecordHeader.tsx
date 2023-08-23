import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from "styled-components";
import useRank from '../../hooks/useRank';

interface seasonProps {
    selectedSeasonCallback: (selectedSeason: string) => void
}

const RecordHeader = ({ selectedSeasonCallback }: seasonProps) => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const { defaultSeason, seasons } = useRank();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSeason, setSelectedSeason] = useState('');

    // 시즌 선택 전엔 defaultSeason을 보여주기
    useEffect(() => {
        if (defaultSeason) {
            setSelectedSeason(defaultSeason);
        }
    }, [defaultSeason]);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    // 시즌 클릭 시 모달창 토글, 선택한 시즌 넘겨주기, 
    const onSeasonSelected = (season: string) => {
        selectedSeasonCallback(season);
        setSelectedSeason(season);
        toggleOpen();
    }

    return (
        <>
            <SeasonHeaderWrap>
                <SeasonHeader onClick={toggleOpen}>
                    {isMobile ?
                        <SelectBox
                            value={selectedSeason}
                            onChange={e => onSeasonSelected(e.target.value)}
                        >
                            {seasons.map((item, index) => (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                            ))}
                        </SelectBox>
                        :
                        <span>
                            {selectedSeason}
                        </span>
                    }
                    {!isMobile &&
                        <DropdownIcon>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="7"
                                fill="none"
                                viewBox="0 0 12 7"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M12 .762a.738.738 0 01-.223.536L6.527 6.63A.715.715 0 016 6.857a.715.715 0 01-.527-.226L.223 1.298A.738.738 0 010 .762C0 .556.074.377.223.226A.715.715 0 01.75 0h10.5c.203 0 .379.075.527.226.149.151.223.33.223.536z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </DropdownIcon>
                    }
                </SeasonHeader>
            </SeasonHeaderWrap>

            {isOpen && !isMobile && (
                <SeasonList>
                    {seasons.map((item, index) => (
                        <SeasonItem key={index} onClick={() => onSeasonSelected(item)}>
                            {item}
                        </SeasonItem>
                    ))}
                </SeasonList>
            )}
        </>
    )
}


export default RecordHeader

const SeasonHeaderWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const SeasonHeader = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 30px;
    font-weight: bold;
    padding: 20px 0;

    &:hover {
        color: #5546B7;
    }

    @media (max-width: 767px) {
        font-size: 24rem;
    }
`

const DropdownIcon = styled.span`
    display: flex;
    padding-left: 5px;
`

const SeasonList = styled.ul`
    position: absolute;
    left: calc(50% - 80px);
    max-height: 200px;
    width: 150px;
    z-index: 5;

    font-size: 16px;
    text-align: center;
    cursor: pointer;

    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 12px;

    background-color: #fff;
    box-shadow: 0px 0px 15px rgba(0,0,0,0.1);
    overflow: hidden;

    &::-webkit-scrollbar {
        display: none;
    }
`

const SeasonItem = styled.li`
    width: 100%;
    line-height: 2em;

  &:hover {
    background-color: #EFEAFC;
    border-radius: 7.5px;
  }
`

const SelectBox = styled.select`
    border: none;
    width: auto;
    font-size: 24px;
    background: transparent;
    box-sizing: border-box;
`