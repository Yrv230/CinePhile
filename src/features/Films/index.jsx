import React from 'react'
import styled from 'styled-components'
import { img_original } from '../../config'

const FilmWrapper = styled.a`
  display: flex;
  position: relative;
  overflow: hidden;
  border: 1px solid #000000;
  filter: drop-shadow(0px 4px 4px #000000);
  border-radius: 10px;
  cursor: pointer;

  img {
    width: 100%;
  }
`

const FilmInfo = styled.div`
  background: linear-gradient(358.77deg, #000000 0.69%, rgba(0, 0, 0, 0.723958) 37.71%, rgba(0, 0, 0, 0) 72.49%);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 16px;
  bottom: 0;
  height: 223px;
  width: 100%;
`

const FilmTitle = styled.h3`
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  font-family: 'InterReg';
  color: #FFFFFF;
`

const FilmsItem = ({ item }) => {
  return (
    <FilmWrapper>
        <img src={`${img_original}${item.poster_path}`} alt="" />
        <FilmInfo>
          <FilmTitle>{item.title}{item.name}</FilmTitle>
        </FilmInfo>
    </FilmWrapper>
  )
}

export default FilmsItem