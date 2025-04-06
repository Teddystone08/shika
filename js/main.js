import { generateForm, setVariable, allowOut, getGross, statutoryDed, tax, net, loanDeduct} from "./functions.js";


window.addEventListener("load", () => {

    generateForm()
    setVariable()
    allowOut()
    getGross()
    statutoryDed() 
    tax()
    net()
    loanDeduct()
      
})
