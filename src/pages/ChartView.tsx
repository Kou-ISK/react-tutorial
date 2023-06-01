import React from "react";
import Chart from "react-apexcharts";

const TIME_RANGE_IN_MILLISECONDS = 30 * 1000;
const ADDING_DATA_INTERVAL_IN_MILLISECONDS = 1000;
const ADDING_DATA_RATIO = 0.8;

export const ChartView = () => {
    const nameList = ["a", "b", "c"];
    const defaultDataList = nameList.map(name => ({
        name: name,
        data: []
    }));
    const [dataList, setDataList] = React.useState(defaultDataList);

    React.useEffect(() => {
        const addDataRandomly = (data: any) => {
            if (Math.random() < 1 - ADDING_DATA_RATIO) {
                return data;
            }
            return [
                ...data,
                {
                    x: new Date(),
                    y: data.length * Math.random()
                }
            ];
        };
        const interval = setInterval(() => {
            setDataList(
                dataList.map(val => {
                    return {
                        name: val.name,
                        data: addDataRandomly(val.data)
                    };
                })
            );
        }, ADDING_DATA_INTERVAL_IN_MILLISECONDS);

        return () => clearInterval(interval);
    });

    return (
        <div>
            <Charts
                dataList={dataList}
                range={TIME_RANGE_IN_MILLISECONDS}
            />
        </div>
    );
};


const Charts = (props: any) => {
    const options = {
        chart: {
            zoom: { enabled: false },
            animations: {
                easing: "linear",
                dynamicAnimation: {
                    speed: 500
                }
            }
        },
        tooltip: {
            x: { format: "yyyy/MM/dd HH:mm:ss.f" }
        },
        xaxis: {
            type: "datetime",
            range: props.range
        },
        yaxis: {
            labels: {
                formatter: (val: number) => val.toFixed(0)
            },
            title: { text: "Value" }
        }
    };
    return (<>
        <Chart type="line" options={options} series={props.dataList} />
    </>)

}

