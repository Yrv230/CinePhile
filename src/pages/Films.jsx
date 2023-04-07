import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Container } from '../components/Container'
import FilmsItem from '../features/Films'
import { useEffect } from 'react'
import { loadFilms } from '../features/Films/filmsSlice'


const FilmsWrapper = styled.div`
  padding: 140px 0 90px 0;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
`

const FilmsTitle = styled.h2`
  font-family: 'RalBold';
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
`

const FilmsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
`

const Films = () => {
  const dispatch = useDispatch()
  const { results } = useSelector(state => state.films.list)
  
  useEffect(() => {
    dispatch(loadFilms())
  }, [])

  console.log(results);

  return (
    <Container>
      <FilmsWrapper>
        <FilmsTitle>Все фильмы</FilmsTitle>
        <FilmsList>
          {
            results && results.map(item => (
              <FilmsItem 
                key={item.id}
                item={item}
              />
            ))
          }
        </FilmsList>
      </FilmsWrapper>
    </Container>
  )
}

export default Films