/** @format */

import { useEffect, useState, useContext } from 'react'
import { FirebaseContext } from '../../context/firebase'

const useFetchData = (target) => {
  const [data, setData] = useState([])
  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allData = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docsId: contentObj.id,
        }))

        setData(allData)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }, [])

  return { [target]: data }
}

export default useFetchData
