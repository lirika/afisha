
import AboutPage from '../Components/AboutPage';

export default async function renderAboutPage() {
  const About = new AboutPage();
  await About.renderAbout();
}