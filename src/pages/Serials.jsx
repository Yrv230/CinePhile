import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadSerials } from '../features/Serials/serialsSlice'
import styled from 'styled-components'
import { Container } from '../components/Container'
import FilmsItem from '../features/Films'

const SerialsWrapper = styled.div`
  padding: 140px 0 90px 0;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
`

const SerialsTitle = styled.div`
  font-family: 'RalBold';
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
`

const SerialsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
`

const Serials = () => {
  const dispatch = useDispatch()
  const { results } = useSelector(state => state.serials.list)

  useEffect(() => {
    dispatch(loadSerials())
  }, [])

  console.log(results);

  return (
    <Container>
      <SerialsWrapper>
        <SerialsTitle>Все сериалы</SerialsTitle>
        <SerialsList>
          {
            results && results.map(item => (
              <FilmsItem
                key={item.id}
                item={item}
              />
            ))
          }
        </SerialsList>
      </SerialsWrapper>
    </Container>
  )
}

export default Serials