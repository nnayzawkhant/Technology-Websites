import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import FitnessSwiper from "../components/FitnessSwiper";
import HealthSwiper from "../components/HeathSwiper";
import NatureSwiper from "../components/NatureSwiper";
import FirstLatest from "../components/FirstLatest";
import AppsIcon from "@mui/icons-material/Apps";
import SecondLatest from "../components/SecondLatest";

export const featureSwiperDatas = [
    {
        name: 'Nature',
        element: <NatureSwiper/>
    },
    {
        name: 'Health',
        element: <HealthSwiper/>
    },
    {
        name: 'Fitness',
        element: <FitnessSwiper/>
    }
]

export const featureLatesDatas = [
    {
        icon: <FormatListBulletedOutlinedIcon fontSize="small"/>,
        element: <FirstLatest/>
    },
    {
        icon: <AppsIcon fontSize="small"/>,
        element: <SecondLatest/>
    }
]