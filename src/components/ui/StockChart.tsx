"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface TickerData {
  Date: Date;
  Open: number;
  Close: number;
  Low: number;
  High: number;
}

interface ChartProps {
  ticker: TickerData[];
}

const Chart: React.FC<ChartProps> = ({ ticker }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    //step-1
    const width = 928;
    const height = 600;
    const marginTop = 20;
    const marginRight = 30;
    const marginBottom = 30;
    const marginLeft = 40;

    //step-2
    d3.select(ref.current).selectAll("*").remove();

    //step-3
    const x = d3
      .scaleBand<Date>()
      .domain(
        d3.utcDay
          .range(
            ticker[0].Date,
            d3.utcDay.offset(ticker[ticker.length - 1].Date, 1)
          )
          .filter((d) => d.getUTCDay() !== 0 && d.getUTCDay() !== 6)
      )
      .range([marginLeft, width - marginRight])
      .padding(0.2);

    //step-4
    const y = d3
      .scaleLog()
      .domain([
        d3.min(ticker, (d) => d.Low) ?? 0,
        d3.max(ticker, (d) => d.High) ?? 1,
      ])
      .rangeRound([height - marginBottom, marginTop]);

    //step-5
    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("viewBox", [0, 0, width, height]);

    // step-6
    const interval = d3.utcMonday.every(width > 720 ? 1 : 2);
    svg
      .append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(
        d3
          .axisBottom(x)
          .tickValues(
            interval
              ? interval.range(ticker[0].Date, ticker[ticker.length - 1].Date)
              : []
          )
          .tickFormat(d3.utcFormat("%-m/%-d"))
      )
      .call((g) => g.select(".domain").remove());

    //step-7
    svg
      .append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(
        d3
          .axisLeft(y)
          .tickFormat(d3.format("$~f"))
          .tickValues(d3.scaleLinear().domain(y.domain()).ticks())
      )
      .call((g) =>
        g
          .selectAll(".tick line")
          .clone()
          .attr("stroke-opacity", 0.2)
          .attr("x2", width - marginLeft - marginRight)
      )
      .call((g) => g.select(".domain").remove());

    // step-8
    const g = svg
      .append("g")
      .attr("stroke-linecap", "round")
      .attr("stroke", "black")
      .selectAll("g")
      .data(ticker)
      .join("g")
      .attr("transform", (d) => `translate(${x(d.Date)},0)`);

    g.append("line")
      .attr("y1", (d) => y(d.Low))
      .attr("y2", (d) => y(d.High));

    g.append("line")
      .attr("y1", (d) => y(d.Open))
      .attr("y2", (d) => y(d.Close))
      .attr("stroke-width", x.bandwidth())
      .attr("stroke", (d) =>
        d.Open > d.Close
          ? d3.schemeSet1[0]
          : d.Close > d.Open
          ? d3.schemeSet1[2]
          : d3.schemeSet1[8]
      );

    // step-9
    const formatDate = d3.utcFormat("%B %-d, %Y");
    const formatValue = d3.format(".2f");
    const formatChange = (
      (f) => (y0: number, y1: number) =>
        f((y1 - y0) / y0)
    )(d3.format("+.2%"));

    //step-10
    g.append("title").text(
      (d) => `${formatDate(d.Date)}
  Open: ${formatValue(d.Open)}
  Close: ${formatValue(d.Close)} (${formatChange(d.Open, d.Close)})
  Low: ${formatValue(d.Low)}
  High: ${formatValue(d.High)}`
    );
  }, [ticker]);

  return <div ref={ref}></div>;
};

export default Chart;
