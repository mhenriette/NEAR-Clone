/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
   colors:{
    mywhite:'#fcfcfc',
    darkgrey:'#3f4246',
    myindigo:'#9092fb',
    mysky:'#86b5ef',
    lightgreen:'#7bdde2',
    textgray:'#676767'
    
   


   },
  
   margin:{
    large:'192px',
    medium:'180px',
    small:'168px'
   },
   padding:{
    'top':'34px',
    extrasmall:'6px',
    small:'148px',
    medium:'23px',
    large:'540px',
    middle:'39px'
   },
   fontSize:{
    large:'36px',
    medium:'22px',
    basex:'32px',
    extralarge:'72px'
   },
   lineHeight:{
medium:'28px',
large:'60px',
basex:'44px'

   },
   width:{
    small:'180px',
    basex:'400px',
    medium:'200px',
    large:'910px',
    mediumx:'296px',
    largex:'664px',
    extralarge:'896.96px',
    wide:'540px'
  
   
   },
   maxWidth:{
    large:'940px'
   },
   
   height:{
    large:'600px',
    medium:'500px',
    basex:'400px',
    small:'180px',
    mediumx:'296px',
    smallx:'362.25px'
  

   },
   letterSpacing:{
    small:'-0.02em'
   },
   fontFamily:{
    graphik:"Graphik,ui-sans-serif,system-ui,sans-serif"
  },
  
 
  
    },
  },
  plugins: [],
}
