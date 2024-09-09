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

// Task 2: Determine Performance Rating
function determinePerformanceRating (averageSales) {
    if (averageSales > 10000)
        return "Excellent"
    if (averageSales >= 7000)
        return "Good"
    if (averageSales >= 4000)
        return "Satisfactory"
    if (averageSales < 4000)
        return "Needs Improvement"
}

// Task 3: Identify Top and Bottom Performers
function findTopAndBottomPerformers(salespeople) {
    if (salespeople.length === 0) 
        return { topPerformer: null, bottomPerformer: null }
  
    const topPerformer = salespeople.reduce((top, person) => {
      return person.sales > top.sales ? person : top
    }, salespeople[0])
  
    const bottomPerformer = salespeople.reduce((bottom, person) => {
      return person.sales < bottom.sales ? person : bottom
    }, salespeople[0])
  
    return { topPerformer, bottomPerformer }
  }
  
// Task 4: Generate a Performance Report

function generatePerformanceReport(salesData) {
    let performanceReport = []
    
    for (let i = 0; i < salesData.length; i++) {
      let averageSales = calculateAverageSales(salesData[i].sales) 
      let performanceRating = determinePerformanceRating(averageSales) 
      
      performanceReport.push({
        name: salesData[i].name
        averageSales: averageSales
        performanceRating: performanceRating
      })
    }
    
    let topAndBottomPerformers = findTopAndBottomPerformers(
      performanceReport.map(function(person) {
        return { name: person.name, sales: person.averageSales }
      })
    )
    
    return {
      performanceDetails: performanceReport
      topPerformer: topAndBottomPerformers.topPerformer.name
      bottomPerformer: topAndBottomPerformers.bottomPerformer.name
    }
  }
  

