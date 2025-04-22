// src/components/Main.js
import studyImage from '../assets/images/studyp.png' // 이미지 import 추가

function Main() {
  return (
    <main style={{ display: 'flex', height: '80vh' }}>
      {/*메인 소개*/}
      <section
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>
          <h2>스터디를 쉽게! 함께!</h2>
          <p>
            다양한 스터디 그룹에 참여하고,
            <br />내 스터디를 만들어보세요.
          </p>
        </div>
      </section>

      {/*메인 이미지*/}
      <section
        style={{
          flex: 1,
          backgroundColor: '#f0f0f0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={studyImage}
          alt='스터디 이미지'
          style={{ maxWidth: '70%', height: 'auto' }}
        />
      </section>
    </main>
  )
}

export default Main
