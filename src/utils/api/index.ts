import auth from './user';
const apiUser = {
    loginHandle(email:string, password:string) {
            return auth.loginAuth(email, password);
        },
    registerHandle(username:string, email:string, password:string, confirmPassword:string){
        return auth.registerUser(username, email, password, confirmPassword);
    },
    refreshTokenHandle(token:string) {
        return auth.refreshTokenAuth(token);
    },
    meInfoHandle(formData:any, token:string) {
        return auth.meInfo(formData, token);
    },
    getMeInfoHandle(token:string) {
        return auth.getMeInfo(token);
    }
}
export default apiUser;