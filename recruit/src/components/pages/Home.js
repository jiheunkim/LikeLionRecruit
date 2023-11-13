import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './Home.css';

import likelion_letter_logo from '../pages/LIKELION_letter_logo.png';

function Home() {

  //기타 변수 선언이나 그런 것들 하면 될 것 같고 


  return (



    <div className='relative flex flex-col items-center justify-center home-page'>

      <div className='borderline mx-auto w-full max-w-[650px] p-5 '>

        {/* 건국대학교 멋쟁이 사자처럼 12기 모집 */}
        <div className='homeimgBox_1'>
          <img src="image/link-Box.png" className='home_group19' />

          <div className='home-overlay-title_1'>
            <div className='box_text_1' >건국대학교<br></br>멋쟁이사자처럼<br></br>12기 모집</div>

          </div>
          {/* 이제 여기에 온갖 아이콘 다 들어감 */}
          <div>
            <img src="image/free-icon-heart.png" className='iconheart' />
          </div>
          <div>
            <img src="image/free-icon-start-up.png" className='iconstartup' />
          </div>
        </div>

        {/* 멋쟁이사자처럼 대학 11주년 해커톤.png */}
        <div className='homeimgBox_2'>
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



            {/* <img src="image/link-Box.png" className='home_group19_2' /> */}



            {/* 두번째 homeimgBox_상단바_아래  */}
            <div class='z-10 relative flex'>
              {/* <div class='absolute' style={{width: "calc(100% - 139px)"}}> */}
              {/* <img src="image/rectangle27.png" className='rectangle_gray' /> */}

              {/* 회색 가로 박스 */}

              <div className="flex-none w-139 h-558 bg-zinc-100 text-black text-xs font-normal leading-10.16">


                <div class='ml-3' style={{ marginTop: '10px' }}>
                  <div className=' home-overlay-subcontent_title' >

                    <div div className='subcontent_title_1' style={{ marginBottom: '10px' }}>
                      LIKELION </div>
                    <div div className='subcontent_likelion'>
                      건국대학교<br />멋쟁이사자처럼<br />기획 디자인<br />프론트엔드<br />백엔드<br />아이디어톤<br />중앙 해커톤</div>

                  </div>

                  <div className='home-overlay-subcontent_content'>
                    <div div className='subcontent_title_2' style={{ marginBottom: '10px' }}>
                      12기 모집</div>
                    <div div className='subcontent_recruit12th'>
                      아기사자 new!<br />00.00 ~ 00.00<br />테킷 VOD</div>
                  </div>
                </div>

              </div>


              <div className=" flex-1 place-self-center home-overlay_pic">
                <div className='home-overlay_pic_text'>멋쟁이사자처럼 대학 11주년 해커톤.png</div>
                <img className="w-[505.71px] h-[402.40px]" src="image/11th_pic.png" />

                {/* 로고 글자 */}
                <img class="absolute bottom-0 right-0  w-[300px] h-[23px] mr-3" src={likelion_letter_logo} />

              </div>



            </div>



          </div>
        </div>

        {/* 이제 여기에 온갖 아이콘 다 들어감 */}


        {/*blueblackroundprojectimgBox*/}
        <div className='relative projectimgBox'>


          <img src="image/blueblackround.png" className="blueblackround" />
          <div className='absolute top-0 left-0 p-3 ml-1 text-white placeholder:littletitle'>
            건국대학교 멋쟁이사자처럼</div>

          <div className="absolute top-20 left-10 text-white ">
            <div className="absolute top-20 left-10 text-white mx-auto littlesubtitle">
              내 손으로 배포까지!</div>
            <div className='top-100 left-10 text-white title'> &gt;&gt; 11기 멋사 중앙 해커톤</div>
            <div className='top-200 left-10 text-white title_subtitle'> &gt;&gt; Project 모음집</div>
          </div>
          {/* <div className='absolute top-50 left-10 text-white title'> &gt;&gt; 11기 멋사 중앙 해커톤</div>
          <h2 className='absolute top-50 left-10 text-white title_subtitle'> &gt;&gt; Project 모음집</h2> */}

          <div className='absolute top-40 left-10 collection'>
            <img src="image/projectBox.png" className='projectbox' />
            <div className='top-0 left-10 projectontentbox_title'>[ 프로젝트명 ]</div>
            <div className='projectcontentbox'>

              <div className='projectontentbox_title'>[ 프로젝트명 ]</div>
              <div>
                프로젝트 설명 어쩌구 저쩌구 프로젝트 설명 어쩌구 저쩌구 프로젝트 설명 어쩌구 저쩌구 프로젝트 설명 어쩌구 저쩌구</div>
            </div>
          </div>
        </div>

        {/*노란색라인*/}
        <span>
          <div className='detailProject'>&gt;&gt; 프로젝트를 자세히 보시겠습니까?</div>
          {/*커서깜빡임*/}
          <img src="image/type1.png" className='yellowcursor' />

        </span>

        {/*[자세히 보러가기]*/}
        <div className='detail'>
          [자세히 보러가기]</div>


        {/*다양한 트랙별로 기획부터 개발까지*/}
        <img src="image/free-icon-squirell.png" className='squirellicon' />

        <div className='roundwhitebox'>
          <img src="image/whiteroundrectangle.png" className='whiteroungrectangle' />
          <span>
            <img src="image/free-icon-search.png" className='searchicon' />
            다양한 트랙별로 기획부터 개발까지!
          </span>
        </div>

        {/*yellowZone*/}
        <div className='yellowZone'>
          <div className='yZ1'>
            <img src="image/yellowunion.png" className='yZ1' />
            <div className='SD'>
              기획/디자인</div>

          </div>

          <div className='yZ2'>
            <img src="image/yellowunion.png" className='yZ2' />
            <div className='FE'>
              프론트엔드</div>
          </div>


          <div className='yZ3'>
            <img src="image/yellowunion.png" className='yZ3' />
            <div className='BE'>
              백엔드</div>
          </div>
        </div>







        {/*whiteboxzone */}
        <div className='whiteboxzone'>
          <img src="image/rectangle59.png" className="boxzone" />
          <span className='titleflow'>
            <img src="image/likelion_logo.png" className="logo" />

            {/*흐르는 기능 추가*/}
            <div className='textflow'>♥12기 아기사자 신규 모집♥</div>
          </span>

          <div className="linebox">
            <img src="image/rectangle61.png" className="rectangle61" />
            <img src="image/rectangle62.png" className="rectangle62" />
          </div>

          <div className="lastline">
            <img src="image/free-icon-left.png" className="iconleft" />
            <img src="image/free-icon-pause-button.png" className="iconpause" />
            <img src="image/free-icon-right.png" className="iconright" />
          </div>

        </div>


        {/* recruit */}
        <div className='recruit' >
          {/* 모집대상 */}
          <div div className='title1' >
            모집 대상</div>
          <div className='content1'>
            <div className="br-gap1">
              24년도 기준 건국대학교 재학생, 휴학생</div>
            <div className='sub-br'>
              *졸업생은 불가, 졸업예정생은 가능</div>
            <div className='br-gap1'>
              창업, 개발에 대한 열정이 있는 대학생</div>
            <div className="br-gap1">
              개발 / 디자인 / 기획에 도전하고 싶은 건국대 재학생 및 휴학생</div>
          </div>
        </div>


        {/*select-schedule*/}
        <div className='select-schedule'>
          {/* 선발일정 */}
          <div className='title2'>
            선발 일정</div>
          <div className='content2'>
            <div className="br-gap2" >
              서류 지원 : 24.00.00(월) ~ 24.00.00(월) 00:00</div>
            <div className="br-gap2" >
              1차 합격 발표: 24.00.00(월)</div>
            <div className='br-gap2'>
              2차 면접: 24.00.00(화) - 24.00.00(목)</div>
            <div className="br-gap2">
              최종 발표: 24.00.00(금)</div>
          </div>
        </div>


        {/*activity-schedule*/}
        <div className='activity-schedule'>
          {/* 활동일정 */}
          <div className='title3'>
            활동 일정</div>
          <div className='content3'>
            <div className="br-gap3" >
              활동 기간: 24.00월 - 24.00월</div>
            <div className="br-gap3" >
              학교 OT : 24.00.00(월) 00시</div>
            <div className='br-gap3'>
              전체 OT : 24.00.00(수) 00시</div>
            <div className="br-gap3">
              중앙 아이디어톤 : 24년 6월 중</div>
            <div className="br-gap3">
              중앙 해커톤 : 24년 7월 - 24년 8월</div>
          </div>
        </div>


        <div class="bg-white py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
              <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
              <p class="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
            </div>
            <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <article class="flex max-w-xl flex-col items-start justify-between">
                <div class="flex items-center gap-x-4 text-xs">
                  <time datetime="2020-03-16" class="text-gray-500">Mar 16, 2020</time>
                  <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
                </div>
                <div class="group relative">
                  <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Boost your conversion rate
                    </a>
                  </h3>
                  <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
                </div>
                <div class="relative mt-8 flex items-center gap-x-4">
                  <img class="h-10 w-10 rounded-full bg-gray-50" />
                  <div class="text-sm leading-6">
                    <p class="font-semibold text-gray-900">
                      <a href="#">
                        <span class="absolute inset-0"></span>
                        Michael Foster
                      </a>
                    </p>
                    <p class="text-gray-600">Co-Founder / CTO</p>
                  </div>
                </div>
              </article>

              {/* <!-- More posts... --> */}
            </div>
          </div>
        </div>



      </div>

      <Footer></Footer>

    </div >






  );

}

export default Home;