//globalRouter
export const join = (req, res) => res.render("Join", {pageTitle: "join" });
export const login = (req, res) => res.render("Login", {pageTitle: "login" });
export const logout = (req, res) => res.render("Logout", {pageTitle: "logout" });

//userRouter
export const userDetail = (req, res) => res.render("UserDetail", {pageTitle: "userDetail" });
export const editProfile = (req, res) => res.render("editProfile", {pageTitle: "editProfile" });
export const changePassword = (req, res) => res.render("ChangePassword", {pageTitle: "changePassword" });
