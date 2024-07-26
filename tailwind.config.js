module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pathway: ["Pathway Extreme", "sans-serif"],
      },
      backgroundImage: {
        gradientbg:
          "radial-gradient(ellipse 85% 50px at center calc(100% + 20px),#60861b,#0f1610)",
        numbergradientbg:
          "radial-gradient(ellipse 85% 50px at center calc(100% + 20px),#185760,#061044)",
        numberbg: "linear-gradient(-22deg,#00a2ff 25%,#06fdd8 50%,#0760d5)",
        numberlabelbg: "linear-gradient(90deg,#132890,#09175b)",
        ergradientbg:
          "radial-gradient(ellipse 85% 50px at center calc(100% + 20px),#185760,#061044)",
        erbg: "linear-gradient(-22deg,#00a2ff 25%,#06fdd8 50%,#0760d5)",
        erlabelbg: "linear-gradient(90deg,#132890,#09175b)",
        outputbg: "linear-gradient(-22deg,#fb0000 25%,#fdc006 50%,#d50707)",
        outputgrbg:
          "radial-gradient(ellipse 85% 50px at center calc(100% + 20px),#601818,#0f1610)",
        outputlabelbg: "linear-gradient(147deg,#5b0404,#8a0808 74%)",
        flowlabelbg: "linear-gradient(90deg,#1e4c17,#2d792d)",
        custombg: "linear-gradient(-22deg,#d000ff,#fb0000)",
        cutomlabelbg: "linear-gradient(90deg,#5b0b0b,#c709ae)",
        wingBg: "url('/images/wing.png')",
      },
      colors: {
        lightBgGreen: "#E7E7E7",
        lightGreen: "#DCEDC8",
        outerborder: "#1feb29",
        outerborderBlue: "#132890",
        cutomborder: "#d000ff",
        frogbg: "#0a8006",
        uniformbg: "#343",
        listcolor: "#b0e49c",
        tetnum: "#888",
        arrowbg: "#335330",
        arrowcolor: "#deeeef",
        toggelarrow: "#7c077e",
        stripcont: "#ddd",
        settingcolor: "#e1ffc8f2",
        boxbg: "#9fed85",
        forgbg: "#12ff12",
        numberrgb: "#3c627c",
        outputborder: "#b84242",
        outputuniformbg: "#433",
        outputtext: "#f86464",
        outputarrowbg: "#533030",
        vertbg: "#be0404",
        customvertbg: "#be0404",
        customstripbg: "#433",
      },
      boxShadow: {
        arrowsh:
          "inset 0 0 5px #91fe70a6, inset 0 1px 0 hsla(0,16%,63%,.9), inset 0 0 1px rgba(9,255,1,.5)",
        arrowtoggel:
          "inset 0 0 5px #ee72aea6, inset 0 1px 0 hsla(0,0%,100%,.9), inset 0 0 1px rgba(255,175,1,.5)",
        frogshadow: "0 0 4px rgba(50,0,0,.1)",
        outputshadow:
          "inset 0 0 5px #fe7070a6, inset 0 1px 0 hsla(0,0%,100%,.9), inset 0 0 1px rgba(255,115,1,.5)",
      },
      filter: {
        filtershadow: "drop-shadow(0 0 2px rgba(0,50,0,.9))",
      },
      fontSize: {
        7: "7px",
        8: "8px",
        9: "9px",
        10: "10px",
        13: "13px",
        15: "15px",
        17: "17px",
        22: "22px",
        25: "25px",
        26: "26px",
        28: "28px",
        32: "32px",
        44: "44px",
        60: "60px",
        80: "80px",
        100: "100px",
      },
    },
  },

  plugins: [],
  important: true,
};
