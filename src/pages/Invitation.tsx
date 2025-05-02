import "./Invitation.css";
import MusicPlayer from "../components/MusicPlayer";
import Logo from "../assets/images/logo.webp";
import { ChevronDown } from "lucide-react";
import BackgroundWrapper from "../components/BackgroundWrapper";

function Invitation() {
    return (
        <>
            <MusicPlayer />

            <BackgroundWrapper>
                {/* Opening */}
                <div className="bgr-name pt-20 pb-8">
                    <h1 className="title text-center text-3xl">
                        សិរីមង្គល<br />ពិធីពិសាស្លាដក់កន្សែង
                    </h1>
                    <img src={Logo} className="w-64 max-w-md h-auto mx-auto pt-8 pb-8" />
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
                    <div className="flex flex-col items-center justify-center pt-16 animate-float">
                        <ChevronDown size={56} className="text-sand" />
                        <p className="sub-title text-base">ទាញចុះក្រោម</p>
                    </div>
                </div>

                {/* Album */}
                <div>
                    <h1 className="title text-center">កម្រងរូបភាពអនុស្សាវរីយ៍</h1>
                </div>

                {/* Family */}
                <div className="fam-info pt-8 pb-8">
                    <h1 className="title text-center">សិរីមង្គលពិធីពិសាស្លាដក់កន្សែង</h1>
                    <div className="parents flex justify-around items-center gap-4 flex-wrap pt-8 pb-8">
                        <div className="gr-parents text-left">
                            <h1 className="title text-lg">លោក នៅ ធី</h1>
                            <h1 className="title text-lg">លោកស្រី គ្រី សុខហេង</h1>
                        </div>
                        <div className="br-parents text-right">
                            <h1 className="title text-lg">លោក នៅ ធី</h1>
                            <h1 className="title text-lg">លោកស្រី គ្រី សុខហេង</h1>
                        </div>
                    </div>
                    <p className="sub-title text-center font-normal text-base">
                        សូមគោរពអញ្ជើញ ឯកឧត្តម លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា ចូលរួមជាភ្ញៀវអធិបតីភាព និងជាភ្ញៀវកិត្តិយស
                        ដើម្បីប្រសិទ្ធពរជ័យសិរិសួស្តីជ័យមង្គលក្នុងពិធីពិសាស្លាដក់កន្សែងកូនប្រុសកូនស្រីរបស់ខ្ញុំ
                    </p>
                </div>

                {/* Second Logo Section */}
                <div className="info flex justify-around items-center flex-wrap pb-8 gap-6">
                    <div className="gr-name">
                        <p className="sub-title mb-2">កូនប្រុសនាម</p>
                        <h1 className="title text-center">នៅ<br />គីមសេង</h1>
                    </div>
                    <img src={Logo} className="w-32 h-auto" alt="" />
                    <div className="br-name">
                        <p className="sub-title mb-2">កូនស្រីនាម</p>
                        <h1 className="title text-center">រិន<br />សានាថ</h1>
                    </div>
                </div>

                <div className="datetime text-center">
                    <p className="sub-title text-base">ដែលប្រព្រឹត្តទៅ ចាប់ពីម៉ោង ៧ព្រឹក</p>
                    <p className="title">​ថ្ងៃទី៣១​ ខែឧសភា ឆ្នាំ២០២៥</p>
                </div>

                {/* Agenda */}
                <div className="pt-8 pb-8">
                    <h1 className="title text-center">ដំណើរការកម្មវិធី</h1>
                </div>
            </BackgroundWrapper>
        </>
    );
}

export default Invitation;
