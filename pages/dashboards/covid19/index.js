import { useEffect, useState } from "react";

async function csv2json(url) {
    // const url = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/04-06-2021.csv`

    const data2json = await fetch(url)
        .then(async function(response) {
            const text = await response.text();
            var header = text.split('\n')[0];
            const data = text.split('\n').filter((t) => {
                return t !== header;
            });

            header = header.split(',');

            var json = []
            data.forEach((d,di) => {
                var j = {};
                
                const v = d.split(',');
                for(var i = 0; i <= header.length -1; i++){
                    j[header[i]] = v[i]
                }
                
                if(d.length > 0){
                    json.push(j);
                }

            });
            return json;
        })
    
    return {data:data2json}  
}


export async function getStaticProps(){
    
    
    const url = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-04-2021.csv`
    
    const { data } = await csv2json(url);
    
    data.sort((a,b) => {
        return b.Deaths - a.Deaths
    });

    return {
        props: {data}
    }
}

export default function Covid19(props) {
    
    const [data, setData] = useState([]);

    useEffect(() =>{
        setData([props.data]);
    },[]);

    
    return (
        <>
            <h1>Covid-19</h1>
            <table>
                <tr>
                    <th>Pais</th>
                    <th>Estado</th>
                    <th>Confirmado</th>
                    <th>Fatal</th>
                    <th>Recuperado</th>
                    <th>Ativo</th>
                </tr>
                {props.data.map((d) => (
                    <tr>
                        <td>{d.Country_Region}</td> 
                        <td>{d.Province_State}</td>
                        {/* <td>{d.Lat}</td> */}
                        {/* <td>{d.Long_}</td> */}
                        <td>{d.Confirmed}</td>
                        <td>{d.Deaths}</td>
                        <td>{d.Recovered}</td>
                        <td>{d.Active}</td> 
                    </tr>
                ))

                }
            </table>
        </>
    )
}