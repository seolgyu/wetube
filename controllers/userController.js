import routes from "../routes";

//globalRouter
export const getjoin = (req, res) => {
    res.render("Join", {pageTitle: "join" })
};

export const postjoin = (req,res) => {
    const{
        body: { name, email, password, password2}
    } = req;
    if(password !== password2){
        res.status(400);
        res.render("Join", {pageTitle: "join" });
    } else {
        //To Do: 사용자 등록
        //To Do: 사용자 로그인
        res.redirect(routes.home);
    }
};

export const getLogin = (req, res) => 
    res.render("Login", {pageTitle: "login" });
export const postLogin = (req, res) => {
    res.redirect(routes.home);
};
export const logout = (req, res) => {
    // 할일 : 로그아웃 처리
    res.redirect(routes.home);
};

//userRouter
export const userDetail = (req, res) => res.render("UserDetail", {pageTitle: "userDetail" });
export const editProfile = (req, res) => res.render("editProfile", {pageTitle: "editProfile" });
export const changePassword = (req, res) => res.render("ChangePassword", {pageTitle: "changePassword" });
//시스템 미디어 융합 과제 Commit 네번쨰