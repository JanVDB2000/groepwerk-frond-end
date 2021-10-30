/*
+-------------------------------------------------------+
|                                                       |
|      +--->                  |                         |
|      |   Groepswerk:        |                         |
|      |                      |                         |
|      |   Stefaan Beernaert  |                         |
| |    |                      |                         |
| |    |   Jan Van Den Bogaert|                         |
| +----+----------------+     |                         |
| |    +----------------v-----+------->   Parallels     |
| |                           |                         |
| |                           |                         |
| +------------> 2021  <------+                         |
|                                                       |
|                                                       |
+-------------------------------------------------------+
 */
const gaugeElement1 = document.querySelector(".gauge1");
const gaugeElement2 = document.querySelector(".gauge2");
const gaugeElement3 = document.querySelector(".gauge3");
const gaugeElement4 = document.querySelector(".gauge4");
const gaugeElement5 = document.querySelector(".gauge5");

function setGaugeValue(gauge, value) {
    if (value < 0 || value > 1) {
        return;
    }
    gauge.querySelector(".gauge__fill").style.transform = `rotate(${value / 2}turn)`;
    gauge.querySelector(".gauge__cover").textContent = `${Math.round(value * 100)}%`;
}

setGaugeValue(gaugeElement1, 0.35);
setGaugeValue(gaugeElement2, 0.85);
setGaugeValue(gaugeElement3, 0.96);
setGaugeValue(gaugeElement4, 0.25);
setGaugeValue(gaugeElement5, 0.50);

