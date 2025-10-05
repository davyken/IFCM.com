import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBelief, setSelectedBelief] = useState(null);
  const [showFullAbout, setShowFullAbout] = useState(false);
  const [showAllBeliefs, setShowAllBeliefs] = useState(false);

  const beliefs = [
    {
      title: "Love one another:",
      content: '(Matthew 5:43-44) Jesus said the only way the world would know you are my disciples is when you obey my commandment which is, loving one another (John 13:34-35). The greatest form of Spirituality is manifested through LOVE. (1John 2:9, 12, Rom 13:8, 1John 4:7-8, 16, 20-21)'
    },
    {
      title: "The Holy Bible:",
      content: 'At Increasing Faith of Christ Ministry, We believe the word of God is our gospel truth and all we need for our dying world because it is God\'s power unto salvation. (Romans 1:16, Matthew 4; 4, Acts 6:4, Matt 8:8)'
    },
    {
      title: "The Use Of The Name Of Jesus",
      content: 'At I.F.C.M, We make all requests and petitions in Jesus\' name (Phil 2:9-11, John 14; 13-14, 1John 3:22-23).'
    },
    {
      title: "The Godhead (Trinity):",
      content: 'This speaks of the union of God the Father, the Son and the Holy Ghost. (Col 2:9). They bear witness in heaven (united) (1John 5:7, Matt 28:19, Genesis 1:26-27, John 1:14, Acts 3: 4)'
    },
    {
      title: "Water Baptism:",
      content: 'The word baptism comes from a Greek word \'baptizo\' which means to: Immerse, Submerse or bury. The immersion i.e (deepening believers in water) shows their death, burial and resurrection with Christ Jesus. In order words, baptism is a sacrament commanded to us by Christ Jesus which signifies our death and resurrection with Him through our faith in the active power of God which raised Christ from death. (Col 2;13, Matt 29:19, Mark 16:13-16, Mark 1:9).'
    },
    {
      title: "Holy Ghost Baptism:",
      content: 'The baptism of the Holy Ghost is the empowerment by the Holy Spirit for a sign and for us to bear witness (Acts 1:4-5, 8, mark 1:8). The ability to speak in tongues follows (Acts 2:4, 1 Cor 14:2, 4, 14)'
    },
    {
      title: "Power and Authority:",
      content: 'We believe that all Authority is in the Jesus\' and He has given us this authority to provide solutions to people\'s problems in His name.'
    },
    {
      title: "The importance of the Cross:",
      content: 'How that Jesus died and rose, and his blood paid the price for our us salvation. We know that by his strips we were healed'
    },
    {
      title: "Repentance:",
      content: 'Repentance means turning from your evil ways, conversion of those who are in the world and also those who were once in faith and have backslided (Matt 4:16-17, Acts 2:38) Acts 3:19 says \'Repent and be converted\'. To be born again is to obey (Rom 10:9-10), to be born of God (John 1:13, 1Peter 1:23).'
    },
    {
      title: "Fasting And Prayers:",
      content: 'Christians are bound to fast and pray, which is the one of the sure means whereby we draw near to God (Matt 9:15). We receive from God through prayers (Mark 11:24, Luke 2:37, James 5:16, Matt 4:2, Matt 17: 21).'
    },
    {
      title: "Miracles And Healings, (Gifts From God, Laying Of Hands):",
      content: 'God works in diverse ways, the miracles we see are by the power of God. Imagine a lame walking, the blind seeing etc it is given by God (1 Cor 12:10, Acts 15:12, Gal 5:3). Healing is of God not man (1Corin 12:9) Jesus himself gave the pronouncement in Mark 16:18 \'They shall take up serpents and if they drink any deadly water, it shall not harm them, they shall lay hands on the sick and they shall recover\'. James 5:14-16, Mark 6:13, 1 Timothy 5:22, also talks of anointing with olive oil for healing.'
    },
    {
      title: "Discipleship:",
      content: 'The act of making Christianity to continue is to follow. There must be a master (Luke 14:26-27) Jesus is the unseen master but he puts a master in place who we can see (overseer of the ministry), (Mat 9:14). Apostle Paul was a master in 1Corin 4:15 and 1 Cor 11:1 he said \'follow me as I follow Christ\'.'
    },
    {
      title: "Submission To Church Authority.",
      content: 'The loyalty of every member should be paramount. There should never be any room for gang up (fractions to resist authority), (Heb 13:17, Mat 10:24), (see Essential Truth for Beginners in Christian Faith and read on Loyalty by W.T Milton).'
    },
    {
      title: "Forgiveness and Reconciliation",
      content: 'The constitution part of justification is forgiveness, which is to pardon or to be pardoned. God absorbed us of our sins, which is one of the conditions of becoming part of God\'s kingdom. The Lord\'s Prayer explains it in Matt 6:12, 15, you must forgive others so that God forgives you and if you do not forgive, God will not forgive you. See what Christ said in Matt 18:21-22.'
    },
    {
      title: "Holy Communion (The Lord's Supper).",
      content: 'Jesus and his disciples broke bread and ate, He poured wine and they drank, Jesus said, the bread is His body and the wine is His blood (1Cor 11:20, 10:16). It is a blessing from the Lord that we do in commemoration of Jesus (Matt 26:26-29, Mark 14:22-25, Luke 22:19-20). It is the only thing Christ said we should do in remembrance of Him.'
    },
    {
      title: "Holy Matrimony",
      content: 'Every man must be a husband to a wife (Gen 2:24-25, Titus 1:6). Divorce is not permitted except on the condition of adultery. (Matt 5:31-32). If you leave your spouse stay unmarried (Matt 19:9-12, 1Cor 7:10-11). No believer is allowed to marry and unbeliever (2Cor 7:16-17).'
    },
    {
      title: "Integrity",
      content: 'Integrity is our stand and watch word (Prov 20:7). It brings about a better world. If all families have integrity, their children will take after them and that will bring about a better community, neighborhood, home, town, state, and world.'
    }
  ];

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const openModal = (belief) => {
    setSelectedBelief(belief);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBelief(null);
  };
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('aboutProphetWTMilton')}</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed text-justify">
          <p>
            {t('prophetWTMiltonIntro')}
          </p>
          {!showFullAbout && (
            <div className="text-center">
              <button
                onClick={() => setShowFullAbout(true)}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-md"
              >
                {t('showMore')}
              </button>
            </div>
          )}
          {showFullAbout && (
            <>
              <p>
                {t('prophetWTMiltonBooks')}
              </p>
              <p>
                {t('prophetWTMiltonMinistry')}
              </p>
              <p>
                {t('prophetWTMiltonGifts')}
              </p>
              <p>
                {t('prophetWTMiltonSchools')}
              </p>
              <p>
                {t('prophetWTMiltonPhilanthropy')}
              </p>
              <h3 className="text-2xl text-justify font-bold mt-8 mb-4">{t('aboutIFC')}</h3>
              <p>
                {t('experiencePowerOfGod')}
                {t('ifcDescription')}
              </p>
              <p>
                {t('ifcFoundation')}
              </p>
              <button
                onClick={() => setShowFullAbout(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-md"
              >
                {t('showLess')}
              </button>
            </>
          )}
        </div>

        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('whatWeBelieveAndTeach')}</h2>
            <div className="w-24 h-1 bg-amber-700 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beliefs.slice(0, showAllBeliefs ? beliefs.length : 6).map((belief, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-amber-50 border border-amber-200 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
                onClick={() => openModal(belief)}
              >
                <h3 className="text-xl font-bold text-amber-900 mb-3 group-hover:text-amber-700 transition-colors">{belief.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-800 transition-colors">{truncateText(belief.content, 150)}</p>
                <div className="mt-4 text-amber-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">{t('readMore')}</div>
              </div>
            ))}
          </div>
          {!showAllBeliefs && beliefs.length > 6 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllBeliefs(true)}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-md"
              >
                {t('showMoreBeliefs')}
              </button>
            </div>
          )}
          {showAllBeliefs && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllBeliefs(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-md"
              >
                {t('showLess')}
              </button>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && selectedBelief && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-amber-200 transform scale-95 animate-scale-in">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-3xl font-bold text-amber-900">{selectedBelief.title}</h3>
                <button
                  onClick={closeModal}
                  className="bg-amber-100 hover:bg-amber-200 text-amber-700 rounded-full p-3 transition-all duration-200 hover:scale-110 shadow-md"
                >
                  <X size={24} />
                </button>
              </div>
              <p className="text-gray-800 leading-relaxed text-justify text-lg">{selectedBelief.content}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
