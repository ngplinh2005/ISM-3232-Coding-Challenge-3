// Task 1: Calculate Average Sales
function calculateAverageSales(sales) {
    if (sales.length === 0)
        return 0
let totalSales = 0
for (let i = 0, i < sales.length, i++) {
    totalSales += sales[i]
}
  
return totalSales / sales.length
}