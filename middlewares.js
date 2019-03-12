import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "Wetube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true, // 가짜정보 로그인 사용자 정보를 테스트하기 위한
        id: 1
    };
    next();
};