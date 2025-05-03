import OpeningButton from "../components/OpeningButton";
import "./Opening.css"
import Logo from "../assets/images/logo.webp"
import BackgroundLayout from "../components/BackgroundLayout";

function Opening() {
    return (
        <BackgroundLayout>
            <div className="opening-page flex flex-col items-center">
                <img src={Logo} className="w-64 max-w-md h-auto mx-auto pt-16 pb-8"/>
                <h1 className="sub-title">សូមគោរពអញ្ជើញ</h1>
                <h1 className="title pt-4 pb-4">សិរីមង្គលពិធីពិសាស្លាដក់កន្សែង</h1>
                <div className="pt-8 pb-10">
                    <OpeningButton/>
                </div>
                <p className="sub-title text-center font-normal text-base pt-4">សូមមេត្តាចុចលើអេក្រង់ ដើម្បីបើកធៀបអេឡិចត្រូនិច</p>
            </div>
        </BackgroundLayout>
    )
}

export default Opening;