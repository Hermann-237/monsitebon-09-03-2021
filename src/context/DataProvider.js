import { useState, useEffect } from "react"
import axios from "axios"
import DataContext from "./DataContext"

function DataProvider({ children }) {
    const [data, setdata] = useState([])


    /* function objectVerb(singleverb) {
      const options = {
        method: 'GET',
        url: 'https://linguatools-conjugations.p.rapidapi.com/conjugate/',
        params: { verb: singleverb },
        headers: {
          'x-rapidapi-key': '2a50965eebmsh629d096fce14516p1319aejsn22e0ba714d98',
          'x-rapidapi-host': 'linguatools-conjugations.p.rapidapi.com'
        }
      };
  
      axios.request(options).then(function (response) {
        setobjects(response.data)
      }).catch(function (error) {
        console.error(error);
      })
    } */
    useEffect(() => {
        const cors = "https://cors-anywhere.herokuapp.com/"
        axios.get(`${cors}https://mesverbes.herokuapp.com/api/verbs?limit=400`)
            .then(response => {
                const a = response.data
                const resu = a.map(element => element.verbe)
                setdata(resu)
            })
            .catch(e => console.log(e.message))

    }, [])

    return (
        <DataContext.Provider value={{ data }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataProvider;