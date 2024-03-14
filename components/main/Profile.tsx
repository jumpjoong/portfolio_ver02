import styles from "@/style/components/main/profile.module.scss";
import { BorderBox } from "../common/BorderBox";
import Image from "next/image";

export default function Profile() {
  return (
    <section className={styles.profile}>
      <div>
        <div className={styles.profileImage}>
          {/* <img src={"/images/profile.jpeg"} alt="profile_Photo" /> */}
          <Image 
            src="/images/profile.jpeg"
            alt="profile_Photo"
            fill
            sizes="(max-width: 1920px) 100vw, 100vw"
          />
        </div>
        <BorderBox boxStyle="square">
          <div>Address : 경기도 시흥시</div>
          <div>
            <a href="mailto:khj0196@gmail.com">
              Email : khj0196@gmail.com
            </a>
          </div>
          <div>
            <a
              href="https://docs.google.com/document/d/1-7ZBjNPFEdS7I9hQcf0izflteSrEDKat/edit?usp=sharing&ouid=109176874359034204971&rtpof=true&sd=true"
              target="_blank"
            >
              이력서 : 지원자(김현중)
            </a>
          </div>
        </BorderBox>
      </div>
      <BorderBox boxStyle="square">
        <h2>포기하지 않고 끝까지 책임지겠습니다.</h2>
        <p>
          <span>
            &nbsp;&nbsp;저는 문제를 두려워하지 않으며, 주어진 일은 반드시 끝을
            보겠습니다.
          </span>
          <span>
            &nbsp;&nbsp;혼자서 끙끙앓지 않고, 해결을 위해 가능한 모든 수단을
            동원합니다.
          </span>
          <span>
            &nbsp;&nbsp;이는 제가 개발자로서 가져야 할 마음가짐이자 자세라고
            생각합니다.
          </span>
          <span>
            &nbsp;&nbsp;현재도 마찬가지지만 앞으로도 더 나은 미래를 위해
            노력할 것입니다.
          </span>
          <span>
            &nbsp;&nbsp;저는 다른 누구도 아닌 저 자신을 위해 노력하기에 더 멀리
            나아갈 수 있을거라 생각합니다.
          </span>
        </p>
      </BorderBox>
    </section>
  );
}
