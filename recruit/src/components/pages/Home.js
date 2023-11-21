import React, { useState, useEffect } from 'react';
import '../../App.css';
import Footer from '../Footer';
import './Home.css';
import likelion_letter_logo from '../pages/LIKELION_letter_logo.png';
import classNames from 'classnames';


function Home() {
  //커서 깜빡이기
  const [typingText, setTypingText] = useState('');
  const textArray = ['다양한 트랙별로 기획부터 개발까지!', /* 다른 텍스트 추가 */];
  const typingSpeed = 100;  // 타이핑 속도 (밀리초)


  const navigation = [
    { name: '기획 디자인', href: '#', current: false },
    { name: '프론트엔드', href: '#', current: false },
    { name: '백엔드', href: '#', current: false },
    { name: '아이디어톤', href: '#', current: false },
    { name: '중앙 해커톤', href: '#', current: true },

  ]


  useEffect(() => {
    let currentIndex = 0;
    let currentText = textArray[currentIndex];

    const typingInterval = setInterval(() => {
      setTypingText((prevText) => {
        if (prevText === currentText) {
          currentIndex = (currentIndex + 1) % textArray.length;
          currentText = textArray[currentIndex];
          return '';  // 현재 텍스트가 모두 타이핑되면 비움
        } else {
          return currentText.substring(0, prevText.length + 1);
        }
      });
    }, typingSpeed);

    return () => clearInterval(typingInterval);  // 컴포넌트가 언마운트될 때 타이머 정리
  }, [textArray]);


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



        <div className='homeimgBox_2
           relative w-[650px] top-[-180px] left-[400px]'>
          <div className='flex relative top-3'>
            {/* 이미지를 div의 가장 오른쪽으로 이동시킴 */}
            <div className='flex-1' />
            <img className='iconalien' src="image/free_icon_alien_space.png" />
          </div>
          {/* <div class='relative flex flex-row'> */}
          {/* 두번째 homeimgBox */}
          <div className="z-0 w-[650px] h-[558px] bg-white shadow relative" >


            {/*두번째 homeimgBox_상단바  */}
            <div className="z-20 w-[650px] h-[46px] bg-white shadow flex items-center">
              <div className="ms-5  w-[57px] h-[16.07px] relative">
                <div className="w-[15px] h-[15px] left-0 top-0 absolute bg-red-400 rounded-full" />
                <div className="w-[15px] h-[16.07px] left-[21px] top-0 absolute bg-yellow-300 rounded-full" />
                <div className="w-[15px] h-[15px] left-[42px] top-0 absolute bg-lime-500 rounded-full" />
              </div>
            </div>

            {/* 두번째 homeimgBox_상단바_아래  */}
            <div class='relative flex'>

              {/* 회색 가로 박스 */}
              <div className="flex w-[139px] h-[512px]
               bg-zinc-100">


                <div class='ml-2' style={{ marginTop: '20px' }}>

                  <div className='home-overlay-subcontent_title' >

                    < div className='subcontent_title_1 mb-3
                     text-black text-[13px] font-normal font-[Galmuri9] leading-3'>
                      LIKELION </div>
                    {/* 데이터 처리 */}
                    <div div className='subcontent_likelion'>
                      <div class="text-black text-[11px] font-normal font-[Galmuri9] leading-[10.16px] mb-2" >
                        <div style={{ marginTop: '7px' }}>건국대학교</div>
                        <div style={{ marginTop: '7px' }}>멋쟁이사자처럼</div>
                      </div>


                      <ul className="subcontentList"> {/* 리스트 스타일 제거 */}
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                'hover:bg-zinc-300 w-[139px] h-[18px] text-black text-[11px] font-normal font-[Galmuri9] leading-[10.16px] mb-2',

                                {
                                  'w-[139px] h-[18px] bg-zinc-300': item.current,
                                  // 추가적인 클래스를 필요에 따라 여기에 추가할 수 있습니다.
                                }
                              )}
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>


                    </div>

                  </div>

                  <div className='home-overlay-subcontent_content'>
                    <div className='subcontent_title_2
                      mb-3
                      text-black text-[13px] font-normal font-[Galmuri9] leading-3 ' style={{ marginTop: '24px' }}>
                      12기 모집</div>

                    <div className='subcontent_recruit12th
                    text-black text-[11px] font-normal font-[Galmuri9] leading-[10.16px]'>

                      아기사자 new!</div>

                    <div className='subcontent_recruit12th
                    text-black text-[11px] font-normal font-[Galmuri9] leading-[10.16px] mt-2'>

                      00.00 ~ 00.00</div>

                    <div className='subcontent_recruit12th
                    text-black text-[11px] font-normal font-[Galmuri9] leading-[10.16px] mt-2'>

                      테킷 VOD</div>



                  </div>
                </div>

              </div>


              <div className="flex-1 place-self-center home-overlay_pic ml-7">
                <div className='home-overlay_pic_text'>멋쟁이사자처럼 대학 11주년 해커톤.png</div>
                <img className src="image/11th_pic.png" />

                {/* 로고 글자 */}
                <img className="absolute bottom-0 right-0 mb-3 mr-3 w-[300px] h-[23px]" src={likelion_letter_logo} />

              </div>



            </div>



          </div>
        </div>


        {/* blueblackroundprojectimgBox */}
        <div className='projectimgBox' >

          {/* 상단 */}
          <div class="relative w-[1017px] h-[113px] bg-violet-950 rounded-[43px]">
            <div className='absolute ml-10 mt-4
             text-white text-2xl font-[Galmuri9] font-normal first-letter: tracking-wide placeholder:littletitle'>
              건국대학교 멋쟁이사자처럼</div>
          </div>



          {/* 하단 */}
          <div className="relative -mt-12 
            w-[1017px] h-[772px] rounded-b-lg bg-black">
            <div className="flex items-center justify-center p-7
               text-white littlesubtitle text-4xl font-normal font-[Galmuri9] tracking-widest">
              내 손으로 배포까지!</div>
            <div className="ml-10 my-6
           text-white text-[28px] font-normal font-[Galmuri9] tracking-wider ">
              <div> &gt;&gt; 11기 멋사 중앙 해커톤</div>
              <div> &gt;&gt; Project 모음집</div>
            </div>



            <div className="ml-10 grid grid-cols-1 gap-x-6 gap-y-6 
            sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">

              {/* 프로젝트1 */}
              <div class="projectgrid">
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
              <div class="projectgrid">
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
              <div class="projectgrid">
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

            <div className="ml-10 mt-10 text-yellow-300 text-[28px] font-normal font-[Galmuri9] tracking-wider flex items-center">
              &gt;&gt; 프로젝트를 자세히 보시겠습니까?
              <img src="image/type1.png" className='yellowcursor' alt='cursor' style={{ marginLeft: '2px' }} />
            </div>



            {/*<div class="viewdetail">
              [자세히 보러가기]</div> */}

            <div className="detailLink">
              [자세히 보러가기]
            </div>

            {/* <div class=" text-white text-4xl font-normal font-[Galmuri9] tracking-widest 
            float-right mr-10">
              [자세히 보러가기]</div> */}

          </div>
        </div>


        {/*다양한 트랙별로 기획부터 개발까지*/}
        <div className='flex flex-col mt-72'>


          <div>
            <img src="image/free-icon-squirell.png" className='squirellicon float-right mr-32' />
          </div>

          <div className="flex w-[800px] h-[88px] bg-white rounded-[44px] mx-auto">
            <img src="image/free-icon-search.png" className='p-5 searchicon' />
            <div className='flex items-center justify-center
            text-black text-4xl font-normal font-[Galmuri9] tracking-widest 
            mx-5'>{typingText}</div>
          </div>


          <div className='forbigoverlay'>

            {/*yellowZone*/}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-1 lg:grid-cols-3
          place-items-center mt-36">

              {/* 노란색 섹션 - 1 */}
              {/* <div className='flex flex-col'> */}
              <div className='yz'>
                <div class="yz_container1">
                  <div className="w-[83.03px] h-[29.92px] bg-yellow-400 rounded-xl">  </div>
                  <div className="-mt-3 w-[285px] h-[184.02px] bg-yellow-400 rounded-[9px]
                  flex items-center justify-center">
                    <div className="w-[194.49px] h-[32.91px] text-black text-4xl font-normal font-['Galmuri9'] leading-[33.24px]">
                      기획/디자인</div>

                  </div>
                </div>

                <div className="overlay-div-1">
                  <div class="svg1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="869" height="672" viewBox="0 0 869 672" fill="none">
                      <path d="M67 672L0 0H285L869 286L67 672Z" fill="#D9D9D9" />
                    </svg>
                  </div>


                  <div class="content-container-1">
                    <div className="part">
                      <div className="text-black text-4xl font-normal font-['Galmuri9'] tracking-widest">
                        기획/디자인?</div> <br />
                      <div className="w-[715.98px] text-black text-xl font-normal font-['Galmuri9'] tracking-wide">
                        어쩌구 저쩌구 설명 어쩌구 저쩌구 설명 어쩌구 저쩌구 설명 어쩌구 저쩌구 설명 어쩌구 저쩌구 설명 어쩌구 저쩌구 설명 어쩌구 저쩌구 설명
                      </div><br />
                    </div>

                    <div className="curriculum">
                      <div className="text-black text-4xl font-normal font-['Galmuri9'] tracking-widest">
                        커리큘럼</div> <br />
                      <div className="w-[715.98px] text-black text-xl font-normal font-['Galmuri9'] tracking-wide">
                        어쩌구 저쩌구 설명 어쩌구 저쩌구 설명 어쩌구 저쩌구 설명 어쩌구 저쩌구 설명 어쩌구 저쩌구 설명 어쩌구 저쩌구 설명 어쩌구 저쩌구 설명
                      </div><br />
                    </div>
                  </div>
                </div>



              </div>



              {/* 노란색 섹션 - 2*/}
              <div className='yz'>

                <div class="yz_container2">
                  <div className="w-[83.03px] h-[29.92px] bg-yellow-400 rounded-xl">  </div>
                  <div className="-mt-3 w-[285px] h-[184.02px] bg-yellow-400 rounded-[9px]
                  flex items-center justify-center">
                    <div className=" text-black text-4xl font-normal font-['Galmuri9'] leading-[33.24px]">
                      프론트엔드</div>
                  </div>
                </div>


                <div className="overlay-div-2">
                  <div class="svg2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="802" height="264" viewBox="0 0 802 264" fill="none">
                      <path d="M0 264L258 0H543L802 264H0Z" fill="#D9D9D9" />
                    </svg>
                  </div>


                  <div class="content-container-2">
                    <div className="part">
                      <div className="text-black text-4xl font-normal font-['Galmuri9'] tracking-widest">
                        프론트엔드?</div> <br />
                      <div className="w-[715.98px] text-black text-xl font-normal font-['Galmuri9'] tracking-wide">
                        어쩌구 저쩌구 설명 어쩌구 저쩌구 설명 어쩌구 저쩌구 설명 어쩌구 저쩌구 설명 어쩌구 저쩌구 설명 어쩌구 저쩌구 설명 어쩌구 저쩌구 설명
                      </div><br />
                    </div>

                    <div className="curriculum">
                      <div className="text-black text-4xl font-normal font-['Galmuri9'] tracking-widest">
                        커리큘럼</div> <br />
                      <div className="w-[715.98px] text-black text-xl font-normal font-['Galmuri9'] tracking-wide">
                        어쩌구 저쩌구 설명 어쩌구 저쩌구 설명 어쩌구 저쩌구 설명 어쩌구 저쩌구 설명 어쩌구 저쩌구 설명 어쩌구 저쩌구 설명 어쩌구 저쩌구 설명
                      </div><br />
                    </div>
                  </div>

                </div>

              </div>

              {/* 노란색 섹션 - 3*/}
              <div className='yz'>


                <div class="yz_container3">
                  <div className=" w-[83.03px] h-[29.92px] bg-yellow-400 rounded-xl">  </div>
                  <div className="-mt-3 w-[285px] h-[184.02px] bg-yellow-400 rounded-[9px]
                    flex items-center justify-center">
                    <div className="text-black text-4xl font-normal font-['Galmuri9'] leading-[33.24px]">
                      백엔드</div>

                  </div>
                </div>

                <div class="overlay-div-3">


                  <div class="svg3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="898" height="650" viewBox="0 0 898 650" fill="none">
                      <path d="M0 264L613 0H898L802 650L0 264Z" fill="#D9D9D9" />
                    </svg>
                  </div>

                  <div class="content-container-3">
                    <div className="part">
                      <div className="text-black text-4xl font-normal font-['Galmuri9'] tracking-widest">
                        백엔드?</div> <br />
                      <div className="w-[715.98px] text-black text-xl font-normal font-['Galmuri9'] tracking-wide">
                        어쩌구 저쩌구 설명 어쩌구 저쩌구 설명 어쩌구 저쩌구 설명 어쩌구 저쩌구 설명 어쩌구 저쩌구 설명 어쩌구 저쩌구 설명 어쩌구 저쩌구 설명
                      </div><br />
                    </div>

                    <div className="curriculum">
                      <div className="text-black text-4xl font-normal font-['Galmuri9'] tracking-widest">
                        커리큘럼</div> <br />
                      <div className="w-[715.98px] text-black text-xl font-normal font-['Galmuri9'] tracking-wide">
                        어쩌구 저쩌구 설명 어쩌구 저쩌구 설명 어쩌구 저쩌구 설명 어쩌구 저쩌구 설명 어쩌구 저쩌구 설명 어쩌구 저쩌구 설명 어쩌구 저쩌구 설명
                      </div><br />
                    </div>
                  </div>

                </div>


              </div>

            </div>
          </div>


          <div className='behindoverlay'>
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

          </div>
        </div>

        <Footer></Footer>

      </div >



    </div >


  );

}

export default Home;

