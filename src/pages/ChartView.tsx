import React from "react";
import Chart from "react-apexcharts";

const TIME_RANGE_IN_MILLISECONDS = 30 * 1000;
const ADDING_DATA_INTERVAL_IN_MILLISECONDS = 1000;
const ADDING_DATA_RATIO = 0.9;

// https://zenn.dev/luvmini511/articles/6c6f69481c2d17
type DataPoint = {
    x: Date;
    y: number;
}

type ChartData = {
    name: string;
    data: DataPoint[];
}

export const ChartView = () => {
    const nameList = ["a", "b", "c"];
    const defaultDataList = nameList.map((name) => ({
        name: name,
        data: [],
    }));
    const [dataList, setDataList] = React.useState<ChartData[]>(defaultDataList);

    React.useEffect(() => {
        const addDataRandomly = (data: DataPoint[]) => {
            if (Math.random() < 1 - ADDING_DATA_RATIO) {
                return data;
            }
            return [
                ...data,
                {
                    x: new Date(),
                    y: data.length * Math.random(),
                },
            ];
        };
        const interval = setInterval(() => {
            setDataList((dataList) =>
                dataList.map((val) => ({
                    name: val.name,
                    data: addDataRandomly(val.data),
                }))
            );
        }, ADDING_DATA_INTERVAL_IN_MILLISECONDS);

        return () => clearInterval(interval);
    }, []);

    const options = {
        chart: {
            zoom: { enabled: false },
        },
        tooltip: {
            x: { format: "yyyy/MM/dd HH:mm:ss.f" },
        },
        xaxis: {
            type: "datetime" as "datetime",
            range: TIME_RANGE_IN_MILLISECONDS,
            title: { text: "Time" },
        },
        yaxis: {
            labels: {
                formatter: (val: number) => val.toFixed(0),
            },
            title: { text: "Value" },
        },
    };

    return (
        <div>
            <Chart type="line" options={options} series={dataList} />
        </div>
    );
};
