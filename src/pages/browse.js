import React from 'react'
import useFetchData from '../shared/Hooks/useFetchData'
import filterData from '../helper/FilterData'
import BrowseContainer from '../containers/browse'

const Browse = () => {
  const { series } = useFetchData('series')
  const { films } = useFetchData('films')
  const slides = filterData([series, films])

  return <BrowseContainer slides={slides} />
}

export default Browse
