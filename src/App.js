import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState("")
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])


  const fetchData = () => {
    let result = 0;

    fetch('https://api.publicapis.org/categories').then(res => res.json()).then((response) => {
      result = response.categories;
      setData(result)
    });
    return result;
  }



  return (
    <div >
      <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" />
      <table>
        <tbody>
          {
            search !== "" ?
              data.filter(str => str.toLowerCase().includes(search.toLowerCase())).map(item =>
                <tr>
                  <td>
                    {item}
                  </td>
                </tr>
              )
              :
              data.map(item =>
                <tr>
                  <td>
                    {item}
                  </td>
                </tr>
              )
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
