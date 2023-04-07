import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import BannerItem from './BannerItem'
import { loadBanner } from './bannerSlice'

const BannerWrapper = styled.div`
    position: relative;
    height: 100vh;
`

const Banner = () => {
    const [slide, setSlide] = useState(0)
    const dispatch = useDispatch()
    const { results } = useSelector(state => state.banner.list)

    useEffect(() => {
        let timeOut = setTimeout(handleNextSlide, 10000);

        return () => {
            clearTimeout(timeOut)
        }
    }, [slide])

    useEffect(() => {
        dispatch(loadBanner())
    }, [])


    const handleNextSlide = () => {
        if (results && results.length - 1 === slide) {
            setSlide(0)
        } else {
            setSlide(slide + 1)
        }
    }



    return (
        <BannerWrapper>
            {
                results && results.map((item, i) => (
                    slide === i ?
                        <BannerItem
                            key={item.id}
                            movie={item}
                            next={results[i + 1 === results.length ? 0 : i + 1]}
                            handleClick={handleNextSlide}
                        />
                        :
                        null
                ))
            }
        </BannerWrapper>
    )
}

export default Banner