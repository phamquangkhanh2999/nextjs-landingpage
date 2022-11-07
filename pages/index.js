import FooterComponent from '../components/FooterComponents/FooterComponent';
import HeaderComponents from '../components/HeaderComponents/HeaderComponents';
import IntroComponents from '../components/IntroComponents/IntroComponents';
import PartnerComponents from '../components/PartnerComponents/PartnerComponents';
import ProductComponents from '../components/ProductComponents/ProductComponents';
import ProjectComponents from '../components/ProjectComponents/ProjectComponents';
import ServicesComponents from '../components/ServicesComponents/ServicesComponents';
import TeamComponent from '../components/TeamComponents/TeamComponent';
import GlobalStyle from '../styles/GlobalStyle';

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <HeaderComponents />
      <IntroComponents />
      <ServicesComponents />
      <ProductComponents />
      <ProjectComponents />
      <TeamComponent />
      <PartnerComponents />
      <FooterComponent />
    </>
  );
}
