<template>
  <v-app class="custom-bg-color">
    <v-main>
      <div class="custom-bg-color">
        <v-container class="text-center grey">
          <div class="video-fit">
            <video
              class="responsive-video"
              src="../images/static2.mp4"
              autoplay
              loop
              muted
              playsinline
            ></video>
          </div>
          <div class="logo_center">
            <img src="../images/logo_under.png" alt="logo_center" />
          </div>
          <img
            src="../images/larlogo.png"
            class="bottom-logo"
            alt="logo_under"
          />
          <v-h1 class="footer">
            Instagram &amp; Twitter :
            <span class="indent">@larvaeyet</span> <br />
            <span class="double-indent">&nbsp;&nbsp;Email :</span>
            <span class="indent">&nbsp;&nbsp;larvaeyet@gmail.com</span></v-h1
          >
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<style>
.custom-bg-color {
  background-color: black;
  margin-top: 10px;
}
.video-fit {
  object-fit: cover;
  margin: 0 auto;
  top: 10%;
  right: 0%;
  left: 0%;
  width: 100%;
  height: 40%;
  margin: 0 auto;
  position: absolute;
}
.video-fit video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.responsive-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.image-home {
  margin: 0 auto;
  object-fit: cover;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.logo_center {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 60%;
  margin: 0 auto;
  width: 100%;
  text-align: center;
}

.bottom-logo {
  position: absolute;
  top: 86%;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 20%;
}

.footer {
  position: absolute;
  bottom: 0%;
  left: 0;
  right: 0;
  top: 90%;
  margin: 0 auto;
  width: 100%;
  color: white;
  font-weight: bold;
  font-size: 18px;
  margin-right: 40px;
  font-size: 2vw;
}

.indent {
  padding-left: 20px; /* adjust as needed */
  padding-left: 2vw;
}

.double-indent {
  padding-left: 195px; /* adjust as needed */
  padding-left: 4vw;
}

@media (min-width: 768px) and (max-width: 991px) {
  .video-fit {
    height: 50%; /* adjust as needed */
  }

  .bottom-logo {
    width: 30%; /* adjust as needed */
  }
}

/* For mobile devices */
@media (max-width: 767px) {
  .video-fit {
    height: 60%; /* adjust as needed */
  }

  .bottom-logo {
    width: 40%; /* adjust as needed */
  }
}
</style>

<script>
export default {
  name: "AppHome", // コンポーネント名を "AppHeader" に変更
};
</script>
