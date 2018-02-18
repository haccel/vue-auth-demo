
// endpoints
const API_URL = 'http://localhost:5000/'
const LOGIN_URL = API_URL + 'auth/login'
const SIGNUP_URL = API_URL + 'auth/signup'


export default {
    user:{
        signed : false,
        name: ''
    },
    login( context , email , password , ok_cbc , err_cbc  ){
        console.log( 'login %s:%s to %s' , email , password , LOGIN_URL )
		context.$http.post(LOGIN_URL , {
            email: email,
            password: password,
        }).then( data => {
                localStorage.setItem('id_token', data.id_token)
                this.user.name = 'hacc';
                this.user.signed = true;
                console.log(JSON.stringify(data));
                ok_cbc();
            }, err => {
                console.log(JSON.stringify(err));
			    err_cbc(err);
		})
    },
    signup( context , email , password , ok , err ){
        console.log( 'signup %s' , email )
        this.login(email,password,ok,err);
    },
    logout( context , ok , err ){
        console.log('sign out');
        setTimeout( ()=>{
            this.user.signed = false;
            ok();
        } 
            , 1000 );
    }


}