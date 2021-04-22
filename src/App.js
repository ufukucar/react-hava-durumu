import React, { useState } from "react";

import axios from "axios";

import Search from "./components/Search";
import Sonuc from "./components/Sonuc";
import Loading from "./components/Loading";

function App() {
  const [sehir, setSehir] = useState("");
  const [sonuc, setSonuc] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    setSehir("");
    setSonuc([]);

    if (sehir.trim() === "") return alert("Lütfen bir şehir adı yazınız");

    setLoading(true);
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/find?q=${sehir}&lang=tr&units=metric&&cnt=5&appid=${process.env.REACT_APP_OPEN_WEATHER_API}`
      )
      .then((res) => {
        let donenDeger = res.data.list;
        //console.log("donen deger: ", res.data.list);
        setLoading(false);
        setSonuc(donenDeger);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <div className="App">
      <div className="container">
        <Search
          handleOnSubmit={handleOnSubmit}
          sehir={sehir}
          setSehir={setSehir}
        />

        {loading && <Loading />}

        {sonuc.length > 0 && <Sonuc sonuc={sonuc} />}
      </div>
    </div>
  );
}

export default App;
