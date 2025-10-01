import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // 'en' or 'fr'

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  const translations = {
    en: {
      // Navbar
      home: 'Home',
      about: 'About',
      services: 'Services',
      ministries: 'Ministries',
      events: 'Events',
      forms: 'Forms',
      give: 'Give',
      contact: 'Contact',
      increasingFaith: 'Increasing Faith',

      // Footer
      quickLinks: 'Quick Links',
      getInvolved: 'Get Involved',
      connect: 'Connect',
      totalNsimeyong: 'Total Nsimeyong, Yaoundé',
      phone: '+237 672 796 404',
      email: 'info@ifcministry.org',
      copyright: '© 2025 Increasing Faith Of Christ Ministries International. All rights reserved.',
      motto: 'Motto: Restoration, Manifestation, Teaching Spiritual Realities',
      solo: 'Solo: Increasing Faith of Christ Ministry, All: We are an Increase.',
      raisingGeneration: 'Raising a generation passionate about the Kingdom of God.',

      // HomePage sections
      ourLeadership: 'Our Leadership',
      seniorPastorFounder: 'Senior Pastor & Founder',
      readMore: 'Read More',
      associatePastor: 'Associate Pastor',
      headOfEvangelism: 'Head of Evangelism',
      womenFellowshipLeader: "Women's Fellowship Leader",
      youthMinistryCoordinator: 'Youth Ministry Coordinator',

      // Hero
      welcomeToIFCM: 'Welcome to Increasing Faith Of Christ Ministries',
      bibleBelievingChurch: 'A Bible-believing church raising a generation passionate about the Kingdom of God. Join us for Spirit-filled worship, practical teaching, and transformative community.',
      joinUsSunday: 'Join Us Sunday',
      learnMore: 'Learn More',
      founded: 'Founded',
      members: 'Members',

      // About
      aboutUs: 'About Us',
      ourStory: 'Our Story',
      ourStoryText: 'Increasing Faith of Christ Ministries (IFCM) was founded in 2019 with a vision to raise a generation passionate about the Kingdom of God. Under the leadership of Prophet W.T. Milton, we have grown from a small gathering to a vibrant community of believers committed to discipleship, evangelism, and spiritual growth.',
      ourVision: 'Our Vision',
      ourVisionText: 'To be a beacon of hope and transformation in our community, equipping believers with the knowledge of God\'s Word and empowering them to live out their faith boldly.',
      ourMission: 'Our Mission',
      ourMissionText: 'To preach the Gospel, make disciples, and build a community where every member can grow spiritually, serve effectively, and impact the world for Christ.',

      // Services
      ourServices: 'Our Services',
      sundayWorship: 'Sunday Worship',
      sundayWorshipText: 'Join us every Sunday for powerful worship services filled with praise, prayer, and the preaching of God\'s Word.',
      bibleStudy: 'Bible Study',
      bibleStudyText: 'Deepen your understanding of Scripture through our weekly Bible study sessions and small group discussions.',
      prayerMeetings: 'Prayer Meetings',
      prayerMeetingsText: 'Experience the power of corporate prayer as we intercede for our community, nation, and the world.',
      youthMinistry: 'Youth Ministry',
      youthMinistryText: 'Empowering the next generation with faith, purpose, and leadership skills for Kingdom impact.',

      // About
      aboutProphetWTMilton: 'About Prophet WT Milton',
      showMore: 'Show More',
      showLess: 'Show Less',
      whatWeBelieveAndTeach: 'WHAT WE BELIEVE AND TEACH',
      showMoreBeliefs: 'Show More Beliefs',

      // Add more as needed
    },
     fr: {
       // Navbar
       home: 'Accueil',
       about: 'À propos',
       services: 'Services',
       ministries: 'Ministères',
       events: 'Événements',
       forms: 'Formulaires',
       give: 'Donner',
       contact: 'Contact',
       increasingFaith: 'Augmenter la Foi',

       // Footer
       quickLinks: 'Liens Rapides',
       getInvolved: 'S\'impliquer',
       connect: 'Se Connecter',
       totalNsimeyong: 'Total Nsimeyong, Yaoundé',
       phone: '+237 672 796 404',
       email: 'info@ifcministry.org',
       copyright: '© 2025 Ministère International de l\'Augmentation de la Foi du Christ. Tous droits réservés.',
       motto: 'Devise: Restauration, Manifestation, Enseignement des Réalités Spirituelles',
       solo: 'Solo: Ministère de l\'Augmentation de la Foi du Christ, Tous: Nous sommes une Augmentation.',
       raisingGeneration: 'Élever une génération passionnée par le Royaume de Dieu.',

       // HomePage sections
       ourLeadership: 'Notre Leadership',
       seniorPastorFounder: 'Pasteur Principal & Fondateur',
       readMore: 'En Savoir Plus',
       associatePastor: 'Pasteur Associé',
       headOfEvangelism: 'Chef de l\'Évangélisation',
       womenFellowshipLeader: 'Leader de la Fraternité des Femmes',
       youthMinistryCoordinator: 'Coordinateur du Ministère des Jeunes',

       // Hero
       welcomeToIFCM: 'Bienvenue au Ministère de l\'Augmentation de la Foi du Christ',
       bibleBelievingChurch: 'Une église croyant à la Bible, élevant une génération passionnée par le Royaume de Dieu. Rejoignez-nous pour un culte rempli de l\'Esprit, un enseignement pratique et une communauté transformative.',
       joinUsSunday: 'Rejoignez-nous Dimanche',
       learnMore: 'En Savoir Plus',
       founded: 'Fondé',
       members: 'Membres',

       // About
       aboutUs: 'À propos de nous',
       ourStory: 'Notre Histoire',
       ourStoryText: 'L\'Augmentation de la Foi du Christ (IFCM) a été fondée en 2019 avec la vision d\'élever une génération passionnée par le Royaume de Dieu. Sous la direction du Prophète W.T. Milton, nous sommes passés d\'un petit groupe à une communauté dynamique de croyants engagés dans le discipulat, l\'évangélisation et la croissance spirituelle.',
       ourVision: 'Notre Vision',
       ourVisionText: 'Être un phare d\'espoir et de transformation dans notre communauté, équipant les croyants avec la connaissance de la Parole de Dieu et les encourageant à vivre leur foi avec audace.',
       ourMission: 'Notre Mission',
       ourMissionText: 'Prêcher l\'Évangile, faire des disciples et bâtir une communauté où chaque membre peut grandir spirituellement, servir efficacement et impacter le monde pour Christ.',

      // Services
      ourServices: 'Nos Services',
      sundayWorship: 'Culte du Dimanche',
      sundayWorshipText: 'Rejoignez-nous chaque dimanche pour des cultes puissants remplis de louange, de prière et de la prédication de la Parole de Dieu.',
      bibleStudy: 'Étude Biblique',
      bibleStudyText: 'Approfondissez votre compréhension des Écritures grâce à nos sessions hebdomadaires d\'étude biblique et de discussions en petits groupes.',
      prayerMeetings: 'Réunions de Prière',
      prayerMeetingsText: 'Vivez la puissance de la prière collective alors que nous intercédons pour notre communauté, notre nation et le monde.',
      youthMinistry: 'Ministère des Jeunes',
      youthMinistryText: 'Donner du pouvoir à la prochaine génération avec la foi, le but et les compétences de leadership pour un impact dans le Royaume.',

      // About
      aboutProphetWTMilton: 'À propos du Prophète WT Milton',
      showMore: 'Voir Plus',
      showLess: 'Voir Moins',
      whatWeBelieveAndTeach: 'CE QUE NOUS CROYONS ET ENSEIGNONS',
      showMoreBeliefs: 'Voir Plus de Croyances',

      // Add more as needed
    }
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
