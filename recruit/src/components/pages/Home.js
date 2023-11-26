import React, { useState, useEffect } from 'react';
import '../../App.css';
import Footer from '../Footer';
import './Home.css';
import classNames from 'classnames';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ConfettiExplosion from 'react-confetti-explosion';

function Home() {
  const activeLink = location.pathname;
  //커서 깜빡이기
  const [typingText, setTypingText] = useState('');
  const textArray = ['다양한 트랙별로 기획부터 개발까지!', /* 다른 텍스트 추가 */];
  const typingSpeed = 100;  // 타이핑 속도 (밀리초)
  const [projects, setProjects] = useState([]);
  const [isExploding, setIsExploding] = React.useState(false);
  const [imageURL, setImageURL] = useState('');
  const [currentNavItem, setCurrentNavItem] = useState([]);
  const [periodInfo, setPeriodInfo] = useState(null);
  const days = ['일', '월', '화', '수', '목', '금', '토'];

  const navigation = [
    { name: '기획 디자인', href: 'api/images/pmanddesignimage/1', current: false },
    { name: '프론트엔드', href: 'api/images/frontend/1', current: false },
    { name: '백엔드', href: 'api/images/backend/1', current: false },
    { name: '아이디어톤', href: 'api/images/ideathon/1', current: false },
    { name: '중앙 해커톤', href: 'api/images/hackathon/1', current: true },
  ];
  

  // API 호출 함수를 useEffect 외부로 이동
  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://34.64.82.240:8080/random/11/');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects: ', error);
    }
  };

  const fetchSectionImage = async (navItem) => {
    if (navItem.href != undefined) {
      try {
        const response = await axios.get(`http://3.37.130.241:8080/${navItem.href}`);
        setImageURL(response.data.photo);
      } catch (error) {
        console.error('Error fetching projects: ', error);
      }
    } else {
      try {
        const response = await axios.get(`http://3.37.130.241:8080/api/images/hackathon/1`);
        setImageURL(response.data.photo);
      } catch (error) {
        console.error('Error fetching projects: ', error);
      }
    }
  };

  const handleGachaClick = () => {
    let count = 0;
    let intervalTime = 10; // 시작 간격을 10ms로 설정
    const maxCount = 10; // 총 시도 횟수
    const intervalIncrease = 25; // 각 호출마다 간격 증가량

    const fetchInterval = () => {
      setTimeout(async () => {
        await fetchProjects();
        count += 1;
        if (count < maxCount) {
          intervalTime += intervalIncrease; // 간격을 점점 늘린다
          fetchInterval(); // 재귀적으로 함수를 다시 호출
        } else {
          // 마지막 호출일 때 폭죽 효과를 트리거
          setIsExploding(true);
          // 1초 후에 폭죽 효과를 멈춘다
          setTimeout(() => {
            setIsExploding(false);
          }, 2000);
        }
      }, intervalTime);
    };

    fetchInterval(); // 최초 실행
  };

  const handleClick = (name) => {
    const selectedNavItem = navigation.find((item) => item.name === name);
    setCurrentNavItem(selectedNavItem);
  };

  useEffect(() => {
    // 컴포넌트 마운트 시 한 번 호출
    fetchProjects();
  }, []);

  useEffect(() => {
    if (currentNavItem) {
      fetchSectionImage(currentNavItem);
    }

    if (!periodInfo) {
      getPeriodInfo();
    }

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
  }, [textArray, currentNavItem, periodInfo]);

  const getPeriodInfo = async () => {
    try {
      const apiPath = `http://3.37.130.241:8080/api/recruitment/schedule/`;
      const response = await fetch(apiPath);
      const data = await response.json();
      setPeriodInfo(data);
    } catch (error) {
      console.error(error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
    const formattedDayofWeek = `(${days[date.getDay()]})`;
    return `${formattedDate}${formattedDayofWeek}`;
  };

  const formatDate2 = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
    const formattedDayofWeek = `(${days[date.getDay()]})`;
    const formattedTime = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    return `${formattedDate}${formattedDayofWeek} ${formattedTime}`;
  };

  return (

    <div className='home-page'>
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

        <div className='homeimgBox_2'>
          <div className='containicon'>
            <div className='containicon_right' />
            <img className='iconalien' src="image/free_icon_alien_space.png" />
          </div>

          {/* 두번째 homeimgBox */}
          <div className="homeimgBox_2_white" >
            {/*두번째 homeimgBox_상단바  */}
            <div className="homeimgBox_2_white_top">
              <div className="homeimgBox_2_white_top_circles">
                <div className="circles_1" />
                <div className="circles_2" />
                <div className="circles_3" />
              </div>
            </div>

            {/* 두번째 homeimgBox_상단바_아래  */}
            <div class='homeimgBox_2_white_down'>
              {/* 회색 가로 박스 */}
              <div className="graySidebar">
                <div class='Sidebar' style={{ marginTop: '20px' }}>
                  <div className='home-overlay-subcontent_title' >
                    < div className='subcontent_title_1'>
                      LIKELION </div>
                    {/* 데이터 처리 */}
                    <div div className='subcontent_likelion'>
                      <div class="subcontent_likelion_title" >
                        <div style={{ marginTop: '7px' }}>건국대학교</div>
                        <div style={{ marginTop: '7px' }}>멋쟁이사자처럼</div>
                      </div>
                      <ul className="subcontentList"> {/* 리스트 스타일 제거 */}
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <div
                              className={classNames(
                                'subcontent_list_group', {
                                'subcontent_list_active': item.name === currentNavItem.name,
                              })}
                              onClick={() => handleClick(item.name)}
                            >
                              <span className="subcontent_list_style">
                                {item.name}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className='home-overlay-subcontent_content'>
                    <div className='subcontent_title_2' style={{ marginTop: '24px' }}>
                      12기 모집</div>
                    <div className='subcontent_recruit12th' style={{ marginTop: '11px' }}>
                      아기사자 new!</div>
                    <div className='subcontent_recruit12th' style={{ marginTop: '7px' }}>
                      00.00 ~ 00.00</div>
                    <div className='subcontent_recruit12th' style={{ marginTop: '7px' }}>
                      테킷 VOD</div>
                  </div>
                </div>
              </div>

              {/* 사진 api받고 출력하기 */}
              <div className="home-overlay_pic ">
                <div className='home-overlay_pic_text'>{currentNavItem.name} 사진</div>
                <img src={imageURL} alt='project_img' width='457' height='275' />
                {/* 로고 글자 */}
                <img className="home-overlay_logo" src='/image/LIKELION_letter_logo.png' />
              </div>
            </div>
          </div>
        </div>


        {/* blueblackroundprojectimgBox */}
        <div className='projectimgBox' >

          {/* 상단 */}
          <div class="projectimgBox_top">
            <div className='projectimgBox_top_text'>
              건국대학교 멋쟁이사자처럼</div>
          </div>



          {/* 하단 */}
          <div className="projectimgBox_down">
            <div className="projectgrid_gacha" onClick={handleGachaClick}>
              [프로젝트 가차 돌리기]
              {isExploding && <ConfettiExplosion />}
            </div>
            <div className="projectimgBox_down_title">
              내 손으로 배포까지!</div>
            <div className="projectimgBox_down_subtitle">
              <div> &gt;&gt; 11기 멋사 중앙 해커톤</div>
              {isExploding && <ConfettiExplosion />}
              <div> &gt;&gt; Project 모음집</div>
            </div>

            <div className="projectimgBox_down_projects">
              {projects.map((project, index) => (
                <Link key={index}
                  to={`/projectdetail/11/${project.team_name}`}
                  state={{ project: project }}>
                  <div className="projectgrid">
                    <div className="projectgrid_form">
                      <div className="projectgrid_title">[ {project.p_name} ]</div>
                    </div>
                    <div className='projectgrid_contentbox'>
                      <div className='projectgrid_contentbox_title'>
                        <img src={`https:/${project.thumbnail}`} alt='project_img' width='221' height='152' />
                      </div>
                      <div className='projectgrid_contentbox_content'>
                        프로젝트 보러가기!
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="projectgrid_detail">
              &gt;&gt; 프로젝트를 자세히 보시겠습니까?
              {isExploding && <ConfettiExplosion />}
              <img src="image/type1.png" className='yellowcursor' alt='cursor' style={{ marginLeft: '2px' }} />
            </div>

            <Link to='/exhibition' className={` ${activeLink === '/exhibition' ? 'active' : ''}`}>
              <div className="detailLink">
                [자세히 보러가기]
              </div>
            </Link>

          </div>
        </div>


        {/*다양한 트랙별로 기획부터 개발까지*/}
        <div className='trackDetailZone'>
          <div>
            <img src="image/free-icon-squirell.png" className='squirellicon' />
          </div>
          <div className="trackDetailZone_whiteRbox">
            <img src="image/free-icon-search.png" className='searchicon' />
            <div className='trackDetailZone_whiteRbox_title'>{typingText}</div>
          </div>
          <div className='trackDetailZone_overlay'>
            {/*yellowZone*/}
            <div className="trackDetailZone_yz_guideLine">
              {/* 노란색 섹션 - 1 */}
              <div className='yz'>
                <div class="yz_container1">
                  <div className="yz_top">  </div>
                  <div className="yz_down">
                    <div className="yz_text">
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
                    <div className="content_part">
                      <div className="content_part_title">
                        기획/디자인?</div> <br />
                      <div className="content_part_content">
                        기획/디자인 트랙은 창의적인 시각과 전략적인 기획을 통해 사용자 경험을 디자인하는 역할을 맡습니다. UX/UI 디자인 원칙을 기반으로 웹 애플리케이션의 사용자 플로우를 기획하고, 감각적인 디자인으로 사용자와의 상호작용을 최적화합니다. 또한, 팀과의 협업을 통해 아이디어를 구체화하고 시각적 표현으로 프로젝트를 완성합니다.
                      </div><br />
                    </div>
                    <div className="curriculum">
                      <div className="content_part_title">
                        커리큘럼</div> <br />
                      <div className="content_part_content">
                        공통세션 기간동안 개발자와의 협업을 위한 기본적인 html, css의 동작을 이해하고, 기획 프로세스 및 기획서 작성 과정, IA 설계, 피그마를 통한 디자인 기초까지 기획 및 디자인의 전반적인 과정을 학습합니다.
                      </div><br />
                    </div>
                  </div>
                </div>
              </div>

              {/* 노란색 섹션 - 2*/}
              <div className='yz'>
                <div class="yz_container2">
                  <div className="yz_top">  </div>
                  <div className="yz_down">
                    <div className="yz_text">
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
                    <div className="content_part">
                      <div className="content_part_title">
                        프론트엔드?</div> <br />
                      <div className="content_part_content">
                        프론트엔드는 웹 페이지의 사용자 인터페이스를 개발하며, 클라이언트 사이드 로직을 구현하여 동적인 기능을 제공합니다. 또한, 사용자 인증, 데이터 통신, 보안 등 다양한 측면에서 웹 애플리케이션의 전반적인 경험을 디자인하고 구현합니다.
                      </div><br />
                    </div>
                    <div className="curriculum">
                      <div className="content_part_title">
                        커리큘럼</div> <br />
                      <div className="content_part_content">
                        공통세션 과정동안 git, html, css에 대한 전반적인 지식을 배우고, javascript를 기반으로 한 React 라이브러리를 사용하여 UI 구성 및 서버와의 api통신까지 한 학기동안 진행합니다.
                      </div><br />
                    </div>
                  </div>
                </div>
              </div>

              {/* 노란색 섹션 - 3*/}
              <div className='yz'>
                <div class="yz_container3">
                  <div className="yz_top">  </div>
                  <div className="yz_down">
                    <div className="yz_text">
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
                    <div className="content_part">
                      <div className="content_part_title">
                        백엔드?</div> <br />
                      <div className="content_part_content">
                        프론트엔드의 요청을 바탕으로 데이터베이스에 정보를 저장하고, 필요한 작업을 거쳐 원하는 결과를 반환하는 역할을 수행합니다. 또한, 유효성 체크, 토큰 발급등을 통한 로그인, 회원가입 과정에서의 보안도 경험합니다.
                      </div><br />
                    </div>
                    <div className="curriculum">
                      <div className="content_part_title">
                        커리큘럼</div> <br />
                      <div className="content_part_content">
                        공통세션 과정동안 git, html, css에 대한 전반적인 지식을 배우고, 주력 언어에 따라 Django와 Springboot 라이브러리를 바탕으로 한 CRUD, 로그인, 회원가입을 통해 서비스를 만들고, API를 만들어 프론트엔드와 통신하는 과정까지 학습합니다.
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
            {periodInfo && (
              <div className='select-schedule'>
                {/* 선발일정 */}
                <div className='title2' style={{ marginBottom: '37px' }}>
                  선발 일정</div>
                <div className='content2'>
                  <div className="br-gap2" style={{ marginBottom: '63px' }}>
                    서류 지원 : {formatDate(periodInfo.applicationStartDate)} ~ {formatDate2(periodInfo.applicationEndDate)}</div>
                  <div className="br-gap2" style={{ marginBottom: '63px' }}>
                    1차 합격 발표: {formatDate(periodInfo.applicationResultAnnouncementDate)}</div>
                  <div className='br-gap2' style={{ marginBottom: '63px' }}>
                    2차 면접: {formatDate(periodInfo.interviewStartDate)} ~ {formatDate(periodInfo.interviewEndDate)}</div>
                  <div className="br-gap2">
                    최종 발표: {formatDate(periodInfo.finalResultAnnouncementDate)}</div>
                </div>
              </div>
            )}

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


