import basePage from "./base.page";

class formAuthentication extends basePage {

    get formAuthenticationHeader(){         return $('//*[@id="content"]/div/h2') }

    get formAuthenticationSubheader(){        return $('//*[@id="content"]/div/h4') }

    get formAuthenticationUsername(){        return $('//*[@id="login"]/div[1]/div/label') }

    get formAuthenticationUsernameField(){        return $('//*[@id="login"]/div[1]/div/input') }

    get formAuthenticationPassword(){        return $('//*[@id="login"]/div[2]/div/label') }

    get formAuthenticationPasswordField(){        return $('//*[@id="login"]/div[2]/div/input') }

    get formAuthenticationLoginBtn(){
        return $('//*[@id="login"]/button') }

    get formAuthenticationFlash(){
        return $('//*[@id="flash"]') }


    

    goToFormAuthentication() {

        console.log('step: going to form authentication page')

        browser.url('/login')

        this.formAuthenticationHeader.waitForDisplayed()

        console.log('step: on the form authentication page')

    }


    
}

export default new formAuthentication()