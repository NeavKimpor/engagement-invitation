import { Link } from "react-router-dom";
import "./Invitation.css"

function Invitation() {
    return (
        <div>
            <div className="bgr-name pt-8 pb-8">
                <h1 className="title text-center pb-8">សិរីមង្គលពិធីពិសាស្លាដក់កន្សែង</h1>
                <img src="" alt="" />
                <div className="info flex justify-center items-center gap-12 flex-wrap pb-4">
                    <div className="gr-name text-center">
                        <p className="sub-title">កូនប្រុសនាម</p>
                        <h1 className="title">នៅ គីមសេង</h1>
                    </div>
                    
                    <div className="br-name text-center">
                        <p className="sub-title">កូនស្រីនាម</p>
                        <h1 className="title">រិន សានាថ</h1>
                    </div>
                </div>
                <div className="datetime text-center">
                    <p className="sub-title text-base">ដែលប្រព្រឹត្តទៅនៅ</p>
                    <p className="title">​ថ្ងៃទី៣១​ ខែឧសភា ឆ្នាំ២០២៥</p>
                </div>
            </div>
            <div className="fam-info pt-8 pb-8">
                <h1 className="title text-center">សិរីមង្គលពិធីពិសាស្លាដក់កន្សែង</h1>
                <div className="parents flex justify-between items-centers gap-4 flex-wrap pt-8 pb-8">
                    <div className="gr-parents text-left">
                        <h1 className="title text-lg">លោក នៅ ធី</h1>
                        <h1 className="title text-lg">លោកស្រី គ្រី សុខហេង</h1>
                    </div>
                    <div className="br-parents text-right">
                        <h1 className="title text-lg">លោក នៅ ធី</h1>
                        <h1 className="title text-lg">លោកស្រី គ្រី សុខហេង</h1>
                    </div>
                </div>
                <p className="sub-title text-center font-normal text-base">សូមគោរពអញ្ជើញ ឯកឧត្តម លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា ចូលរួមជាភ្ញៀវអធិបតីភាព និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធពរជ័យសិរិសួស្តីជ័យមង្គលក្នុងពិធីពិសាស្លាដក់កន្សែងកូនប្រុសកូនស្រីរបស់ខ្ញុំ</p>
            </div>
            <div className="info flex justify-between items-center gap-12 flex-wrap pb-4">
                <div className="gr-name">
                    <p className="sub-title">កូនប្រុសនាម</p>
                    <h1 className="title text-center">នៅ<br></br>គីមសេង</h1>
                </div>
                <img src="" alt="" />
                <div className="br-name">
                    <p className="sub-title">កូនស្រីនាម</p>
                    <h1 className="title text-center">រិន<br></br>សានាថ</h1>
                </div>
            </div>
        </div>
    )
}

export default Invitation;