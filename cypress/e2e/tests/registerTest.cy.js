import { Register } from "../../pages/register"
let Reg = new Register()
import data from '../../fixtures/data.json'


describe('First Test', () => {

    it('firstName', () => {

        Reg.enterUserName(data.name)
    })

})