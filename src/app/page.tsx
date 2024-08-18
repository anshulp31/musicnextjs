import Featuredcourses from "@/components/Featuredcourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
   <main className="">
     <HeroSection/>
     <Featuredcourses/>
     <WhyChooseUs/>
     <MusicSchoolTestimonialCards/>
     <UpcomingWebinars/>
     <Instructors/>
   </main>
    
  );
}

