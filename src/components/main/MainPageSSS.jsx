import MainPage from "./MainPage";
import AboutUsMain from "../about/AboutUsMain";
import ServicesMain from "../services/ServicesMain";
import AdvantagesMain from "../advantages/AdvantagesMain";
import Contacts from "../contacts/Contacts";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAboutCompany} from "../../store/apiSlice";

function MainPageSSS() {
    // const dispatch = useDispatch();
    // const {aboutCompany} = useSelector(state => state.api)
    // useEffect(() => {
    //     dispatch(getAboutCompany());
    // }, []);
    // useEffect(() => {
    //     console.log(aboutCompany)
    // }, [aboutCompany]);
    return(
        <>
            <MainPage/>
            <AboutUsMain/>
            <ServicesMain/>
            <AdvantagesMain/>
            <Contacts/>
        </>
    )
}
export default MainPageSSS;