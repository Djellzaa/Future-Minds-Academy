import Nav from "../components/Nav";
import HeroSection from "../components/HeroSction";

export default function Home() {

    return (
        <div>
            <Nav />
            <HeroSection 
                title='The effective solutions for your business'
                subtitle = 'We are a team who creates marketing strategies for B2B and B2C companies'
            />
        </div >
    );
}
