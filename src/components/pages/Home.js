import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './Home.css';




function Home() {

  //기타 변수 선언이나 그런 것들 하면 될 것 같고 


  return (

    <div className='home-page'>
      <div className='borderline'>

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
          <img src="image/link-Box.png" className='home_group19' />

          <div className='home-overlay_subcontent'>

            <div className='home-overlay-subcontent_title'>
              <div div className='subcontent_title_1'>
                LIKELION</div>
              <div div className='subcontent_title_2'>
                12기 모집</div>
            </div>

            <div className='home-overlay-subcontent_content'>
              <div div className='subcontent_likelion'>
                건국대학교<br />멋쟁이사자처럼<br />기획 디자인<br />프론트엔드<br />백엔드<br />아이디어톤<br />중앙 해커톤</div>
              <div div className='subcontent_recruit12th'>
                아기사자 new!<br />00.00 ~ 00.00<br />테킷 VOD</div>
            </div>


          </div>

          {/* 이제 여기에 온갖 아이콘 다 들어감 */}
        </div>

        {/*blueblackroundprojectimgBox*/}
        <div className='projectimgBox'>
          <img src="image/blueblackround.png" className="blueblackround" />
          <div className='littletitle'>
            건국대학교 멋쟁이사자처럼</div>
          <div className="littlesubtitle">
            내 손으로 배포까지!</div>

          <div className='collection'>
            <h1 className='title'> &gt;&gt; 11기 멋사 중앙 해커톤</h1>
            <h2 className='subtitle'> &gt;&gt; Project 모음집</h2>

            <div className='projectcontentbox'>
              <img src="image/projectBox.png" className='projectbox' />
              <div>[ 프로젝트명 ]</div>
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
          <img src="image/whiteroundrecrangle.png" className='whiteroungrectangle' />
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
          <div className='musicplay-box'>
          <img src="image/musicplay.png" className="musicplay" 
          alt= "musiclay" style={{ width: "657px", height: "345px"}}/>
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
            <div className="br-gap1" style={{ marginBottom: '4px'}}>
              24년도 기준 건국대학교 재학생, 휴학생</div>
            <div className='sub-br' style={{ marginBottom: '35px'}}>
              *졸업생은 불가, 졸업예정생은 가능</div>
            <div className='br-gap1' style={{ marginBottom: '63px'}}>
              창업, 개발에 대한 열정이 있는 대학생</div>
            <div className="br-gap1">
              개발 / 디자인 / 기획에 도전하고 싶은 건국대 재학생 및 휴학생</div>
          </div>
        </div>


        {/*select-schedule*/}
        <div className='select-schedule'>
          {/* 선발일정 */}
          <div className='title2'style={{ marginBottom: '37px'}}>
            선발 일정</div>
          <div className='content2'>
            <div className="br-gap2" style={{ marginBottom: '63px'}}>
              서류 지원 : 24.00.00(월) ~ 24.00.00(월) 00:00</div>
            <div className="br-gap2" style={{ marginBottom: '63px'}}>
              1차 합격 발표: 24.00.00(월)</div>
            <div className='br-gap2'style={{ marginBottom: '63px'}}>
              2차 면접: 24.00.00(화) - 24.00.00(목)</div>
            <div className="br-gap2">
              최종 발표: 24.00.00(금)</div>
          </div>
        </div>


        {/*activity-schedule*/}
        <div className='activity-schedule'>
          {/* 활동일정 */}
          <div className='title3' style={{ marginBottom: '37px'}}>
            활동 일정</div>
          <div className='content3'>
            <div className="br-gap3" style={{ marginBottom: '63px'}}>
              활동 기간: 24.00월 - 24.00월</div>
            <div className="br-gap3" style={{ marginBottom: '63px'}}>
              학교 OT : 24.00.00(월) 00시</div>
            <div className='br-gap3'style={{ marginBottom: '63px'}}>
              전체 OT : 24.00.00(수) 00시</div>
            <div className="br-gap3" style={{ marginBottom: '63px'}}>
              중앙 아이디어톤 : 24년 6월 중</div>
            <div className="br-gap3" style={{ marginBottom: '200px'}}>
              중앙 해커톤 : 24년 7월 - 24년 8월</div>
          </div>
        </div>



      </div>

      <Footer></Footer>

    </div >

  );

}

export default Home;