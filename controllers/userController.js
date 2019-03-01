//globalRouter
export const join = (req, res) => res.render("Join", {pageTitle: "join" });
export const login = (req, res) => res.render("Login", {pageTitle: "login" });
export const logout = (req, res) => res.render("Logout", {pageTitle: "logout" });

//userRouter
export const userDetail = (req, res) => res.render("User Detail", {pageTitle: "userDetail" });
export const editProfile = (req, res) => res.render("Edit Profile", {pageTitle: "editProfile" });
export const changePassword = (req, res) => res.render("Change Password", {pageTitle: "changePassword" });
