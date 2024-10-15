 const expenses = {
    "2023-01": {
        "01": {
            "food": [ 22.11, 43, 11.72, 2.2, 36.29, 2.5, 19 ],
            "fuel": [ 210.22 ]
        },
        "09": {
            "food": [ 11.9 ],
            "fuel": [ 190.22 ]
        }
    },
    "2023-03": {
        "07": {
            "food": [ 20, 11.9, 30.20, 11.9 ]
        },
        "04": {
            "food": [ 10.20, 11.50, 2.5 ],
            "fuel": []
        }
    },
    "2023-04": {}
};

 function solution(expenses) {
     result = null;

     let filterExpenses = [];

     Object.keys(expenses).forEach(yearMonth=> {
         Object.keys(expenses[yearMonth]).forEach(day => {

             const date = `${yearMonth}-${day}`;

             if (isSameOrBeforeFirstSundayOfMonth(date) ){
                 const prices= Object.values(expenses[yearMonth][day]).flat();
                 console.log("prices " + prices);
                 filterExpenses.push(...prices);
             }
         })
     })

     result = median(filterExpenses);
     return result;
 }

 function isSameOrBeforeFirstSundayOfMonth (dateString) {
     const date = new Date(dateString);
     const weekDay = date.getDay();
     const day = date.getDate();
     const firstSundayOfMonth = getFirstSundayOfMonth(date);
     return day <= 7 && date <= firstSundayOfMonth;
 }

 function getFirstSundayOfMonth (dateString) {
     let targetDate = new Date(dateString);
     let targetMonth = targetDate.getMonth();
     let targetYear = targetDate.getFullYear();
     let firstDateInMonth = new Date(targetYear, targetMonth, 1);
     let firstWeekdayInMonth = firstDateInMonth.getDay();
     let firstSundayDate = 0 + ((8 - firstWeekdayInMonth) % 7);
     return new Date(targetYear, targetMonth, firstSundayDate, 23, 59, 59);

 }

 function median(values) {

     if (values.length === 0) {
         throw new Error('Input array is empty');
     }

     // Sorting values, preventing original array
     // from being mutated.
     values = [...values].sort((a, b) => a - b);

     const half = Math.floor(values.length / 2);

     return (values.length % 2
             ? values[half]
             : (values[half - 1] + values[half]) / 2
     );
 }

 console.log(solution(expenses));