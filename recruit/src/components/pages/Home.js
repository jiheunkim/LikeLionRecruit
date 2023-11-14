import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './Home.css';
import likelion_letter_logo from '../pages/LIKELION_letter_logo.png';

function Home() {


  //기타 변수 선언이나 그런 것들 하면 될 것 같고 


  return (

    <div className='relative flex flex-col items-center justify-center home-page bg-[#EDEBEB]'>

      <div className='borderline'>


        {/* 건국대학교 멋쟁이 사자처럼 12기 모집 */}
        <div className='homeimgBox_1'>
          <img src="image/link-Box.png" className='home_group19' />

          <div className='home-overlay-title_1'>
            <div className='box_text_1' >건국대학교<br></br>멋쟁이사자처럼<br></br>12기 모집</div>
          </div>

          {/*아이콘*/}
          <div>
            <img src="image/free-icon-heart.png" className='iconheart' />
          </div>

          <div>
            <img src="image/free-icon-start-up.png" className='iconstartup' />
          </div>
        </div>

        {/* 멋쟁이사자처럼 대학 11주년 해커톤.png */}
        <div className='homeimgBox_2 relative top-[-100px] left-[500px]'>
          <img src="image/free_icon_alien_space.png" className='iconalien' />

          {/* <div class='relative flex flex-row'> */}
          {/* 두번째 homeimgBox */}
          <div className="z-0 w-[650px] h-[558px] bg-white shadow relative" >


            {/*두번째 homeimgBox_상단바  */}
            <div className="ltr z-20 w-[650px] h-[46px] bg-white shadow flex items-center">
              <div className="ms-5  w-[57px] h-[16.07px] relative">
                <div className="w-[15px] h-[15px] left-0 top-0 absolute bg-red-400 rounded-full" />
                <div className="w-[15px] h-[16.07px] left-[21px] top-0 absolute bg-yellow-300 rounded-full" />
                <div className="w-[15px] h-[15px] left-[42px] top-0 absolute bg-lime-500 rounded-full" />
              </div>
            </div>

            {/* 두번째 homeimgBox_상단바_아래  */}
            <div class='relative flex'>

              {/* 회색 가로 박스 */}
              <div className="flex-none w-[139] h-[558] bg-zinc-100 text-black text-xs font-normal leading-10.16">


                <div class='ml-3' style={{ marginTop: '10px' }}>
                  <div className=' home-overlay-subcontent_title' >

                    < div className='subcontent_title_1 text-black text-[13px] font-normal font-[Galmuri9] leading-3 mb-10px '>
                      LIKELION </div>
                    {/* 데이터 처리 */}
                    <div div className='subcontent_likelion'>
                      건국대학교<br />멋쟁이사자처럼<br />기획 디자인<br />프론트엔드<br />백엔드<br />아이디어톤<br />중앙 해커톤</div>

                  </div>

                  <div className='home-overlay-subcontent_content'>
                    <div div className='subcontent_title_2' style={{ marginTop: '20px', marginBottom: '10px' }}>
                      12기 모집</div>
                    <div div className='subcontent_recruit12th'>
                      아기사자 new!<br />00.00 ~ 00.00<br />테킷 VOD</div>
                  </div>
                </div>

              </div>


              <div className="flex-1 place-self-center home-overlay_pic">
                <div className='home-overlay_pic_text'>멋쟁이사자처럼 대학 11주년 해커톤.png</div>
                <img className="w-[505.71px] h-[402.40px]" src="image/11th_pic.png" />

                {/* 로고 글자 */}
                <img class="absolute bottom-0 right-0  w-[300px] h-[23px] mr-3" src={likelion_letter_logo} />

              </div>



            </div>



          </div>
        </div>


        {/* blueblackroundprojectimgBox */}
        <div className='projectimgBox' >
          {/* 상단 */}
          <div class=" w-[1017px] h-[113px] bg-violet-950 rounded-[43px]">
            <div className='my-2 ml-10 text-white text-2xl font-[Galmuri9] font-normal first-letter: tracking-wide placeholder:littletitle'>
              건국대학교 멋쟁이사자처럼</div>
          </div>

          {/* 하단 */}
          <div className="w-[1017px] rounded-b-lg bg-black">
            <div className="flex items-center justify-center text-white mx-auto my-6 littlesubtitle
         text-4xl font-normal font-[Galmuri9] tracking-widest">
              내 손으로 배포까지!</div>
            <div className="ml-10 my-6
           text-white text-[28px] font-normal font-[Galmuri9] tracking-wider ">
              <div> &gt;&gt; 11기 멋사 중앙 해커톤</div>
              <div> &gt;&gt; Project 모음집</div>
            </div>


            <div className="ml-10 grid grid-cols-1 gap-x-6 gap-y-6 
            sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">

              {/* 프로젝트1 */}
              <div class="w-[267.57px] h-[337px] border-2 border-white">
                <div class="w-[267.57px] h-[44.47px] bg-white border-2 border-white">

                  <div class="flex justify-center items-center text-black text-base font-normal font-['Galmuri9'] tracking-wide">[ 프로젝트명 ]</div>
                </div>
                < div className='mx-auto px-4 py-4'>
                  <img src='/image/image_16.png' alt='project_img' />
                  <div className='text-white text-center py-6'>
                    프로젝트 설명 어쩌구 저쩌구 프로젝트 설명 어쩌구 저쩌구 프로젝트 설명 어쩌구 저쩌구 프로젝트 설명 어쩌구 저쩌구</div>
                </div>
              </div>

              {/* 프로젝트2 */}
              <div class="w-[267.57px] h-[337px] border-2 border-white">
                <div class="w-[267.57px] h-[44.47px] bg-white border-2 border-white">

                  <div class="flex justify-center items-center text-black text-base font-normal font-['Galmuri9'] tracking-wide">[ 프로젝트명 ]</div>
                </div>
                < div className='mx-auto px-4 py-4'>
                  <img src='/image/image_16.png' alt='project_img' />
                  <div className='text-white text-center py-6'>
                    프로젝트 설명 어쩌구 저쩌구 프로젝트 설명 어쩌구 저쩌구 프로젝트 설명 어쩌구 저쩌구 프로젝트 설명 어쩌구 저쩌구</div>
                </div>
              </div>


              {/* 프로젝트3*/}
              <div class="w-[267.57px] h-[337px] border-2 border-white">
                <div class="w-[267.57px] h-[44.47px] bg-white border-2 border-white">

                  <div class="flex justify-center items-center text-black text-base font-normal font-['Galmuri9'] tracking-wide">[ 프로젝트명 ]</div>
                </div>
                < div className='mx-auto px-4 py-4'>
                  <img src='/image/image_16.png' alt='project_img' />
                  <div className='text-white text-center py-6'>
                    프로젝트 설명 어쩌구 저쩌구 프로젝트 설명 어쩌구 저쩌구 프로젝트 설명 어쩌구 저쩌구 프로젝트 설명 어쩌구 저쩌구</div>
                </div>
              </div>

            </div>
            <span>
              <div class="ml-10 mt-10 text-yellow-300 text-[28px] font-normal font-[Galmuri9] tracking-wider">
                &gt;&gt; 프로젝트를 자세히 보시겠습니까?</div>
              <img src="image/type1.png" className='yellowcursor' />
            </span>
            <div class=" text-white text-4xl font-normal font-[Galmuri9] tracking-widest 
            float-right mr-10">
              [자세히 보러가기]</div>

          </div>
        </div>





        {/*다양한 트랙별로 기획부터 개발까지*/}
        <div className='flex flex-col mt-72'>

          <div>
            <img src="image/free-icon-squirell.png" className='squirellicon float-right mr-36' />
          </div>

          <div className="flex bg-white rounded-[44px] mx-auto">
            <img src="image/free-icon-search.png" className='p-5 searchicon' />
            <div className='flex items-center justify-center
            text-black text-4xl font-normal font-[Galmuri9] tracking-widest 
            mx-5'>다양한 트랙별로 기획부터 개발까지!</div>
          </div>

          {/*yellowZone*/}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-1 lg:grid-cols-3
          place-items-center mt-36">
            {/* 노란색 섹션 - 1 */}
            <div className='flex flex-col'>

              <div class="w-[83.03px] h-[29.92px] bg-yellow-400 rounded-xl">  </div>
              <div class="w-[285px] h-[184.02px] bg-yellow-400 rounded-[9px]
              flex items-center justify-center">
                <div class="w-[194.49px] h-[32.91px] text-black text-4xl font-normal font-['Galmuri9'] leading-[33.24px]">
                  기획/디자인</div>

              </div>

            </div>

            {/* 노란색 섹션 - 2*/}
            <div className='flex flex-col'>

              <div class="w-[83.03px] h-[29.92px] bg-yellow-400 rounded-xl">  </div>
              <div class="w-[285px] h-[184.02px] bg-yellow-400 rounded-[9px]
              flex items-center justify-center">
                <div class=" text-black text-4xl font-normal font-['Galmuri9'] leading-[33.24px]">
                  프론트엔드</div>

              </div>

            </div>

            {/* 노란색 섹션 - 3*/}
            <div className='flex flex-col'>

              <div class=" w-[83.03px] h-[29.92px] bg-yellow-400 rounded-xl">  </div>
              <div class="w-[285px] h-[184.02px] bg-yellow-400 rounded-[9px]
              flex items-center justify-center">
                <div class="text-black text-4xl font-normal font-['Galmuri9'] leading-[33.24px]">
                  백엔드</div>

              </div>

            </div>

          </div>
        </div>


        {/*whiteboxzone */}
        <div className='whiteboxzone'>
          <div className='musicplay-box'>
            <img src="image/musicplay.png" className="musicplay"
              alt="musiclay" style={{ width: "657px", height: "345px" }} />
          </div>
          <div className='titleflow'>
            {/*흐르는 기능 추가*/}
            <span className='textflow'>♥12기 아기사자 신규 모집♥</span>
          </div>
        </div>


        {/* recruit */}
        <div className='recruit' >
          {/* 모집대상 */}
          <div div className='title1' style={{ marginBottom: '37px' }} >
            모집 대상</div>
          <div className='content1'>
            <div className="br-gap1" style={{ marginBottom: '4px' }}>
              24년도 기준 건국대학교 재학생, 휴학생</div>
            <div className='sub-br' style={{ marginBottom: '35px' }}>
              *졸업생은 불가, 졸업예정생은 가능</div>
            <div className='br-gap1' style={{ marginBottom: '63px' }}>
              창업, 개발에 대한 열정이 있는 대학생</div>
            <div className="br-gap1">
              개발 / 디자인 / 기획에 도전하고 싶은 건국대 재학생 및 휴학생</div>
          </div>
        </div>


        {/*select-schedule*/}
        <div className='select-schedule'>
          {/* 선발일정 */}
          <div className='title2' style={{ marginBottom: '37px' }}>
            선발 일정</div>
          <div className='content2'>
            <div className="br-gap2" style={{ marginBottom: '63px' }}>
              서류 지원 : 24.00.00(월) ~ 24.00.00(월) 00:00</div>
            <div className="br-gap2" style={{ marginBottom: '63px' }}>
              1차 합격 발표: 24.00.00(월)</div>
            <div className='br-gap2' style={{ marginBottom: '63px' }}>
              2차 면접: 24.00.00(화) - 24.00.00(목)</div>
            <div className="br-gap2">
              최종 발표: 24.00.00(금)</div>
          </div>
        </div>


        {/*activity-schedule*/}
        <div className='activity-schedule'>
          {/* 활동일정 */}
          <div className='title3' style={{ marginBottom: '37px' }}>
            활동 일정</div>
          <div className='content3'>
            <div className="br-gap3" style={{ marginBottom: '63px' }}>
              활동 기간: 24.00월 - 24.00월</div>
            <div className="br-gap3" style={{ marginBottom: '63px' }}>
              학교 OT : 24.00.00(월) 00시</div>
            <div className='br-gap3' style={{ marginBottom: '63px' }}>
              전체 OT : 24.00.00(수) 00시</div>
            <div className="br-gap3" style={{ marginBottom: '63px' }}>
              중앙 아이디어톤 : 24년 6월 중</div>
            <div className="br-gap3" style={{ marginBottom: '200px' }}>
              중앙 해커톤 : 24년 7월 - 24년 8월</div>
          </div>
        </div>


        <Footer></Footer>






      </div >



    </div >


  );

}

export default Home;

