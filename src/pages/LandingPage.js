import { motion } from 'framer-motion';
const imageVariants = {
  initial: {
    y: 0,
    x: 0,
  },
  animate: {
    y: [-10, 10, -10],
    x: 0, 
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};
const LandingPage = () => {
  return (
    <div className=" w-full relative bg-gray-500 h-[4583px] overflow-hidden text-left text-lg text-white font-poppins mx-auto">
      <div className="absolute top-[2231.4px] left-[70px] [filter:blur(900px)] rounded-181xl [background:linear-gradient(90deg,_#f4c4f3,_#fc67fa)] w-[345px] h-[514px] [transform:_rotate(156.6deg)] [transform-origin:0_0]" />
      <div className="absolute top-[1380.3px] left-[-127.2px] [filter:blur(650px)] rounded-181xl [background:linear-gradient(90deg,_#1a2980,_#26d0ce)] w-[482.6px] h-[615.1px] [transform:_rotate(109.2deg)] [transform-origin:0_0]" />
      <div className="absolute top-[1892.4px] left-[43.9px] [filter:blur(750px)] rounded-[50%] bg-gray-900 w-[405px] h-[471px] [transform:_rotate(176.6deg)] [transform-origin:0_0]" />
      <div className="absolute top-[3282px] left-[2299px] [filter:blur(900px)] rounded-181xl [background:linear-gradient(90deg,_#f4c4f3,_#fc67fa)] w-[345px] h-[514px] [transform:_rotate(94.8deg)] [transform-origin:0_0]" />
      <div className="absolute top-[2929px] left-[1584.8px] [filter:blur(650px)] rounded-181xl [background:linear-gradient(90deg,_#1a2980,_#26d0ce)] w-[436.5px] h-[544.1px] [transform:_rotate(47.5deg)] [transform-origin:0_0]" />
      <div className="absolute top-[3256.7px] left-[1987.9px] [filter:blur(750px)] rounded-[50%] w-[405px] h-[471px] [transform:_rotate(114.8deg)] [transform-origin:0_0]" />
      <img
        className="absolute top-[73px] left-[797px] w-[578px] h-[571px]"
        alt=""
        src="/vector-16.svg"
      />
      <div className="absolute top-[2891px] left-[135px] w-[1170px] h-[639px]">
  {/* Background gradient */}
  <div
    className="absolute top-[0px] left-[0px] rounded-xl"
    style={{
      width: '100%',
      height: '100%',
      backgroundImage: 'linear-gradient(94.3deg, rgba(26, 33, 64, 1) 10.9%, rgba(81, 84, 115, 1) 87.1%)',
    }}
  />

  {/* Overlay for background */}
  <div className="absolute top-[-72px] left-[-135px] bg-gray-1000 w-[1440px] h-[783px] hidden" />

  {/* Content with margin */}
  <div className="absolute top-[10px] left-[20px] text-29xl leading-[170%] font-semibold inline-block w-[470px] text-white p-4">
    What people are saying about us
  </div>
        <div className="absolute top-[244px] left-[400px] w-[370px] h-[395px]" />
        <div className="absolute top-[244px] left-[800px] w-[370px] h-[395px]" />
        <div className="absolute top-[555px] left-[104px] text-base opacity-[0.5]">{`Founder & Leader`}</div>
        <div className="absolute top-[555px] left-[504px] text-base opacity-[0.5]">{`Founder & Leader`}</div>
        <div className="absolute top-[555px] left-[904px] text-base opacity-[0.5]">{`Founder & Leader`}</div>
        <div className="absolute top-[524px] left-[104px] text-xl leading-[32px]">
          Herman Jensen
        </div>
        <div className="absolute top-[524px] left-[504px] text-xl leading-[32px]">
          Steve Mark
        </div>
        <div className="absolute top-[524px] left-[904px] text-xl leading-[32px]">
          Kenn Gallagher
        </div>
        <img
          className="absolute top-[529px] left-[40px] rounded-[50%] w-12 h-12 object-cover"
          alt=""
          src="/image@2x.png"
        />
        <img
          className="absolute top-[529px] left-[440px] rounded-[50%] w-12 h-12 object-cover"
          alt=""
          src="/image@2x.png"
        />
        <img
          className="absolute top-[529px] left-[840px] rounded-[50%] w-12 h-12 object-cover"
          alt=""
          src="/image@2x.png"
        />
        <img
          className="absolute top-[304px] left-[40.4px] w-[42.6px] h-[27.6px]"
          alt=""
          src="/1.svg"
        />
        <img
          className="absolute top-[304px] left-[440.4px] w-[42.6px] h-[27.6px]"
          alt=""
          src="/1.svg"
        />
        <img
          className="absolute top-[304px] left-[840.4px] w-[42.6px] h-[27.6px]"
          alt=""
          src="/1.svg"
        />
        <div className="absolute top-[372px] left-[40px] tracking-[0.02em] leading-[180%] inline-block w-[290px]">
          Money is only a tool. It will take you wherever you wish, but it will
          not replace you as the driver.
        </div>
        <div className="absolute top-[372px] left-[440px] tracking-[0.02em] leading-[180%] inline-block w-[290px]">
          Money makes your life easier. If you're lucky to have it, you're
          lucky.
        </div>
        <div className="absolute top-[372px] left-[840px] tracking-[0.02em] leading-[180%] inline-block w-[290px]">
          It is usually people in the money business, finance, and international
          trade that are really rich.
        </div>
        <div className="absolute top-[54px] left-[599px] tracking-[0.01em] leading-[180%] text-gray-1000 inline-block w-[450px]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </div>
      </div>
      
      <div className="absolute top-[1656px] left-[135px] w-[1170px] h-[455px] text-xs">
        <div className="absolute top-[153px] left-[0px] w-[335px] h-[280px]">
        <div
  className="absolute top-[0px] left-[0px] rounded-xl"
  style={{
    width: '335px',
    height: '280px',
    backgroundImage: 'linear-gradient(94.3deg, rgba(26, 33, 64, 1) 10.9%, rgba(81, 84, 115, 1) 87.1%)',
  }}
/>

          <div className="absolute top-[26px] left-[20px] w-[295px] h-[226px]">
            <div className="absolute top-[76px] left-[52px] leading-[22px] text-gray-1000">
              15 Days ago
            </div>
            <div className="absolute top-[140px] left-[52px] leading-[22px] text-gray-1000">
              4 Days ago
            </div>
            <div className="absolute top-[204px] left-[52px] leading-[22px] text-gray-1000">
              4 Days ago
            </div>
            <div className="absolute top-[65px] left-[233px] text-sm leading-[22px]">
              -$250,93
            </div>
            <div className="absolute top-[129px] left-[233px] text-sm leading-[22px]">
              -$250,93
            </div>
            <div className="absolute top-[193px] left-[233px] text-sm leading-[22px]">
              -$250,93
            </div>
            <div className="absolute top-[0px] left-[0px] text-[22px] leading-[22px] font-semibold">
              Last Transaction
            </div>
            <div className="absolute top-[54px] left-[52px] text-base leading-[22px] font-semibold">
              Dribbble Pro
            </div>
            <div className="absolute top-[118px] left-[52px] text-base leading-[22px] font-semibold">
              Netflix
            </div>
            <div className="absolute top-[182px] left-[52px] text-base leading-[22px] font-semibold">
              Manulife Cash
            </div>
            <div className="absolute top-[56px] left-[0px] rounded-[50%] bg-gray-100 w-10 h-10" />
            <div className="absolute top-[120px] left-[0px] rounded-[50%] bg-gray-100 w-10 h-10" />
            <div className="absolute top-[184px] left-[0px] rounded-[50%] bg-honeydew w-10 h-10" />
            <img
              className="absolute top-[69px] left-[214px] rounded-sm w-[15px] h-3.5 object-contain"
              alt=""
              src="/polygon-2.svg"
            />
            <img
              className="absolute top-[133px] left-[214px] rounded-sm w-[15px] h-3.5 object-contain"
              alt=""
              src="/polygon-2.svg"
            />
            <img
              className="absolute top-[197px] left-[214px] rounded-sm w-[15px] h-3.5"
              alt=""
              src="/polygon-4.svg"
            />
            <img
              className="absolute top-[56px] left-[0px] w-10 h-10 overflow-hidden"
              alt=""
              src="/dribbbleseeklogocom-1.svg"
            />
            <img
              className="absolute top-[127px] left-[0px] w-10 h-[26.8px] overflow-hidden"
              alt=""
              src="/netflixlogowine.svg"
            />
            <img
              className="absolute top-[194px] left-[11px] w-[18px] h-[19.9px]"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
        <div className="absolute top-[48px] left-[700px] text-29xl tracking-[0.01em] leading-[160%] font-semibold inline-block w-[470px]">{`Easily control your billing & invoicing.`}</div>
        <div className="absolute top-[226px] left-[700px] text-lg tracking-[0.01em] leading-[160%] text-gray-1000 inline-block w-[470px]">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </div>
        <img
          className="absolute top-[361px] left-[700px] w-[128.9px] h-[42px]"
          alt=""
          src="/group-481724.svg"
        />
        <img
          className="absolute top-[362px] left-[861px] w-[144.2px] h-[43px]"
          alt=""
          src="/group-481725.svg"
        />
        <div className="absolute top-[0px] left-[225px] w-[227px] h-[216px] text-gray-1000">
          <div className="absolute top-[0px] left-[0px] w-[227px] h-[216px]">
          <div
  className="absolute top-[0px] left-[0px] rounded-xl"
  style={{
    width: '227px',
    height: '216px',
    backgroundImage: 'linear-gradient(94.3deg, rgba(26, 33, 64, 1) 10.9%, rgba(81, 84, 115, 1) 87.1%)',
  }}
/>
            <img
              className="absolute top-[103px] left-[137.6px] rounded-3xs w-[70.9px] h-[33px]"
              alt=""
              src="/rectangle-14353-stroke.svg"
            />
            <div className="absolute top-[160px] left-[20.5px] rounded-3xs [background:linear-gradient(157.81deg,_#def9fa_0.89%,_#bef3f5_17.23%,_#9dedf0_42.04%,_#7de7eb_55.12%,_#5ce1e6_71.54%,_#33bbcf)] w-[188px] h-[33px]" />
            <div className="absolute top-[20px] left-[20.5px] rounded-[50%] bg-white w-14 h-14" />
            <div className="absolute top-[16px] left-[88.3px] text-[24px] tracking-[0.01em] leading-[160%] font-semibold text-white inline-block w-[88.3px]">
              Paypal
            </div>
            <div className="absolute top-[54px] left-[90.4px] tracking-[0.01em] leading-[160%] inline-block w-[60.6px]">
              Checkout
            </div>
            <div className="absolute top-[110px] left-[147.9px] tracking-[0.01em] leading-[160%] text-transparent !bg-clip-text [background:linear-gradient(157.81deg,_#def9fa_0.89%,_#bef3f5_17.23%,_#9dedf0_42.04%,_#7de7eb_55.12%,_#5ce1e6_71.54%,_#33bbcf)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[50.3px]">
              Change
            </div>
            <div className="absolute top-[167px] left-[67.8px] tracking-[0.01em] leading-[160%] font-medium text-gray-700 inline-block w-[93.5px]">
              Make Payment
            </div>
            <div className="absolute top-[100px] left-[20.5px] tracking-[0.01em] leading-[130%] inline-block w-[42.1px]">
              <p className="m-0">Total</p>
              <p className="m-0 text-lg font-medium text-white">$210</p>
            </div>
          </div>
          <img
            className="absolute top-[33px] left-[36px] w-[26px] h-[30.6px]"
            alt=""
            src="/group-481723.svg"
          />
        </div>
        <div className="absolute top-[401px] left-[206px] shadow-[0px_10px_30px_rgba(40,_48,_63,_0.25)] rounded-3xs bg-white w-[324px] h-[54px]" />
        <div className="absolute top-[403px] left-[226px] rounded-[50%] bg-white w-6 h-6" />
        <div className="absolute top-[417px] left-[260px] text-sm tracking-[0.01em] leading-[22px] font-medium text-gray-300">
          Great! Your Payment is succesfully.
        </div>
        <img
          className="absolute top-[416px] left-[226px] w-6 h-6 overflow-hidden"
          alt=""
          src="/mapsandflags-1-1.svg"
        />
      </div>
      <div className="absolute top-[1113px] left-[135px] w-[1170px] h-[383px]">
        <div className="absolute top-[0px] left-[0px] text-29xl tracking-[0.01em] leading-[160%] font-semibold inline-block w-[622px]">
          You do the business, we’ll handle the money.
        </div>
        <div className="absolute top-[178px] left-[0px] tracking-[0.01em] leading-[170%] text-gray-1000 inline-block w-[570px]">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </div>
        <div className="absolute top-[319px] left-[0px] rounded-3xs [background:linear-gradient(157.81deg,_#def9fa_0.89%,_#bef3f5_17.23%,_#9dedf0_42.04%,_#7de7eb_55.12%,_#5ce1e6_71.54%,_#33bbcf)] w-[170px] h-16" />
        <div className="absolute top-[338px] left-[33px] leading-[150%] capitalize font-medium text-gray-600">
          Get Started
        </div>
        <div className="absolute top-[145px] left-[700px] shadow-[0px_20px_100px_-10px_rgba(66,_71,_91,_0.1)] rounded-xl [background:linear-gradient(153.47deg,_rgba(255,_255,_255,_0),_#14101d)] w-[470px] h-[115px]" />
        <img
          className="absolute top-[35px] left-[720px] w-16 h-16"
          alt=""
          src="/group-481727.svg"
        />
        <div className="absolute top-[61px] left-[804px] text-base text-gray-1000 inline-block w-[366px]">
          The best credit cards offer some tantalizing combinations of
          promotions and prizes
        </div>
        <div className="absolute top-[196px] left-[804px] text-base text-gray-1000 inline-block w-[366px]">
          We take proactive steps make sure your information and transactions
          are secure.
        </div>
        <div className="absolute top-[30px] left-[804px] tracking-[0.01em] leading-[130%] capitalize font-semibold">
          Rewards
        </div>
        <div className="absolute top-[331px] left-[804px] text-base text-gray-1000 inline-block w-[346px]">
          A balance transfer credit card can save you a lot of money in interest
          charges.
        </div>
        <div className="absolute top-[165px] left-[804px] tracking-[0.01em] leading-[130%] capitalize font-semibold">
          100% Secured
        </div>
        <img
          className="absolute top-[170px] left-[720px] w-16 h-16 object-contain"
          alt=""
          src="/group-481744@2x.png"
        />
        <div className="absolute top-[300px] left-[804px] tracking-[0.01em] leading-[130%] capitalize font-semibold">
          Balance Transfer
        </div>
        <img
          className="absolute top-[305px] left-[720px] w-16 h-16"
          alt=""
          src="/group-481745.svg"
        />
      </div>
      <div className="absolute top-[3790px] left-[5px] w-[1440px] h-[779px] text-gray-1000">
        <img
          className="absolute top-[361px] left-[0px] w-[1440px] h-[418px]"
          alt=""
          src="/bg.svg"
        />
        <div className="absolute top-[705.5px] left-[154.5px] box-border w-[1171px] h-px border-t-[1px] border-solid border-darkslategray" />
        <div className="absolute top-[550px] left-[155px] leading-[32px] inline-block w-[312px]">
          A new way to make the payments easy, reliable and secure.
        </div>
        <div className="absolute top-[447px] left-[606px] w-[136px] h-[219px] text-base">
          <div className="absolute top-[123px] left-[1px] leading-[150%]">
            Create
          </div>
          <div className="absolute top-[159px] left-[1px] leading-[150%]">
            Explore
          </div>
          <div className="absolute top-[87px] left-[1px] leading-[150%]">
            How it Works
          </div>
          <div className="absolute top-[0px] left-[0px] text-lg leading-[150%] font-medium text-white text-center">
            Usefull Links
          </div>
          <div className="absolute top-[51px] left-[1px] leading-[150%]">
            Content
          </div>
          <div className="absolute top-[195px] left-[1px] leading-[150%]">{`Terms & Services`}</div>
        </div>
        <div className="absolute top-[447px] left-[897px] w-[109px] h-[219px] text-base">
          <div className="absolute top-[0px] left-[0px] text-lg leading-[150%] font-medium text-white text-center">
            Community
          </div>
          <div className="absolute top-[51px] left-[0px] leading-[150%]">
            Help Center
          </div>
          <div className="absolute top-[87px] left-[0px] leading-[150%]">
            Partners
          </div>
          <div className="absolute top-[123px] left-[0px] leading-[150%]">
            Suggestions
          </div>
          <div className="absolute top-[159px] left-[0px] leading-[150%]">
            Blog
          </div>
          <div className="absolute top-[195px] left-[0px] leading-[150%]">
            Newsletters
          </div>
        </div>
        <img
          className="absolute top-[739px] left-[1120px] w-44 h-[21px]"
          alt=""
          src="/group-481771.svg"
        />
        <div className="absolute top-[736px] left-[162px] w-[422px] h-[27px] text-center text-gray-900 font-abel">
          <div className="absolute top-[0px] left-[0px] leading-[150%]">
            Copyright
          </div>
          <div className="absolute top-[0px] left-[104px] leading-[150%] font-poppins">
            2021 QuickBank. All Rights Reserved.
          </div>
          <img
            className="absolute top-[7px] left-[80px] w-4 h-4 overflow-hidden"
            alt=""
            src="/copyright-1.svg"
          />
        </div>
        <div className="absolute top-[447px] left-[1150px] w-[146px] h-[110px] text-base">
          <div className="absolute top-[46px] left-[0px] tracking-[0.01em] leading-[180%]">
            Our Partner
          </div>
          <div className="absolute top-[81px] left-[0px] tracking-[0.01em] leading-[180%]">
            Become a Partner
          </div>
          <div className="absolute top-[0px] left-[1px] text-lg tracking-[0.01em] leading-[180%] font-medium text-white text-center">
            Partner
          </div>
        </div>
        <div className="absolute top-[447px] left-[130px] w-[337px] h-[69px] text-[40.6px] text-white">
          <div className="absolute top-[16px] left-[92px] leading-[130%] font-semibold inline-block w-[245px] h-[47px]">
            <span>Quick</span>
            <span className="text-mediumturquoise">Bank</span>
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[81.4px] h-[69px]"
            alt=""
            src="/group-481750.svg"
          />
        </div>
        <div className="absolute top-[0px] left-[130px] w-[1170px] h-[293px] text-white">
        <div
  className="absolute top-[250px] left-[1170px] rounded-xl"
  style={{
    width: '1170px',
    height: '293px',
    backgroundImage:
      'linear-gradient(94.3deg, rgba(26,33,64,1) 10.9%, rgba(81,84,115,1) 87.1%)',
    backdropFilter: 'blur(10px)',
    transform: 'rotate(180deg)',
    transformOrigin: '0 0'
  }}
/>
          <div className="absolute top-[8px] left-[97px] text-29xl leading-[140%] font-semibold inline-block w-[670px]">
            Let’s try our service now!
          </div>
          <div className="absolute top-[75px] left-[97px] tracking-[0.01em] leading-[160%] text-gray-1000 inline-block w-[445px]">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </div>
          <div className="absolute top-[123px] left-[900px] rounded-3xs [background:linear-gradient(157.81deg,_#def9fa_0.89%,_#bef3f5_17.23%,_#9dedf0_42.04%,_#7de7eb_55.12%,_#5ce1e6_71.54%,_#33bbcf)] w-[170px] h-16" />
          <div className="absolute top-[142px] left-[933px] leading-[150%] capitalize font-medium text-gray-600">
            Get Started
          </div>
        </div>
      </div>
      <div className="absolute top-[-384.9px] left-[992.4px] [filter:blur(900px)] rounded-181xl [background:linear-gradient(90deg,_#f4c4f3,_#fc67fa)] w-[345px] h-[514px] [transform:_rotate(-20deg)] [transform-origin:0_0]" />
      <div className="absolute top-[502.7px] left-[1165.4px] [filter:blur(650px)] rounded-181xl [background:linear-gradient(90deg,_rgba(26,_41,_128,_0.5),_rgba(38,_208,_206,_0.5))] w-[482.6px] h-[615.1px] [transform:_rotate(-67.4deg)] [transform-origin:0_0]" />
      <div className="absolute top-[90px] left-[998.4px] [filter:blur(750px)] rounded-[50%] bg-gray-900 w-[405px] h-[471px]" />
      <div className="absolute top-[252px] left-[-65px] [filter:blur(450px)] rounded-[50%] bg-white w-[195px] h-[324px]" />
      <div className="absolute top-[358.1px] left-[793.6px] [filter:drop-shadow(4px_20px_50px_rgba(0,_0,_0,_0.25))_drop-shadow(4px_10px_14px_rgba(255,_255,_255,_0.3)_inset)] rounded-[50%] w-[120px] h-[120px] [transform:_rotate(-45.7deg)] [transform-origin:0_0]" />
      <div className="relative">
      <div className="absolute top-[100px] left-[135.4px] text-53xl tracking-[0.01em] leading-[140%] font-semibold inline-block w-[670px]">
        <h4 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 mb-1">
          The Next
        </h4>
        <h4 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 mt-1">
          Generation.
        </h4>
      </div>
    </div>
      <div className="absolute top-[400px] left-[135px] text-53xl tracking-[0.01em] leading-[140%] font-semibold text-transparent !bg-clip-text [background:radial-gradient(50%_50%_at_50%_50%,_#def9fa_0.89%,_#bef3f5_17.23%,_#9dedf0_42.04%,_#7de7eb_55.12%,_#5ce1e6_71.54%,_#33bbcf)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[670px]">
        Payment method
      </div>
      <motion.img
        className="absolute top-[250px] left-[771.4px] w-[669px] h-[444px] object-cover"
        alt=""
        src="/robothandbackgroundpresentingtechnologygesture-1@2x.png"
        variants={imageVariants}
        initial="initial"
        animate="animate"
      />
      <div className="absolute top-[200px] left-[605px] w-[140px] h-[140px]">
        <img
          className="absolute top-[0px] left-[0px] rounded-3xs w-[140px] h-[140px] "
          alt=""
          src="/ellipse-2335-stroke.svg"
        />
        <div className="absolute top-[48.2px] left-[35.5px] leading-[130%] font-medium text-transparent !bg-clip-text [background:linear-gradient(157.81deg,_#def9fa_0.89%,_#bef3f5_17.23%,_#9dedf0_42.04%,_#7de7eb_55.12%,_#5ce1e6_71.54%,_#33bbcf)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[84px] h-[53.7px]">
          Get Started
        </div>
        <img
          className="absolute top-[44.3px] left-[67.8px] w-[32.4px] h-[32.4px] object-contain "
          alt=""
          src="/iconlylightoutlinearrow--up@2x.png"
        />
      </div>
      <div className="absolute top-[880px] left-[153.2px] w-[1151.8px] h-[52.8px] text-21xl-9">
        <div className="absolute top-[0px] left-[0px] leading-[130%] font-semibold inline-block w-[126.1px] h-[52.8px]">
          3800+
        </div>
        <div className="absolute top-[0px] left-[378.3px] leading-[130%] font-semibold inline-block w-[97.1px] h-[52.8px]">
          230+
        </div>
        <div className="absolute top-[0px] left-[826.4px] leading-[130%] font-semibold inline-block w-[158.5px] h-[52.8px]">
          $230M+
        </div>
        <div className="absolute top-[13.6px] left-[151.6px] text-xl-4 leading-[130%] uppercase text-transparent !bg-clip-text [background:radial-gradient(50%_50%_at_50%_50%,_#def9fa_0.89%,_#bef3f5_17.23%,_#9dedf0_42.04%,_#7de7eb_55.12%,_#5ce1e6_71.54%,_#33bbcf)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[122.7px] h-[27.3px]">
          User Active
        </div>
        <div className="absolute top-[13.6px] left-[500.9px] text-xl-4 leading-[130%] uppercase text-transparent !bg-clip-text [background:radial-gradient(50%_50%_at_50%_50%,_#def9fa_0.89%,_#bef3f5_17.23%,_#9dedf0_42.04%,_#7de7eb_55.12%,_#5ce1e6_71.54%,_#33bbcf)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[219.8px] h-[27.3px]">
          TRUSTED BY COMPANY
        </div>
        <div className="absolute top-[13.6px] left-[1013.8px] text-xl-4 leading-[130%] uppercase text-transparent !bg-clip-text [background:radial-gradient(50%_50%_at_50%_50%,_#def9fa_0.89%,_#bef3f5_17.23%,_#9dedf0_42.04%,_#7de7eb_55.12%,_#5ce1e6_71.54%,_#33bbcf)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[138px] h-[27.3px]">
          TRANSACTION
        </div>
        <div className="absolute top-[19.6px] left-[326.3px] box-border w-[1.7px] h-[15.3px] border-r-[1.7px] border-solid border-gray-900" />
        <div className="absolute top-[19.6px] left-[774.4px] box-border w-[1.7px] h-[15.3px] border-r-[1.7px] border-solid border-gray-900" />
      </div>
      <div className="absolute top-[3630px] left-[187.4px] w-[1065.8px] h-[60px]">
        <img
          className="absolute top-[0px] left-[0px] w-[192.3px] h-[60px]"
          alt=""
          src="/group-481734.svg"
        />
        <img
          className="absolute top-[11px] left-[292.3px] w-[192.3px] h-[38.6px]"
          alt=""
          src="/group-481735.svg"
        />
        <img
          className="absolute top-[5px] left-[584.5px] w-[189px] h-[41.3px]"
          alt=""
          src="/group-481736.svg"
        />
        <img
          className="absolute top-[14.1px] left-[873.5px] w-[192.3px] h-[37.9px]"
          alt=""
          src="/group-481737.svg"
        />
      </div>
      <div className="absolute top-[30px] left-[135.4px] w-[1170px] h-8 text-base text-gray-1000">
        <div className="absolute top-[6px] left-[749px] leading-[130%] text-white">
          Home
        </div>
        <div className="absolute top-[5px] left-[36px] text-6xl leading-[130%] font-semibold text-mediumturquoise">
  QuickBank
</div>
        <div className="absolute top-[6px] left-[853px] leading-[130%]">
          About Us
        </div>
        <div className="absolute top-[6px] left-[980px] leading-[130%]">
          Features
        </div>
        <div className="absolute top-[6px] left-[1106px] leading-[130%]">
          Solution
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-8 h-8"
          alt=""
          src="/group-481747.svg"
        />
      </div>
      <motion.img
        className="absolute top-[127px] left-[829px] w-[101px] h-[101px]"
        alt=""
        src="/vector1.svg"
        variants={imageVariants} // Apply the same animation variants
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.1 }} // Optional hover effect
      />
      <motion.img
        className="absolute top-[267px] bottom-[250px] left-[891.4px] w-[400.3px] h-[231.1px]"
        alt=""
        src="/group-481765@2x.png"
        variants={imageVariants} // Apply the same animation variants
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.1 }} // Optional hover effect
      />
      <div className="absolute top-[550px] left-[136px] leading-[170%] text-gray-1000 inline-block w-[483px]">
        <p className="m-0">{`Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. `}</p>
        <p className="m-0">We examine annual percentage rates, annual fees.</p>
      </div>
      <motion.img
      className="absolute top-[175px] bottom-[250px] left-[866px] w-[400.3px] h-[231.1px] object-contain"
      alt=""
      src="/group-481764@2x.png"
      variants={imageVariants}
      initial="initial"
      animate="animate"
      whileHover={{ scale: 1.1 }} // Optional hover effect
    />
     <motion.img
        className="absolute top-[400px] left-[1300px] w-[68px] h-[68px]"
        alt=""
        src="/vector2.svg"
        variants={imageVariants} // Apply the same animation variants
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.1 }} // Optional hover effect
      />
      <motion.img
        className="absolute top-[500px] left-[850px] w-8 h-8"
        alt=""
        src="/vector3.svg"
        variants={imageVariants} // Apply the same animation variants
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.1 }} // Optional hover effect
      />
      
      <div className="absolute top-[150px] left-[145px] w-[388px] h-8">
        <div className="absolute top-[2px] left-[45px] leading-[150%]">
          <span>{`20% `}</span>
          <span className="text-gray-900">DISCOUNT</span>
          <span>{` `}</span>
          <span className="text-gray-900">FOR</span>
          <span>{` 1 MONTH `}</span>
          <span className="text-gray-900">ACCOUNT</span>
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-8 h-8 object-cover"
          alt=""
          src="/iconlybulkdiscount@2x.png"
        />
      </div>
      <div className="absolute top-[2271.9px] left-[135px] w-[1170px] h-[449px]">
        <img
          className="absolute top-[0px] left-[722px] rounded-3xs w-[381px] h-[381px]"
          alt=""
          src="/ellipse-2357-stroke.svg"
        />
        <img
          className="absolute top-[12.1px] left-[734.1px] rounded-3xs w-[356.8px] h-[356.8px] object-contain"
          alt=""
          src="/ellipse-2360-stroke.svg"
        />
        <img
          className="absolute top-[102.7px] left-[824.7px] rounded-3xs w-[175.6px] h-[175.6px] object-contain"
          alt=""
          src="/ellipse-2361-stroke.svg"
        />
        <div className="absolute top-[307px] left-[0px] rounded-3xs [background:linear-gradient(157.81deg,_#def9fa_0.89%,_#bef3f5_17.23%,_#9dedf0_42.04%,_#7de7eb_55.12%,_#5ce1e6_71.54%,_#33bbcf)] w-[170px] h-16" />
        <div className="absolute top-[326px] left-[33px] leading-[150%] capitalize font-medium text-gray-600">
          Get Started
        </div>
        <div className="absolute top-[19px] left-[0px] text-29xl tracking-[0.01em] leading-[160%] font-semibold inline-block w-[570px]">
          Find a better card deal in few easy steps.
        </div>
        <div className="absolute top-[197px] left-[0px] tracking-[0.01em] leading-[170%] text-gray-1000 inline-block w-[500px]">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </div>
        <div className="absolute top-[78px] left-[657px] w-[191px] h-[158px] text-center text-base">
        <div
  className="absolute top-[0px] left-[0px] rounded-xl"
  style={{
    width: '191px',
    height: '158px',
    backgroundImage: 'linear-gradient(94.3deg, rgba(26, 33, 64, 1) 10.9%, rgba(81, 84, 115, 1) 87.1%)',
  }}
/>

          <div className="absolute top-[20px] left-[79px] rounded-3xs bg-gray-800 w-[34px] h-[34px]" />
          <div className="absolute top-[70px] left-[20px] tracking-[0.01em] leading-[160%] font-semibold">
            Scan Credit Cards
          </div>
          <div className="absolute top-[100px] left-[20px] text-xs tracking-[0.01em] leading-[160%] text-gray-1000 inline-block w-[151px]">
            Scan yourcredit card in 4 minutes.
          </div>
          <img
            className="absolute top-[25px] left-[84px] w-6 h-6 object-cover"
            alt=""
            src="/iconlyboldscan@2x.png"
          />
        </div>
        <div className="absolute top-[309px] left-[758px] w-[262px] h-[140px] text-center text-base">
        <div
  className="absolute top-[0px] left-[0px] rounded-xl"
  style={{
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(94.3deg, rgba(26, 33, 64, 1) 10.9%, rgba(81, 84, 115, 1) 87.1%)',
  }}
/>

          <div className="absolute top-[20px] left-[20px] tracking-[0.01em] leading-[160%] font-semibold">
            Pay Method
          </div>
          <div className="absolute top-[62px] left-[20px] rounded-3xs [background:linear-gradient(#fff,_#fff),_linear-gradient(90deg,_#00f5a0,_#00d9f5)] w-12 h-12" />
          <div className="absolute top-[62px] left-[78px] rounded-3xs [background:linear-gradient(#fff,_#fff),_linear-gradient(90deg,_#00f5a0,_#00d9f5)] w-12 h-12" />
          <div className="absolute top-[62px] left-[136px] rounded-3xs [background:linear-gradient(#fff,_#fff),_linear-gradient(90deg,_#00f5a0,_#00d9f5)] w-12 h-12" />
          <div className="absolute top-[62px] left-[194px] rounded-3xs [background:linear-gradient(#fff,_#fff),_linear-gradient(90deg,_#00f5a0,_#00d9f5)] w-12 h-12" />
          <img
            className="absolute top-[72px] left-[32px] w-6 h-[28.3px]"
            alt=""
            src="/group-481733.svg"
          />
          <img
            className="absolute top-[74px] left-[90px] w-6 h-6 overflow-hidden"
            alt=""
            src="/apple-1-1.svg"
          />
          <img
            className="absolute top-[70px] left-[144px] w-8 h-8 overflow-hidden"
            alt=""
            src="/visa-2-1.svg"
          />
          <img
            className="absolute top-[70px] left-[194px] w-12 h-8 overflow-hidden"
            alt=""
            src="/shopifylogowine-1.svg"
          />
        </div>
        <div className="absolute top-[38px] left-[914px] w-64 h-[238px] text-3xs text-gray-1000">
        <div
  className="absolute top-[0px] left-[0px] rounded-xl"
  style={{
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(94.3deg, rgba(26, 33, 64, 1) 10.9%, rgba(81, 84, 115, 1) 87.1%)',
  }}
/>

          <div className="absolute top-[197px] left-[85px] rounded-[5px] [background:linear-gradient(90deg,_#00f5a0,_#00d9f5)] w-7 h-[21px]" />
          <div className="absolute top-[201px] left-[89px] leading-[130%] capitalize text-gray-200">
            Mar
          </div>
          <div className="absolute top-[201px] left-[30px] leading-[130%] capitalize">
            Jan
          </div>
          <div className="absolute top-[201px] left-[60px] leading-[130%] capitalize">
            Feb
          </div>
          <div className="absolute top-[201px] left-[120px] leading-[130%] capitalize">
            Apr
          </div>
          <div className="absolute top-[201px] left-[148px] leading-[130%] capitalize">
            May
          </div>
          <div className="absolute top-[201px] left-[181px] leading-[130%] capitalize">
            Jun
          </div>
          <div className="absolute top-[201px] left-[212px] leading-[130%] capitalize">
            Jul
          </div>
          <img
            className="absolute top-[110px] left-[20px] w-[215px] h-[63px]"
            alt=""
            src="/vector-3.svg"
          />
          <img
            className="absolute top-[139px] left-[96px] w-[108px] h-[34px]"
            alt=""
            src="/vector-4.svg"
          />
          <div className="absolute top-[61px] left-[20px] leading-[140%] capitalize text-xs text-mediumaquamarine-100">
            <p className="m-0 font-medium">$ 2,334,67</p>
            <p className="m-0 text-4xs text-mediumaquamarine-200">Income</p>
          </div>
          <div className="absolute top-[61px] left-[193px] leading-[140%] capitalize text-center text-xs text-darkturquoise-100">
            <p className="m-0 font-medium">$ 5.31M</p>
            <p className="m-0 text-4xs text-darkturquoise-200">Expenses</p>
          </div>
          <div className="absolute top-[20px] left-[20px] text-base leading-[130%] capitalize font-semibold text-white">
            Online Analysis
          </div>
          <div className="absolute top-[25px] left-[183px] leading-[130%] capitalize text-white">
            1 Month
          </div>
          <img
            className="absolute top-[25px] left-[222px] w-3.5 h-3.5 overflow-hidden"
            alt=""
            src="/arrow-drop-down.svg"
          />
        </div>
        <img
          className="absolute top-[331px] left-[976px] w-6 h-6 overflow-hidden"
          alt=""
          src="/arrow-drop-down1.svg"
        />
      </div>
    </div>
  );
};

export default LandingPage;
