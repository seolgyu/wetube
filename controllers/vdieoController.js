import {videos} from "../db";
import routes from "../routes";

//globalRouter
export const home = (req, res) => {
    res.render("home", {pageTitle: "Home", videos });
};

export const search = (req, res) => {
    const {
        query: {term: searchingBy}
    } = req; //const searchingBy = req.query.term 같은 code 이지만 사용 된 code는 ES6
    res.render("Search", {pageTitle: "Serch", searchingBy, videos } );
}//searchingBy : searchingBy


//videolRouter
export const getUpload = (req, res) => 
    res.render("Upload", {pageTitle: "Upload" } );

export const postUpload = (req, res) => {
    const {
        body: {file, title, description}
    } = req;
    // 할일 : 비디오 업로드 및 저장
    res.redirect(routes.videoDetail(756521))
};
    

export const videoDetail = (req, res) => res.render("VideoDetail", {pageTitle: "Video Detail" } );

export const editVideo = (req, res) => res.render("EditVideo", {pageTitle: "Edit Video" } );

export const deleteVideo = (req, res) => res.render("DeleteVideo", {pageTitle: "Delete Video" } );
