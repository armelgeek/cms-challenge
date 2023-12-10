import auth from './modules/auth';
import projects from './modules/projects';
import pages from './modules/pages';
import kitca from './modules/kitca';
import library from './modules/library';
const sdk = {
    loginHandle(email: any, password: any) {
        return auth.loginAuth(email, password);
    },
    registerHandle(username: any, email: any, password: any, confirmPassword: any) {
        return auth.registerUser(username, email, password, confirmPassword);
    },
    resetPasswordHandle(email: any) {
        return auth.resetPassword(email);
    },
    newPasswordHandle(email: any, code: any, newPassword: any) {
        return auth.newPassword(email, code, newPassword);
    },
    codeVerificationHandle(email: any, code: any) {
        return auth.codeVerification(email, code);
    },
    verifyAccountHandle(code: any, password: any) {
        return auth.verifyAccount(code, password);
    },
    regenerateVerifyCodeHandle(email: any) {
        return auth.regenerateVerifyCode(email);
    },
    refreshTokenHandle(token: any) {
        return auth.refreshTokenAuth(token);
    },
    meInfoHandle(formData: any, token: any) {
        return auth.meInfo(formData, token);
    },
    updateAvatar(infos: any, accessToken: any) {
        //   return auth.updateAvatar(infos, accessToken);
    },
    getMeInfoHandle(token: any) {
        return auth.getMeInfo(token);
    },
    createProject(name: any, description: any) {
        return projects.create(name, description);
    },
    fetchProjects() {
        return projects.fetch();
    },
    getProject(id: any) {
        return projects.get(id);
    },
    createPage(page: any) {
        return pages.create(page);
    },
    updatePage(page: any, id: number) {
        return pages.update(page, id);
    },
    createUserLibrary(kitinfo: any) {
        return kitca.create(kitinfo);
    },
    addToUiKit(uikit: any) {
        return library.create(uikit);
    },
    updateUIkit(uikit:any){
        return library.update(uikit);
    },
    fetchUIKit(){
        return kitca.fetch();
    }
}
export default sdk;