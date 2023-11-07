import { Register } from "../../pages/register"
let Reg = new Register()
import data from '../../fixtures/data.json'


describe('Login Test', () => {

    it('Login', () => {

        Reg.enterUserName(data.Firstname)
        Reg.enterLastName(data.Lastname)
        Reg.clickLogin()
        
    })
    

})