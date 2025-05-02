import BackgroundWrapper from "../components/BackgroundWrapper";
import OpeningButton from "../components/OpeningButton";
import "./Opening.css";
import Logo from "../assets/images/logo.webp";

function Opening() {
  return (
    <BackgroundWrapper>
      <img src={Logo} className="w-64 max-w-md h-auto pt-16 pb-8" alt="Logo" />
      <h1 className="sub-title">សូមគោរពអញ្ជើញ</h1>
      <h1 className="title pt-4 pb-4">សិរីមង្គលពិធីពិសាស្លាដក់កន្សែង</h1>
      <div className="pt-8 pb-10">
        <OpeningButton />
      </div>
      <p className="sub-title font-normal text-base pt-4">សូមមេត្តាចុចលើអេក្រង់ ដើម្បីបើកធៀបអេឡិចត្រូនិច</p>
    </BackgroundWrapper>
  );
}

export default Opening;
