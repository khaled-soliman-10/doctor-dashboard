let report = document.querySelector(".report-send")
let reportClose = document.querySelector(".report-send form i")
let reportSend = document.querySelector(".report-content header .send-report button")

reportSend.addEventListener("click",()=>{
    report.style.display = "flex"
})

reportClose.addEventListener("click",()=>{
    report.style.display = "none"
})