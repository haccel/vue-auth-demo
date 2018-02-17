


export default {
    user:{
        signed : false,
        name: ''
    },
    // returns error or null
    login( email , password  ){
        console.log( 'login %s:%s' , email , password )
        this.user.name = 'hacc';
        this.user.signed = true;
        return null;
    },
    signup( email , password ){
        console.log( 'signup %s' , email )
        return this.login(email,password);
    },
    logout(  ){
        console.log('sign out');
        this.user.signed = false;
        return null;
    }


}