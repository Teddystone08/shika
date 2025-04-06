
// storage from input fields
export const salary_stored = localStorage.setItem("salary", JSON.stringify(Salary))
export const afternoon_stored = localStorage.setItem("afternoon", JSON.stringify(result))
export const night_stored = localStorage.setItem("night", JSON.stringify(result))
export const saturday_stored = localStorage.setItem("saturday", JSON.stringify(result))
export const weekend_stored = localStorage.setItem("weekday", JSON.stringify(result))
export const associate_stored = localStorage.setItem("association_in", JSON.stringify(result))
export const option_stored = localStorage.setItem("optBtn", JSON.stringify(oP))
export const request_stored = localStorage.setItem("request", JSON.stringify(loan_req))
export const duration_stored = localStorage.setItem("period", JSON.stringify(dur))



// storage for summary information

export const salary_Out = JSON.parse(this.localStorage.getItem("salary"))
export const afternoon_out = JSON.parse(this.localStorage.getItem("afternoon"))
export const nightOut = JSON.parse(this.localStorage.getItem("night"))
export const holidayOut = JSON.parse(this.localStorage.getItem("holiday"))
export const saturdayOut = JSON.parse(this.localStorage.getItem("saturday"))
export const sundayOut = JSON.parse(this.localStorage.getItem("sunday"))
export const weekdayOut = JSON.parse(this.localStorage.getItem("weekday"))
export const associationOut = JSON.parse(this.localStorage.getItem("association_in"))
