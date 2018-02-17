


export default {
    user:{
        signed : false,
        name: ''
    },
    login( email , password , ok , err  ){
        console.log( 'login %s:%s' , email , password )
        setTimeout( ()=>{
            this.user.name = 'hacc';
            this.user.signed = true;
            ok();
        }
             , 1000 );
    },
    signup( email , password , ok , err ){
        console.log( 'signup %s' , email )
        this.login(email,password,ok,err);
    },
    logout( ok , err ){
        console.log('sign out');
        setTimeout( ()=>{
            this.user.signed = false;
            ok();
        } 
            , 1000 );
    }


}